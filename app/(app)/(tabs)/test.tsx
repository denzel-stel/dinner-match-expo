import axios from "@/controllers/axios";
import UsersService from "@/services/UsersService";
import { useStytchUser } from "@stytch/react-native";
import { Button, Text, View } from "react-native"

const Test = () => {

    const onPress = async () => {

        try {
            const response = await axios.get("https://humble-dane-fun.ngrok-free.app", {timeout: 5000, withCredentials: true,});
            console.log("success", response)
        } catch (e) {
            console.log("error!", e);
        }
    }

    const { user }= useStytchUser();
    const onUserPress = async () => {
        if (user == null ) return;
        UsersService.persistStytchUserLocally(user);
    }

    return (
        <View>
            <Text>Test recipe getter</Text>
            <Button title="Save user" onPress={onUserPress}></Button>

            <Button title="Get recipes" onPress={onPress}></Button>
        </View>
    )
}

export default Test;