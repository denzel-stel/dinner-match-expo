import styles from "@/assets/styles/typography";
import typography from "@/assets/styles/typography";
import { Image, StyleSheet, Text, View } from "react-native";
import { isTypedArray } from "util/types";

const RecipeCard = () => {
    return (
        <View style={style.wrapper}>
            <View >
                <Image
                       style={style.thumbnail}
                        source={{uri: "https://foodish-api.com/images/butter-chicken/butter-chicken13.jpg"}}
                    />
            </View>
            <View style={style.card}>
                <Text style={typography.h1}>Delicious butter chicken</Text>
            </View>
        </View>
       
    );
}


const style = StyleSheet.create({
    card: {
        padding: 20,
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
        flex: 1,
        boxShadow: "3px 6px 25px 4px rgba(0,0,0,0.06)"
    },
    thumbnail: {
        width: "100%",
        height: 400,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16
    },
    wrapper: {
        width: "100%",
        height: "80%",
    }
})
export default RecipeCard;