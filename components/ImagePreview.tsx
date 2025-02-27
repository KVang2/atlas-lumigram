import React from "react";
import { View, Image, StyleSheet } from "react-native";

interface ImagePreviewProps {
    src: string | undefined;
}

export default function ImagePreview({ src }: ImagePreviewProps) {
    if (!src) return null;

    return (
        <View style={styles.container} >
            <Image 
                source={{ uri: src || "https://via.placeholder.com/300x300.png?text=No+Image" }} 
                style={styles.image} 
                resizeMode="cover"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 300,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        backgroundColor: "#D3D3D3",
    },
});