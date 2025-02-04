import { StyleSheet, Text, View } from 'react-native';
import RecipeCard from '@/components/recipes/RecipeCard';

export default function Recipes() {
    return (
        <View style={styles.container}>
            <RecipeCard></RecipeCard>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
