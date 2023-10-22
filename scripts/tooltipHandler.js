export default function tooltipHandler() {
  window.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("basket_productProviderBtn")) {
      const CurrentElement = event.target.closest(".basket_productsItem");
      const tooltipBtn = CurrentElement.querySelector(
        ".basket_productProviderBtn"
      );
      const tooltipWindow = CurrentElement.querySelector(
        ".basket_providerTooltip"
      );
      tooltipWindow.style.opacity = "1";
      tooltipWindow.style.visibility = "visible";
      tooltipBtn.classList.add("active");

      if (tooltipBtn.classList.contains("active")) {
        tooltipWindow.addEventListener("mouseover", () => {
          tooltipWindow.style.opacity = "1";
          tooltipWindow.style.visibility = "visible";
          console.log("blegh");
        });

        tooltipWindow.addEventListener("mouseout", () => {
          tooltipWindow.style.opacity = "0";
          tooltipWindow.style.visibility = "hidden";
          tooltipBtn.classList.remove("active");
        });
      }
    }
  });

  window.addEventListener("mouseout", (event) => {
    if (event.target.classList.contains("basket_productProviderBtn")) {
      const CurrentElement = event.target.closest(".basket_productsItem");
      const tooltipBtn = CurrentElement.querySelector(
        ".basket_productProviderBtn"
      );
      const tooltipWindow = CurrentElement.querySelector(
        ".basket_providerTooltip"
      );

      tooltipWindow.style.opacity = "0";
      tooltipWindow.style.visibility = "hidden";
      tooltipBtn.classList.remove("active");
    }
  });
}
