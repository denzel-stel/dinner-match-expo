import axios from "@/controllers/axios";
import { getRecipes } from "@/controllers/recipes";
import UsersService from "@/services/UsersService";
import { useStytchUser } from "@stytch/react-native";
import { Button, Text, View } from "react-native"

const Test = () => {

    const onPress = async () => {

        try {
            const response = await getRecipes();
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