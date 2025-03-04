import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Text, View, TextInput, StyleSheet, Pressable } from "react-native";
import { useAuth } from "@/components/AuthProvider";

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const auth = useAuth();
    const router = useRouter();

    async function register() {
        try {
        await auth.register(email, password);
        router.replace("/(tabs)");
    } catch(err) {
        alert("Unable to create account");
        }
    }

    return (
        <View style={style.stylereg}>
            <Text style={style.atlas}>Atlas</Text>
            <Text style={style.school}>S C H O O L</Text>
            <Text style={style.reg}>Register</Text>
            <TextInput
                placeholder="Email"
                placeholderTextColor={'#FFFFFF'}
                style={style.textEmail}
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
                <Pressable style={style.buttonCreate} onPress={register} >
                    <Text>Create Account</Text>
                </Pressable>
                <Link style={style.buttonLogin} href="/login" replace>
                    <Text>Log in to existing account</Text>
                </Link>
        </View>
    );
}

const style = StyleSheet.create({
    stylereg: {
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
    reg: {
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
        color: "#FFF",
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
        color: "#FFFFFF"
    },
    buttonCreate: {
        backgroundColor: '#1ED2AF',
        color: '#FFFFFF',
        padding: 10,
        borderRadius: 3,
        borderWidth: 1,
        bottom: 18,
        width: 400,
        height: 40,
        textAlign: 'center',
        marginTop: 10,
    },
    buttonLogin: {
        backgroundColor: '#00003C',
        color: 'white',
        padding: 10,
        borderRadius: 3,
        borderWidth: 1,
        width: 400,
        height: 40,
        textAlign: 'center',
        bottom: 12,
    },
});
