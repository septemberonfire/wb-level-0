export default function productButtonsHandler(products) {
  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("basket_counterPlus")) {
      const CurrentProduct = products.find(
        (el) => el.id == event.target.closest(".basket_productsItem").dataset.id
      );
      const CurrentElement = event.target.closest(".basket_productsItem");
      ++CurrentProduct.amount.picked;
      CurrentElement.querySelector(".basket_counterAmount").textContent =
        CurrentProduct.amount.picked;
      CurrentElement.querySelector(
        ".basket_productActualPriceValue"
      ).textContent = CurrentProduct.actualPrice * CurrentProduct.amount.picked;
      CurrentElement.querySelector(".basket_productOldPrice").textContent = `${
        CurrentProduct.oldPrice * CurrentProduct.amount.picked
      } сом`;
      if (CurrentProduct.amount.picked > 1) {
        CurrentElement.querySelector(".basket_counterMinus").disabled = false;
      }
      if (CurrentProduct.amount.picked === CurrentProduct.amount.all) {
        CurrentElement.querySelector(".basket_counterPlus").disabled = true;
      }
      if (CurrentElement.querySelector(".basket_productRemains")) {
        CurrentElement.querySelector(
          ".basket_productRemains"
        ).textContent = `Осталось ${
          CurrentProduct.amount.all - CurrentProduct.amount.picked
        } шт.`;
      }
    }

    if (event.target.classList.contains("basket_counterMinus")) {
      const CurrentProduct = products.find(
        (el) => el.id == event.target.closest(".basket_productsItem").dataset.id
      );
      const CurrentElement = event.target.closest(".basket_productsItem");
      --CurrentProduct.amount.picked;
      CurrentElement.querySelector(".basket_counterAmount").textContent =
        CurrentProduct.amount.picked;
      CurrentElement.querySelector(
        ".basket_productActualPriceValue"
      ).textContent = CurrentProduct.actualPrice * CurrentProduct.amount.picked;
      CurrentElement.querySelector(".basket_productOldPrice").textContent = `${
        CurrentProduct.oldPrice * CurrentProduct.amount.picked
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
        ).textContent = `Осталось ${
          CurrentProduct.amount.all - CurrentProduct.amount.picked
        } шт.`;
      }
    }

    if (
      event.target.classList.contains("basket_productDelete") &&
      event.target.closest(".basket_productsItem")
    ) {
      const CurrentElement = event.target.closest(".basket_productsItem");
      CurrentElement.remove();
    }

    if (
      event.target.classList.contains("basket_productDelete") &&
      event.target.closest(".basket_absentItem")
    ) {
      let CurrentElement = event.target.closest(".basket_absentItem");
      const absentContainer = document.querySelector(".basket_absent");
      CurrentElement.remove();
      if (!document.querySelectorAll(".basket_absentItem").length) {
        absentContainer.remove();
      }
    }

  });
}
