import axios from "axios";
import { Button, Text, View } from "react-native"

const Test = () => {

    const onPress = async () => {
        console.log("click!")
        // fetch("http://10.0.2.2:3000/auth/recipes", {
        //     method: 'GET',
        //     credentials: 'include'
        //   }).then((res) => {
        //     console.log("success", res)
        // }).catch((err) => {
        //     console.log("error", err)
        // })
        try {
            const response = await axios.get("https://humble-dane-fun.ngrok-free.app", {timeout: 5000, withCredentials: true});
            console.log("success", response)
        } catch (e) {
            console.log("error!", e);
        }
 
        // getRecipes().then((res) => {
        //     console.log("success", res)
        // }).catch((err) => {
        //     console.log("error", JSON.stringify(err))
        // })
    }

    return (
        <View>
            <Text>Test recipe getter</Text>
            <Button title="Get recipes" onPress={onPress}></Button>
        </View>
    )
}

export default Test;