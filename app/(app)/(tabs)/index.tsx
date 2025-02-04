import { StyleSheet, Text, View } from 'react-native';
import RecipeCard from '@/components/recipes/RecipeCard';
import {Recipe} from '@dinner_match/database/models/Recipe';
import SwipeableRecipe from '@/components/recipes/Swipeable';

export default function Recipes() {

    const mockRecipe: Recipe = {
        id: 1,
        name: "Delicious Butter Chicken.",
        calories: 100,
        description: "test",   
    }
    return (
        <View style={styles.container}>
            <SwipeableRecipe>
                <RecipeCard recipe={mockRecipe}/>
            </SwipeableRecipe>
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
