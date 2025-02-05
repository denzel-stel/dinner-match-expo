import { getRecipes } from "@/controllers/recipes"
import { Button, Text, View } from "react-native"

const Test = () => {

    const onPress = () => {
        getRecipes();
    }

    return (
        <View>
            <Text>Test recipe getter</Text>
            <Button title="Get recipes" onPress={onPress}></Button>
        </View>
    )
}