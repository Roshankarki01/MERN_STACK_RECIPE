import React from 'react';
import RecipeCard from '../components/recipe';

function RecipeList() {
  const recipes = [
    {
      title: 'Spaghetti Carbonara',
      imageUrl: 'link_to_image',
      description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    },
    {
      title: 'Chicken Alfredo',
      imageUrl: 'link_to_image',
      description: 'A creamy pasta dish made with butter, heavy cream, and parmesan cheese.',
    },
    {
      title: 'Vegetable Stir Fry',
      imageUrl: 'link_to_image',
      description: 'A quick and healthy dish made with mixed vegetables and a savory sauce.',
    },
  ];

  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          title={recipe.title}
          imageUrl={recipe.imageUrl}
          description={recipe.description}
        />
      ))}
    </div>
  );
}

export default RecipeList;
