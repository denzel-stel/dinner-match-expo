import axios from "./axios";

const getRecipes = async () => {
    const response = await axios.get("/auth/recipes");
    console.log(response);
}

export { getRecipes }