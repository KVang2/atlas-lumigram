import { Link } from "expo-router";
import { Text, View, TextInput, StyleSheet } from "react-native";

export default function Page() {
    return (
        <View style={style.style}>
            <Text style={style.atlas}>Atlas</Text>
            <Text style={style.school}>S C H O O L</Text>
            <Text style={style.reg}>Register</Text>
            <TextInput
                placeholder="Email"
                placeholderTextColor={'#FFFFFF'}
                style={style.textEmail}
                keyboardType="email-address"
                autoComplete="email"/>
            <TextInput
                style={style.textPw}
                placeholderTextColor={'#FFFFFF'}
                placeholder="Password"
                secureTextEntry={true}
                />
                <Link style={style.buttonCreate} href="/" replace >
                    <Text>Create Account</Text>
                </Link>
                <Link style={style.buttonLogin} href="/login" replace>
                    <Text>Log in to existing account</Text>
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
