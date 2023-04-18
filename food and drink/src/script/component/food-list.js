import "./food-item.js";

class foodList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set foodsanddrinks(foodsanddrinks) {
    this._foodsanddrinks = foodsanddrinks;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.shadowDOM.innerHTML = "";
    this._foodsanddrinks.forEach((food) => {
      const foodItemElement = document.createElement("food-item");
      foodItemElement.food = food;
      this.shadowDOM.appendChild(foodItemElement);
    });
  }
}

customElements.define("food-list", foodList);
