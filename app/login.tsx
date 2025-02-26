import { Link, useRouter } from "expo-router";
import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";

export default function Page() {
    const router = useRouter();
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
                autoComplete="email"/>
            <TextInput
                style={style.textPw}
                placeholderTextColor={'#FFFFFF'}
                placeholder="Password"
                secureTextEntry={true}
                />
            <Pressable 
                style={style.buttonSignIn}
                onPress={() => {
                router.replace("/(tabs)/");
                }}
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
        color: 'white',
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