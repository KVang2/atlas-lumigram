import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native';

interface CaptionInputProps {
    caption: string;
    setCaption: (text: string) => void;
}

export default function CaptionInput({ caption, setCaption }: CaptionInputProps) {
    return (
        <View>
            <TextInput
                style={styles.input}
                value={caption}
                onChangeText={setCaption}
                placeholder="Add a caption..."
                placeholderTextColor="#999"
                multiline
                />
        </View>
    );
}

const styles = StyleSheet.create({
   input: {
    width: 350,
    height: 60,
    borderWidth: 1,
    borderColor: "#1ED2AF",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#1ED2AF',
    backgroundColor: '#F5F5F5',
    marginLeft: -25,
    marginTop: 15,
    }
})