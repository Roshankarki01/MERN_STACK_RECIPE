import React from 'react';
import Header from './components/navbar';
import SearchBar from './components/searchbar';
import RecipeList from './components/recipesection';
import MealList from './components/slidebar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <MealList/>
      <SearchBar />
      <RecipeList />
    </div>
  );
}

export default App;
