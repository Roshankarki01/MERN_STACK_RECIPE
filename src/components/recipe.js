import React from "react";

function Recipe({ title, description, time, image }) {
  return (
    <div className="recipe">
      <img className="recipe__image" src={image} alt={title} />
      <div className="recipe__info">
        <h4>{title}</h4>
        <p>{description}</p>
        <p>Time: {time}</p>
      </div>
    </div>
  );
}

export default Recipe;
