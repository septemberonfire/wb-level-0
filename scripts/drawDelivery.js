import { products } from "./constants.js";

export default function drawDelivery() {
  const firstSupply = document.getElementById("first-supply");
  const secondSupply = document.getElementById("second-supply");
  secondSupply.style.display = "none";
  let allProductsString = "";
  const firstProductList = firstSupply.querySelector(
    ".basket_deliverySupplyProducts"
  );

  products.forEach((element) => {
    const firstSupplyItemHTML = `
    ${
      Boolean(element.isChosen)
        ? `
      <div class="basket_deliverySupplyItemWrap" data-id=${element.id}>
        <img
          src="${element.img}"
          alt="product-image"
          class="basket_deliverySupplyItem"
          
        />
        ${
          element.amount.picked > 1 
            ? `<div class="ui_counter basket_deliveryCounter"
              >${ element.amount.picked < element.amount.inStock ? `${element.amount.picked}` : `${element.amount.inStock}`}</div>`
            : ""
        } 
      </div>`
        : ""
    }
      `;
    allProductsString += `${firstSupplyItemHTML}`;
    firstProductList.innerHTML = allProductsString;

    if (
      element.amount.picked > element.amount.inStock &&
      element.amount.picked < element.amount.all &&
      element.isChosen
    ) {
      secondSupply.style.display = "flex";
      secondSupply.innerHTML = `
      <h4 class="basket_deliverySupplyTitle">7—8 февраля</h4>
        <div class="basket_deliverySupplyProducts">
        <div class="basket_deliverySupplyItemWrap" data-id=${element.id}>
          <img
            src="${element.img}"
            alt="product-image"
            class="basket_deliverySupplyItem"
          />
            <div class="ui_counter basket_deliveryCounter">${
              +element.amount.picked - +element.amount.inStock
            }</div>
        </div>
        </div>
        `;
    }
  });
}
