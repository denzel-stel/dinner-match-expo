import styles from "@/assets/styles/typography";
import Container from "@/components/Container";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const LogIn = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
        console.log('Logging', email, password);
    };
  
    return (
      <View>
        <Text style={styles.h1}>Inloggen</Text>
        <Text>Email</Text>
        <TextInput
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        />

        <Text>Password</Text>
        <TextInput
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />

        <Button title="Login" onPress={handleLogin} />
      </View>
    );
}

export default LogIn;