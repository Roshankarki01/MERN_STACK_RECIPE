import React from 'react';

function RecipeCard({ title, imageUrl, description }) {
  return (
    <div className="recipe-card">
      <img src={imageUrl} alt={title} />
      <div className="recipe-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
