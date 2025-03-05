import React, { useState } from "react";
import { View, StyleSheet, Keyboard, Alert, TouchableWithoutFeedback } from "react-native";
import { useImagePicker } from "@/hooks/useImagePicker";
import Loading from "@/components/Loading";
import ImagePreview from "@/components/ImagePreview";
import CaptionInput from "@/components/CaptionInput";
import CustomButton from "@/components/CustomButton";
import storage from "@/lib/storage";
import firestore from "@/lib/firestore";
import { useAuth } from "@/components/AuthProvider";

export default function Page() {
    const auth = useAuth();
    const [caption, setCaption] = useState<string>("");
    const [loading, setLoading] = useState(false);

    const {image, openImagePicker, reset} = useImagePicker();

    async function handleSave() {
        if (!image) return;
        setLoading(true);
        const name = image?.split("/").pop() as string;
        const { downloadUrl, metadata } = await storage.upload(image, name);
        console.log(downloadUrl);

        firestore.addPost({
            caption,
            image: downloadUrl,
            createdAt: new Date(),
            createdBy: auth.user?.uid!!
        });

        setLoading(false);
        alert("Post added!");
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container} >
                <View style={styles.imageContainer}>
                    <ImagePreview src={image} />
                </View>
                <View style={styles.footer}>
                    {!image ? (
                        <CustomButton
                            title="Choose a photo"
                            onPress={openImagePicker} />
                    ) : (
                        <View style={styles.image}>
                            <CaptionInput caption={caption} setCaption={setCaption} />
                            <CustomButton title="Save" onPress={handleSave} />
                            <CustomButton title="Reset" onPress={reset} backgroundColor="F5F5F5" textColor="#000000" />
                        </View>
                    )}
                </View>
                {loading && <Loading />}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5'
    },
    footer: {
        marginTop: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 300,
        height: 400,
    },
    imageContainer: {
        width: 300,
        height: 300,
        backgroundColor: "#D3D3D3",
        marginTop: -80,
        borderRadius: 20,
    }
});