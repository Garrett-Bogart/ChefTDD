import React from "react";
import App from "./App";
import { shallow } from "enzyme";

test("toggleAddRecipeForm() modifies isAddRecipeFormDisplayed state value to toggle visibility of a form on the page ", () => {
  const wrapper = shallow(<App />);
  wrapper.instance().toggleAddRecipeForm();

  wrapper.update();
  expect(wrapper.state().isAddRecipeFormDisplayed).toBeTruthy();
  expect(wrapper.exists("#recipe-form")).toEqual(true);

  wrapper.instance().toggleAddRecipeForm();
  expect(wrapper.exists("recipe-form")).toEqual(false);
  expect(wrapper.state().isAddRecipeFormDisplayed).toBeFalsy();
});

test("the Add Recipe button onClick calls the toggleAddRecipeForm method", () => {
  const wrapper = shallow(<App />);
  wrapper.instance().toggleAddRecipeForm = jest.fn();
  wrapper.instance().forceUpdate();
  // forceUpdate needs to be used because the wrapper instance that has already been rendered is not using the mock function,
  // so React does not automatically detect that the method definition has been changed
  const button = wrapper.find("#add-recipe");

  button.simulate("click");

  expect(wrapper.instance().toggleAddRecipeForm).toHaveBeenCalled();
});
