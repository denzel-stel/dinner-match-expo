import { StyleSheet, Text, View } from "react-native";

const RecipeCard = () => {
    return (
        <View>
            <View style={style.card}>
                <Text>Recipe</Text>
            </View>
        </View>
    );
}


const style = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 16,
        boxShadow: "3px 6px 25px 4px rgba(0,0,0,0.06)"
    }
})
export default RecipeCard;