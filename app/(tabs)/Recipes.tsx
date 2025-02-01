import { StyleSheet, Text, View } from 'react-native';
import RecipeCard from '../components/RecipeCard';
import Session from '../components/Session';

export default function Recipes() {
    return (
        <View style={styles.container}>
            <Session></Session>
            <RecipeCard></RecipeCard>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
