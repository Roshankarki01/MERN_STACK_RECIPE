import React from "react";
import Recipe from "../components/recipe";

function RecipeSection({ category }) {
  const recipes = [
    { title: "Pancakes", description: "Fluffy homemade pancakes", time: "30 mins", image: "https://via.placeholder.com/320x180?text=Pancakes", category: "breakfast" },
    { title: "Grilled Cheese", description: "Crispy grilled cheese sandwich", time: "15 mins", image: "https://via.placeholder.com/320x180?text=Grilled+Cheese", category: "lunch" },
    { title: "Spaghetti Carbonara", description: "Classic Italian pasta dish", time: "45 mins", image: "https://via.placeholder.com/320x180?text=Spaghetti+Carbonara", category: "dinner" }
    // Add more recipes here
  ];

  const filteredRecipes = category ? recipes.filter(recipe => recipe.category === category) : recipes;

  return (
    <div className="recipeSection">
      {filteredRecipes.map((recipe, index) => (
        <Recipe
          key={index}
          title={recipe.title}
          description={recipe.description}
          time={recipe.time}
          image={recipe.image}
        />
      ))}
    </div>
  );
}

export default RecipeSection;
