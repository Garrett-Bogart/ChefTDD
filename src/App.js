import React from "react";

class App extends React.Component {
  state = {
    isAddRecipeFormDisplayed: false,
  };

  toggleAddRecipeForm = () => {
    this.setState({
      isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed,
    });
  };

  render() {
    const addNewRecipeForm = (
      <form id="recipe-form">
        <label htmlFor="newRecipeName">Recipe name: </label>
        <input type="text" name="newRecipeName" />
        <label htmlFor="newRecipeInstructions">Instructions:</label>
        <textarea
          name="newRecipeInstructions"
          placeholder="write recipe instructions here..."
        />
        <input type="submit" />
      </form>
    );
    return (
      <div className="App">
        <h1 className="App-header">My Recipes</h1>
        {this.state.isAddRecipeFormDisplayed ? (
          addNewRecipeForm
        ) : (
          <button id="add-recipe" onClick={this.toggleAddRecipeForm}>
            Add Recipe
          </button>
        )}
        <p>There are no recipes to list.</p>
      </div>
    );
  }
}

export default App;
