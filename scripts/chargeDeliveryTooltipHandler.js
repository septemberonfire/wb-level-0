export default function chargeDeliveryTooltipHandler() {
  window.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("charge_tooltipCaption-underlined")) {
      const CurrentElement = event.target.closest(".charge_tooltipWrap");
      const tooltipWindow = CurrentElement.querySelector(
        ".charge_deliveryTooltip"
      );
      tooltipWindow.style.opacity = "1";
      tooltipWindow.style.visibility = "visible";
    }
  });

  window.addEventListener("mouseout", (event) => {
    if (event.target.classList.contains("charge_tooltipCaption-underlined")) {
      const CurrentElement = event.target.closest(".charge_tooltipWrap");
      const tooltipWindow = CurrentElement.querySelector(
        ".charge_deliveryTooltip"
      );

      tooltipWindow.style.opacity = "0";
      tooltipWindow.style.visibility = "hidden";
    }
  });
}
