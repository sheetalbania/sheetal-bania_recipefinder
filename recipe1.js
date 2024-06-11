// Sample recipes data (you can replace this with real recipe data)
const recipes = [
    {
        name: "Pasta with Tomato Sauce",
        ingredients: ["pasta", "tomato", "garlic", "olive oil", "salt", "pepper"],
        instructions: "Cook pasta according to package instructions. In a saucepan, heat olive oil over medium heat. Add minced garlic and cook until fragrant. Add chopped tomatoes, salt, and pepper. Simmer for 15 minutes. Serve sauce over cooked pasta."
    },
    {
        name: "Vegetable Stir Fry",
        ingredients: ["bell pepper", "onion", "broccoli", "carrot", "soy sauce", "garlic", "ginger", "oil"],
        instructions: "Heat oil in a large skillet or wok over medium-high heat. Add chopped vegetables and stir-fry until tender. Add minced garlic and ginger, cook for another minute. Pour in soy sauce and stir to combine. Serve hot."
    }
];

// Function to find recipes based on ingredients
function findRecipes(ingredients) {
    const matchingRecipes = [];
    recipes.forEach(recipe => {
        const missingIngredients = recipe.ingredients.filter(ingredient => !ingredients.includes(ingredient));
        if (missingIngredients.length === 0) {
            matchingRecipes.push(recipe);
        }
    });
    return matchingRecipes;
}

// Function to display recipes
function displayRecipes(recipes) {
    const recipeResultsElement = document.getElementById("recipeResults");
    recipeResultsElement.innerHTML = "";
    if (recipes.length === 0) {
        recipeResultsElement.textContent = "No recipes found.";
    } else {
        recipes.forEach(recipe => {
            const recipeElement = document.createElement("div");
            recipeElement.innerHTML = `
                <h2>${recipe.name}</h2>
                <h3>Ingredients</h3>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
                </ul>
                <h3>Instructions</h3>
                <p>${recipe.instructions}</p>
            `;
            recipeResultsElement.appendChild(recipeElement);
        });
    }
}

// Event listener for search button click
document.getElementById("searchButton").addEventListener("click", function() {
    const ingredientInput = document.getElementById("ingredientInput").value.trim().toLowerCase();
    const ingredients = ingredientInput.split(",").map(ingredient => ingredient.trim());
    const matchingRecipes = findRecipes(ingredients);
    displayRecipes(matchingRecipes);
});
