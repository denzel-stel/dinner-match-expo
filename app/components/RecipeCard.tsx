import { View, Text, StyleSheet } from "react-native";
export default function RecipeCard() {
    return (
        <View style={{flex: 1}}>
            <Text>Recipe!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
    }
});