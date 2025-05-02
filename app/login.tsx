import typographyStyles from "@/assets/styles/typography";
import inputStyles from "@/assets/styles/input";
import PrimaryButton from "@/components/Button";
import { Text, TextInput, View } from "react-native";
import { useState } from "react";

const LogIn = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
        console.log('Logging', email, password);
    };
  
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        
      }}>
        <Text style={{
            ...typographyStyles.h1,
            paddingBottom: 10,
        }}>Inloggen</Text>
        <Text style={inputStyles.label}>Email</Text>
        <TextInput
        placeholder="Enter email"
        style={inputStyles.textInput}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        />

        <Text style={inputStyles.label}>Password</Text>
        <TextInput
        style={inputStyles.textInput}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />

        <PrimaryButton onPress={handleLogin} text="Inloggen" />
      </View>
    );
}

export default LogIn;