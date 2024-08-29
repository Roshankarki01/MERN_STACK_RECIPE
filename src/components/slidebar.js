import React from 'react';

const MealList = () => {
  const meals = ['Breakfast', 'Lunch', 'Dinner', 'Tea'];

  return (
    <div>
      <h1>Meals</h1>
      <ul>
        {meals.map((meal, index) => (
          <li key={index}>{meal}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealList;
