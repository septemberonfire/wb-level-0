import { products } from "../constants.js";
import formatNum from "../helpers/formatNum.js";

export default (event) => {
    const CurrentProduct = products.find(
        (el) => el.id == event.target.closest(".basket_productsItem").dataset.id
    );
    const CurrentElement = event.target.closest(".basket_productsItem");
    --CurrentProduct.amount.picked;
    CurrentElement.querySelector(".basket_counterAmount").textContent =
        CurrentProduct.amount.picked;
    CurrentElement.querySelector(
        ".basket_productActualPriceValue"
    ).textContent = formatNum(CurrentProduct.actualPrice * CurrentProduct.amount.picked);
    CurrentElement.querySelector(".basket_productOldPrice").textContent = `${formatNum(
        CurrentProduct.oldPrice * CurrentProduct.amount.picked)
        } сом`;
    if (CurrentProduct.amount.picked === 1) {
        CurrentElement.querySelector(".basket_counterMinus").disabled = true;
    }
    if (CurrentProduct.amount.all - CurrentProduct.amount.picked >= 1) {
        CurrentElement.querySelector(".basket_counterPlus").disabled = false;
    }
    if (CurrentElement.querySelector(".basket_productRemains")) {
        CurrentElement.querySelector(
            ".basket_productRemains"
        ).textContent = `Осталось ${CurrentProduct.amount.all - CurrentProduct.amount.picked
        } шт.`;
    }
}