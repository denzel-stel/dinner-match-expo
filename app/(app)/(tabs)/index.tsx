import { StyleSheet, Text, View } from 'react-native';
import RecipeCard from '@/components/recipes/RecipeCard';
import {Recipe} from '@dinner_match/database/models/Recipe';
export default function Recipes() {

    const mockRecipe: Recipe = {
        id: 1,
        name: "Delicious Butter Chicken.",
        calories: 100,
        description: "test",
        
    }


    return (
        <View style={styles.container}>
            <RecipeCard recipe={mockRecipe}></RecipeCard>
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
