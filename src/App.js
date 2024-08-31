import React from 'react';
import Header from './components/navbar';
import SearchBar from './components/searchbar';
import RecipeList from './components/recipesection';
import MealList from './components/slidebar';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <MealList />
        <div className="main-content">
          <SearchBar />
          <RecipeList />
        </div>
      </div>
    </div>
  );
}

export default App;
