import "../component/food-list.js";
import "../component/search-bar.js";
import FoodSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const foodListElement = document.querySelector("food-list");

  const onButtonSearchClicked = () => {
    FoodSource.searchfood(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult);
  };

  const renderResult = (results) => {
    foodListElement.foodsanddrinks = results;
  };

  const fallbackResult = (message) => {
    foodListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
