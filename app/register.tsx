import typographyStyles from "@/assets/styles/typography";
import inputStyles from "@/assets/styles/input";
import PrimaryButton from "@/components/Button";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { NewUser } from "@dinner_match/database/models/User";
import { createUser } from "@/controllers/users";

const Register = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');

    useEffect(() => {
        if (password !== verifyPassword) {
            Alert.alert('Passwords do not match');
        } else {
            Alert.alert('Passwords do match');
        }
    }, [password, verifyPassword]);

    const navigation = useNavigation();
    const handleLogin = async () => {
        const user: NewUser = {
            email: email,
            password: password,
            username: username,
        }

        await createUser(user);
    };

    const navigateLogin = () => {
        console.log('Navigating to login');
        navigation.navigate("login");
    }
  
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        
      }}>
        <Text style={{
            ...typographyStyles.h1,
            paddingBottom: 10,
        }}>Account aanmaken</Text>

        <Text style={inputStyles.label}>Gebruikersnaam</Text>
        <TextInput
        style={inputStyles.textInput}
        placeholder="Gebruikersnaam invoeren"
        value={username}
        onChangeText={setUsername}
        />
        <Text style={inputStyles.label}>Email</Text>
        <TextInput
        placeholder="Enter email"
        style={inputStyles.textInput}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        />

        <Text style={inputStyles.label}>Wachtwoord</Text>
        <TextInput
        style={inputStyles.textInput}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />

        <Text style={inputStyles.label}>Herhaal wachtwoord</Text>
        <TextInput
        style={inputStyles.textInput}
        placeholder="Enter password"
        value={verifyPassword}
        onChangeText={setVerifyPassword}
        secureTextEntry
        />

        <PrimaryButton onPress={handleLogin} text="Account aanmaken" />
        <Pressable onPress={navigateLogin}><Text>Heb je al een account? Inloggen</Text></Pressable>
      </View>
    );
}

export default Register;