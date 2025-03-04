import { Link, useRouter } from "expo-router";
import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";
import { useAuth } from "@/components/AuthProvider";
import { useState } from "react";

export default function Page() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const auth = useAuth();
    const router = useRouter();

    async function login() {
        setLoading(true);
        try {
            await auth.login(email, password);
            router.replace("/(tabs)");
        } catch(err) {
            alert("email or Password is incorrect")
        }
        setLoading(false);
    }

    return (
        <View style={style.style}>
            <Text style={style.atlas}>Atlas</Text>
            <Text style={style.school}>S C H O O L</Text>
            <Text style={style.login}>Login</Text>
            <TextInput
                style={style.textEmail}
                placeholder="Email"
                placeholderTextColor={'#FFFFFF'}
                keyboardType="email-address"
                autoComplete="email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={style.textPw}
                placeholderTextColor={'#FFFFFF'}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                />
            <Pressable 
                style={style.buttonSignIn}
                onPress={login}
            >
                <Text style={style.signtext}>Sign In</Text>
            </Pressable>
            <Link style={style.buttonCreate}href="/register" replace>
                <Text>Create a new account</Text>
            </Link>
        </View>
    );
}

const style = StyleSheet.create({
    style: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00003C',
    },
    atlas: {
        color: '#ffffff',
        fontSize: 140,
        textAlign: 'center',
    },
    school: {
        color: '#1ED2AF',
        fontSize: 30,
        marginLeft: 130,
        marginTop: -20,
    },
    login: {
        color: '#ffffff',
        fontSize: 30,
        marginBottom: 5,
        marginTop: 25,
    },
    textEmail: {
        width: 400,
        height: 50,
        margin: 12,
        borderWidth: 1,
        borderColor: '#1ED2AF',
        padding: 10,
        borderRadius: 3,
        color: "#ffffff",
    },
    textPw: {
        width: 400,
        height: 50,
        margin: 12,
        borderWidth: 1,
        borderColor: '#1ED2AF',
        padding: 10,
        bottom: 18,
        borderRadius: 3,
        color: "#ffffff",
    },
    buttonSignIn: {
        backgroundColor: '#1ED2AF',
        padding: 10,
        borderRadius: 3,
        borderWidth: 1,
        bottom: 18,
        width: 400,
        height: 40,
        marginTop: 10,
    },
    buttonCreate: {
        backgroundColor: '#00003C',
        color: '#ffffff',
        padding: 10,
        borderRadius: 3,
        borderWidth: 1,
        width: 400,
        height: 40,
        textAlign: 'center',
        bottom: 12,
    },
    signtext: {
        color: 'white',
        textAlign: 'center',
    }
});