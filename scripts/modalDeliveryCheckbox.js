import { deliveryPickpoint, deliveryCourier } from "./constants.js";

export default () => {
  const deliveryPopup = document.querySelector(".delivery_popupWrap");
  const pickpointTab = deliveryPopup.querySelector("#pickpoint");
  const courierTab = deliveryPopup.querySelector("#courier");
  const button = deliveryPopup.querySelector(".delivery_button-main");
  const chargeDelivery = document.querySelector(".charge_delivery");
  const chargeTitle = chargeDelivery.querySelector(".charge_deliveryTitle");
  const chargeAddress = chargeDelivery.querySelector(".charge_deliveryAddress");
  const basketDelivery = document.querySelector(".basket_delivery");
  const basketTitle = basketDelivery.querySelector(
    ".basket_deliveryPickpointTitle"
  );
  const basketAddress = basketDelivery.querySelector(
    ".basket_deliveryPickpointAddress"
  );
  const basketRating = basketDelivery.querySelector(
    ".basket_deliveryPickpointRating"
  );
  const basketContent = basketDelivery.querySelector(
    ".basket_deliveryPickpointContent"
  );

  const pickpointRadioInputs = Array.from(
    pickpointTab.querySelectorAll(".delivery_popupRadioInput")
  );
  const courierRadioInputs = Array.from(
    courierTab.querySelectorAll(".delivery_popupRadioInput")
  );

  pickpointRadioInputs.forEach((item) => {
    item.addEventListener("click", () => {
      button.addEventListener("click", () => {
        if (item.checked) {
          const selectedPickpoint = deliveryPickpoint.find(
            (el) => el.id == item.id
          );
          chargeAddress.textContent = selectedPickpoint.basketAddress;
          basketAddress.textContent = selectedPickpoint.basketAddress;
          basketRating.textContent = selectedPickpoint.rating;
          deliveryPopup.style.visibility = "hidden";
          deliveryPopup.style.opacity = "0";
        }
      });
    });
  });

  courierRadioInputs.forEach((item) => {
    item.addEventListener("click", () => {
      button.addEventListener("click", () => {
        if (item.checked) {
          const selectedCourierAddress = deliveryCourier.find(
            (el) => el.id == item.id
          );
          chargeAddress.textContent = selectedCourierAddress.address;
          basketAddress.textContent = selectedCourierAddress.address;

          chargeTitle.textContent = "Доставка курьером";
          basketTitle.textContent = "Доставка курьером";
          basketContent.querySelector(
            ".basket_deliveryPickpointRatingWrap"
          ).style.display = "none";
          deliveryPopup.style.visibility = "hidden";
          deliveryPopup.style.opacity = "0";
        }
      });
    });
  });
};
