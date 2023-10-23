export default function priceTooltipHandler() {
  window.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("basket_productOldPrice")) {
      const CurrentElement = event.target.closest(".basket_productsItem");
      const tooltipWindow = CurrentElement.querySelector(
        ".basket_priceTooltip"
      );
      tooltipWindow.style.opacity = "1";
      tooltipWindow.style.visibility = "visible";
    }
  });

  window.addEventListener("mouseout", (event) => {
    if (event.target.classList.contains("basket_productOldPrice")) {
      const CurrentElement = event.target.closest(".basket_productsItem");
      const tooltipWindow = CurrentElement.querySelector(
        ".basket_priceTooltip"
      );

      tooltipWindow.style.opacity = "0";
      tooltipWindow.style.visibility = "hidden";
    }
  });
}
