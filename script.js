"use strict";

const host = window.location.origin;

const toTopArrowContainer = document.getElementById("toTopArrowContainer");
const orderContainerBtn = document.getElementById("orderContainerBtn");
const orderTotalSum = document.getElementById("orderTotalSum");
const subTotal = document.getElementById("subTotal");
const deliveryCost = document.getElementById("deliveryCost");
const orderMinimum = document.getElementById("orderMinimum");
const orderBtn = document.getElementById("orderBtn");

const deliveryLogo = document.getElementById("deliveryLogo");

const shoppingCard = document.getElementById("shoppingCard");
const closeIcon = document.getElementById("closeIcon");

const showShoppingCard = document.getElementById("showShoppingCard");
const showShoppingCardBtn = document.getElementById("showShoppingCardBtn");

for (let i = 0; i < addToCardAppetizers.length; i++) {
  addToCardAppetizers[i].addEventListener("click", function () {
    addDish(appetizers, i);
    updateDishesQuantity();
  });

  addToCardBurgers[i].addEventListener("click", function () {
    addDish(burgers, i);
    updateDishesQuantity();
  });

  addToCardNuggets[i].addEventListener("click", function () {
    addDish(nuggets, i);
    updateDishesQuantity();
  });

  addToCardSalad[i].addEventListener("click", function () {
    addDish(salad, i);
    updateDishesQuantity();
  });

  addToCardBeer[i].addEventListener("click", function () {
    addDish(beer, i);
    updateDishesQuantity();
  });
}

function updateDishesQuantity() {
  deliveryContainer = document.getElementsByClassName("deliveryContainer");
  priceQuantity = document.getElementsByClassName("priceQuantity");
  subtractQuantity = document.getElementsByClassName("subtractQuantity");
  counterQuantity = document.getElementsByClassName("counterQuantity");
  addQuantity = document.getElementsByClassName("addQuantity");

  let prices = [];
  let counters = [];

  for (let i = 0; i < deliveryContainer.length; i++) {
    prices.push(Number(priceQuantity[i].innerText));
    counters.push(1);

    quantityIncrease(i, prices, counters);
    quantityDecrease(i, prices, counters);
    sumTotal();
  }
}

function quantityIncrease(i, prices, counters) {
  addQuantity[i].addEventListener("click", function () {
    const price = prices[i];
    counters[i] += 1;

    if (counters[i] > 10) {
      counters[i] = 10;
      return;
    }

    let counter = counters[i];

    counterQuantity[i].textContent = counter;
    priceQuantity[i].textContent = (
      Math.round(price * counter * 100) / 100
    ).toFixed(2);

    sumTotal();
  });
}

function quantityDecrease(i, prices, counters) {
  subtractQuantity[i].addEventListener("click", function () {
    const price = prices[i];
    counters[i] -= 1;

    if (counters[i] < 1) {
      counters[i] = 1;
      return;
    }

    let counter = counters[i];

    counterQuantity[i].textContent = counter;
    priceQuantity[i].textContent = (
      Math.round(price * counter * 100) / 100
    ).toFixed(2);
    sumTotal();
  });
}

function deleteDish(elm) {
  //console.log(event.srcElement);

  elm.remove();
  sumTotal();

  deliveryContainer = document.getElementsByClassName("deliveryContainer");

  if (!deliveryContainer.length) {
    costSum.textContent = "0.00";
    subTotal.textContent = "0.00";
    deliveryCost.textContent = "0.00";
    orderMinimum.textContent = "20.00";
  }
}

function sumTotal() {
  priceQuantity = document.getElementsByClassName("priceQuantity");
  let subCost;
  let delCost;
  let sum = 0;

  for (let i = 0; i < priceQuantity.length; i++) {
    sum += Number(priceQuantity[i].textContent);
    subTotal.textContent = (Math.round(sum * 100) / 100).toFixed(2);

    delCost = Number(subTotal.textContent) >= 30 ? 0 : 5.99;
    deliveryCost.textContent = delCost;

    costSum.textContent = (Math.round((sum + delCost) * 100) / 100).toFixed(2);

    orderMinimum.textContent =
      Number(subTotal.textContent) >= 20
        ? "0.00"
        : (
            Math.round((19.99 - Number(subTotal.textContent)) * 100) / 100
          ).toFixed(2);
  }
}

function showOrderBtn() {
  if (Number(costSum.textContent) >= 25.99) {
    orderContainerBtn.classList.remove("hide");
    orderTotalSum.textContent = costSum.textContent;
  } else {
    orderContainerBtn.classList.add("hide");
  }
}

let observer = new MutationObserver(showOrderBtn);

const config = {
  childList: true,
  characterData: false,
  subtree: false,
  attributes: false,
};

observer.observe(costSum, config);

orderBtn.addEventListener("click", function () {
  asideContent.innerHTML = "";
  subTotal.textContent = "0.00";
  deliveryCost.textContent = "0.00";
  costSum.textContent = "0.00";
  orderContainerBtn.classList.add("hide");
  setTimeout(orderPay, 1000);
});

function orderPay() {
  window.location.href = `${host}/order.html`;
}

/*
deliveryLogo.addEventListener("click", function () {
  homePage();
});

function homePage() {
  window.location.href = `${host}`;
}
*/

closeIcon.addEventListener("click", function () {
  shoppingCard.style.display = "none";
  showShoppingCard.classList.remove("none");
});

showShoppingCardBtn.addEventListener("click", function () {
  showShoppingCard.classList.add("none");
  shoppingCard.style.display = "initial";
});

/* Scroll to Top */
function showToTopArrow() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    toTopArrowContainer.classList.remove("hide");
  } else {
    toTopArrowContainer.classList.add("hide");
  }
}

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.addEventListener("scroll", function () {
  showToTopArrow();
});

toTopArrow.addEventListener("click", function () {
  toTop();
});

/* Copyright & Current Year */
document.getElementById(
  "copyright"
).textContent += ` ${new Date().getFullYear()} Food Delivery`;
