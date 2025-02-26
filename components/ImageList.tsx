import { useState } from "react";
import { View, Image, Alert, FlatList, StyleSheet, Text } from "react-native";
import { placeholderImages } from "@/components/placeholder"; // Import placeholder data
import {
  LongPressGestureHandler,
  TapGestureHandler,
  State,
} from "react-native-gesture-handler";

export default function ImageList() {
  const [visibleCaption, setVisibleCaption] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      {/* Flatlist for rendering images */}
      <FlatList
        data={placeholderImages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TapGestureHandler
            numberOfTaps={2}
            onHandlerStateChange={({ nativeEvent }) => {
              if (nativeEvent.state === State.ACTIVE) {
                Alert.alert("Favorite image");
              }
            }}
          >
            {/* Long Press Gesture to display caption */}
            <LongPressGestureHandler
              minDurationMs={500}
              onHandlerStateChange={({ nativeEvent }) => {
                if (nativeEvent.state === State.ACTIVE) {
                  setVisibleCaption((prev) => (prev === item.id ? null : item.id));
                }
              }}
            >
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.url }} style={styles.image} />
                {visibleCaption === item.id && (
                  <View style={styles.captionContainer}>
                    <Text style={styles.caption}>Placeholder Caption</Text>
                  </View>
                )}
              </View>
            </LongPressGestureHandler>
          </TapGestureHandler>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  list: {
    alignItems: "center",
    paddingVertical: 10,
  },
  image: {
    width: 420,
    height: 400,
    marginBottom: 10,
    borderRadius: 10,
  },
  caption: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#000000",
    padding: 5,
    borderRadius: 5,
  },
  imageContainer: {
    position: "relative",
  },
  captionContainer: {
    position: "absolute",
    bottom: 10,
    padding: 5,
    borderRadius: 5,
  },
});
