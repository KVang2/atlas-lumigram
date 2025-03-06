import { useEffect, useState } from "react";
import { View, Image, Alert, FlatList, StyleSheet, RefreshControl, Text } from "react-native";
import { homeFeed } from "@/placeholder";
import {
  LongPressGestureHandler,
  TapGestureHandler,
  State,
} from "react-native-gesture-handler";
import { db } from "@/firebaseConfig";
import { query, orderBy, collection, onSnapshot, getDocs } from "firebase/firestore";
import { useAuth } from "@/components/AuthProvider";
import { doc, updateDoc, arrayUnion, setDoc, getDoc } from "firebase/firestore";


export default function ImageList() {
  const [visibleCaption, setVisibleCaption] = useState<string | null>(null);
  const [images, setImages] = useState<{ id: string; image: string; caption: string }[]>([]);
  const auth = useAuth();
  const [refreshing, setRefreshing] = useState(false);

  // update new data
  const fetchImages = async () => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const fetchedImages = snapshot.docs.map((doc) => ({
      id: doc.id,
      image: doc.data().image,
      caption: doc.data().caption,
    }));
    setImages(fetchedImages);
  };

  {/* update real-time */}
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedImages = snapshot.docs.map((doc) => ({
        id: doc.id,
        image: doc.data().image,
        caption: doc.data().caption,
      }));
      setImages(fetchedImages);
    });

    return () => unsubscribe(); // Cleanup Firestore listener
  }, []);

  // Pull to refresh function
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchImages();
    setRefreshing(false);
  };

  const addToFavorites = async (userId: string, imageUrl: unknown) => {
    if (!userId) return;
  
    const userRef = doc(db, "users", userId);
  
    try {
      const docSnap = await getDoc(userRef);
  
      if (docSnap.exists()) {
        // If user exists, update the favorites array
        await updateDoc(userRef, {
          favorites: arrayUnion(imageUrl),
        });
      } else {
        // If user does not exist, create a new document with favorites array
        await setDoc(userRef, {
          favorites: [imageUrl],
        });
      }
  
      console.log("Image added to favorites!");
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  }

  return (
    <View style={styles.container}>
      {/* Flatlist for rendering images */}
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        renderItem={({ item }) => (
          <TapGestureHandler
            numberOfTaps={2}
            onHandlerStateChange={({ nativeEvent }) => {
              if (nativeEvent.state === State.ACTIVE) {
                if (auth?.user?.uid) {
                  addToFavorites(auth.user.uid, item.image);
                  Alert.alert("Favorite image");
                }
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
                <Image source={{ uri: item.image }} style={styles.image} />
                {visibleCaption === item.id && (
                  <View style={styles.captionContainer}>
                    <Text style={styles.caption}>{item.caption}</Text>
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
