export default function basketDeliveryTooltipHandler() {
  window.addEventListener("mouseover", (event) => {
    event.preventDefault()
    if (event.target.classList.contains("basket_tooltipCaption-underlined")) {
      const CurrentElement = event.target.closest(".basket_tooltipWrap");
      const tooltipWindow = CurrentElement.querySelector(
        ".basket_deliveryTooltip"
      );
      tooltipWindow.style.opacity = "1";
      tooltipWindow.style.visibility = "visible";
    }
  });

  window.addEventListener("mouseout", (event) => {
    event.preventDefault()
    if (event.target.classList.contains("basket_tooltipCaption-underlined")) {
      const CurrentElement = event.target.closest(".basket_tooltipWrap");
      const tooltipWindow = CurrentElement.querySelector(
        ".basket_deliveryTooltip"
      );

      tooltipWindow.style.opacity = "0";
      tooltipWindow.style.visibility = "hidden";
    }
  });
}
