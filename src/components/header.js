import React from "react";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://via.placeholder.com/150x50?text=RecipeApp"
        alt="RecipeApp Logo"
      />
      <input
        className="header__searchInput"
        type="text"
        placeholder="Search Recipes"
      />
      <button className="header__searchButton">Search</button>
    </div>
  );
}

export default Header;
