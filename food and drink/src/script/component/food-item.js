class foodItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 #CCD6A6;
          border-radius: 10px;
          overflow: hidden;
          background-color: #FFFBE9; 
        }
        
        .pic-food {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
        
        .food-info {
          padding: 24px;
        }
        
        .food-info > h2 {
          font-weight: bold;
          color: #4C4B16;
        }
        
        .food-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      
      <img class="pic-food" src="${this._food.image}" type= "png" alt="food">
      <div class="food-info">
        <h2>${this._food.title}</h2>
        <p>${this._food.restaurantChain}</p>
      </div>
    `;
  }
}

customElements.define("food-item", foodItem);