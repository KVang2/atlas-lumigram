import { View, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ImageList from "@/components/ImageList";

export default function Index() {
  return (
    <GestureHandlerRootView style={styles.gesture}>
      <View style={styles.container}>
        <ImageList />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  gesture: {
    flex: 1,
  }
});
