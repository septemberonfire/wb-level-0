import { deliveryCourier, deliveryPickpoint } from "./constants.js";

export default () => {
  const modalPickpointTabContent = document.querySelector(
    ".delivery_popupPickpointAddressWrap"
  );

  deliveryPickpoint.forEach((el) => {
    modalPickpointTabContent.innerHTML += `
    
        <div class="delivery_popupPickpointAddress">
          <input type="radio" name="pickpoint" id="${el.id}" class="delivery_popupRadioInput">
          <label for="${el.id}" class="delivery_popupAddress">${el.address}
            <div class="delivery_popupAddressRating">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" class="delivery_popupImg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.69769 1.14922C6.43817 0.528396 5.56198 0.528387 5.30244 1.14919L6.69769 1.14922ZM5.30244 1.14919L4.14719 3.90977L1.19202 4.16613C0.519264 4.22467 0.262282 5.05966 0.759713 5.49464L3.00514 7.45915L2.33207 10.3824C2.18436 11.0238 2.87792 11.5567 3.46133 11.2023L6.00032 9.65611L8.53797 11.2015C9.12269 11.5588 9.81568 11.0227 9.66861 10.3826L8.99549 7.45915L11.2402 5.49537C11.7385 5.05961 11.4793 4.22519 10.8083 4.16667L7.85294 3.91029L6.69769 1.14922" fill="#FF970D"/>
                </svg>
              <p class="delivery_popupAddressRatingValue">${el.rating}</p>
              <p class="delivery_popupAddressPickpointMockie">Пункт выдачи</p>
            </div>
          </label>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="delivery_popupPickpointBtn">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" fill="#A0A0A4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" fill="#A0A0A4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" fill="#A0A0A4"/>
          </svg>
        </div>
      
    `;
  });

  const modalCourierTabContent = document.querySelector(
    ".delivery_popupCourierAddressWrap"
  );

  deliveryCourier.forEach((el) => {
    modalCourierTabContent.innerHTML += `
    <div class="delivery_popupPickpointAddress">
      <input type="radio" name="courier" id="${el.id}" class="delivery_popupRadioInput">
      <label for="${el.id}" class="delivery_popupAddress">${el.address}
      </label>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="delivery_popupPickpointBtn">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" fill="#A0A0A4"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" fill="#A0A0A4"/>          <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" fill="#A0A0A4"/>
      </svg>
    </div>
    `;
  });
};
