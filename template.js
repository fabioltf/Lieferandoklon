"use strict";

const appetizersContainer = document.getElementById("appetizersContainer");
const burgersContainer = document.getElementById("burgersContainer");
const nuggetsContainer = document.getElementById("nuggetsContainer");
const saladContainer = document.getElementById("saladContainer");
const beerContainer = document.getElementById("beerContainer");

const asideContent = document.getElementById("asideContent");
const asideContentEmpty = asideContent.textContent;
asideContent.innerHTML = "";

const addToCardAppetizers = document.getElementsByClassName(
  "addToCardAppetizers"
);
const addToCardBurgers = document.getElementsByClassName("addToCardBurgers");
const addToCardNuggets = document.getElementsByClassName("addToCardNuggets");
const addToCardSalad = document.getElementsByClassName("addToCardSalad");
const addToCardBeer = document.getElementsByClassName("addToCardBeer");

let deliveryContainer;
let priceQuantity;
let subtractQuantity;
let counterQuantity;
let addQuantity;
let canDelete;
let canDeleteId = 0;

const costSum = document.getElementById("costSum");

function displayDish(category, obj) {
  for (let i = 0; i < obj.length; i++) {
    category.innerHTML += /* html */ ` 
    <div class="flexContainerCol dishContainer">

      <div class="dishInnerContainer">

        <div class="dishAddContainer flexContainer">
          <h4 class="dishTitle">${obj[i].title}</h4>
          <img class="addMain addToCard${obj[i].category}" src="./images/icons/add-main.svg" alt="add icon" />
        </div>

        <p class="dishDescription">${obj[i].description}</p>

        <p class="dishIgredients">${obj[i].ingredients}</p>

        <span class="boldSegoeUI dishPrice">${obj[i].price} €</span>

      </div>

    </div>`;
  }
}

displayDish(appetizersContainer, appetizers);
displayDish(burgersContainer, burgers);
displayDish(nuggetsContainer, nuggets);
displayDish(saladContainer, salad);
displayDish(beerContainer, beer);

function addDish(obj, i) {
  asideContent.innerHTML += `
      <div id="deliveryContainer${canDeleteId}" class="flexContainerCol deliveryContainer">

        <div class="orderContainer flexContainer">
          <h6>${obj[i].title}</h6>
          <div>
            <span class="priceQuantity">${Number(obj[i].price)}</span>
            <span>€</span>
          </div>
        </div>

        <div class="orderContainer2 flexContainer">

          <div class="orderInnerContainer flexContainer">
            <img
              class="subtractQuantity"
              src="./images/icons/remove.svg"
              alt="remove icon"/>
            <span class="counterQuantity">${Number(1)}</span>
            <img class="addQuantity" src="./images/icons/add.svg" alt="add icon" />
          </div>

          <div>
            <img onclick="deleteDish(deliveryContainer${canDeleteId})" id="canDelete${canDeleteId}" class="canDelete" src="./images/icons/can.svg" "can icon" />
          </div>

        </div>


        <div class="orderContainer3"><hr class="horizontalLine"></div>

      </div>      
      `;

  canDeleteId++;
}
