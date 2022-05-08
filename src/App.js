import React, { useEffect, useState } from 'react';
import Recipe from './components/recipe';
import "./App.css";
import { connect } from "react-redux";

import { setRecipesRedux } from './redux/actions';

const App = ({ dispatch, recipes_redux }) => {
  console.log("recipes_redux: ",);

  const APP_ID = 'd105ec91';
  const APP_KEY = '79f7c70f52b1689d755235663c4594b9';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log("the data: ", data.hits);
    setRecipes(data.hits);
    dispatch(setRecipesRedux(data.hits));

  }
  const updateSearch = e => {
    setSearch(e.target.value);
    // console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className="App">

      <form className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="recipes">
        {recipes_redux.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>


    </div>
  )
}



const mapStateToProps = (state) => {
  console.log("redux state is: ", state);
  return {
    recipes_redux: state.general.recipes,
  };
};

export default connect(mapStateToProps)(App);