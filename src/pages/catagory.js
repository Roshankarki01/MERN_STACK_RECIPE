import React from "react";
import { useParams } from "react-router-dom";
import RecipeSection from "../components/recipesection";

function CategoryPage() {
  const { categoryName } = useParams();

  return (
    <div className="categoryPage">
      <h2>{categoryName} Recipes</h2>
      <RecipeSection category={categoryName} />
    </div>
  );
}

export default CategoryPage;
