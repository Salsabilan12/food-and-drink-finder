class titleBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
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
          width: 100%;
          box-shadow: 0 4px 8px 0 #4C4B16;
        }
        h2 {
          padding: 30px;
          text-align: center;
          background-color: #446A46;
          color: white;
        }
        p {
          padding: 15px;
          background-color: #82A284;
          color: white;
          text-align: center;
        }
      </style>
      
      <h2>Foods, Drink and Restaurant</h2>
      <p>this website is for you who want to search for menu and the restaurant</p>
    `;
  }
}

customElements.define("title-bar", titleBar);