class FoodSource {
  static searchfood(keyword) {
    return fetch(
      `https://api.spoonacular.com/food/menuItems/search?apiKey=e58f22c3b9384efca9054f10dceaced6&number=5&query=${keyword}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.menuItems) {
          return Promise.resolve(responseJson.menuItems);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default FoodSource;
