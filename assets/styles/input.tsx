import { text } from "drizzle-orm/mysql-core";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: "#D9D9D9",
        borderWidth: 2,
        padding: 20,
        marginBottom: 20,
        borderRadius: 16,
        color: "#000000",
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontFamily: "RobotoSerif_400Regular",
    }
});

export default styles;