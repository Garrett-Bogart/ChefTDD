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
    const addNewRecipeForm = <form id="recipe-form"></form>;

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
