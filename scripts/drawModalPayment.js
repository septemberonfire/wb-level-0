import { cards } from "./constants.js";

export default () => {
  const paymentPopup = document.querySelector('.payment_popupWrap')
  const paymentOpener = document.querySelector('.paymentOpener')
  const paymentChanger = document.querySelector('.basket_paymentChanger')

  const cardContainer = document.querySelector(".payment_popupCardList");
  
  const paymentData = document.querySelector('.charge_paymentData')
  const paymentCard = document.querySelector('.basket_paymentCard')
  cards.forEach((card) => {
    cardContainer.innerHTML += `
    <div class="payment_popupCard">
              <input
                type="radio"
                name="payment"
                id="${card.id}"
                class="payment_popupRadioInput"
              />
              <label for="${card.id}" class="delivery_popupCardData">
                <div class="payment_popupCardLogo">
                  <img src="${card.paymentSystemLogo}" alt="card-logo" />
                </div>
                <span class="payment_popupCardNumber">${card.number}</span>
              </label>
            </div>
    `;
  });

  const closeBtn = document.querySelector('.payment_popupCloseBtn')

  const openPopup = () => {
    paymentPopup.classList.add('active')
  }

  const closePopup = () => {
    paymentPopup.classList.remove('active')
  }

  const mainButton = document.querySelector('.payment_button-main')
  const radioInputs = Array.from(paymentPopup.querySelectorAll('.payment_popupRadioInput'))

  paymentOpener.addEventListener('click', openPopup)
  paymentChanger.addEventListener('click', openPopup)
  closeBtn.addEventListener('click', closePopup)

  radioInputs.forEach((el) => {
    el.addEventListener('click', () => {
      mainButton.addEventListener('click', () => {
        if (el.checked) {
          const selectedCard = cards.find(
            (item) => item.id == el.id)
            paymentCard.querySelector('.basket_paymentSystem').innerHTML = `<img src="${selectedCard.paymentSystemLogo}" alt="card-logo" />`
            paymentData.querySelector('.charge_paymentSystem').innerHTML = `<img src="${selectedCard.paymentSystemLogo}" alt="card-logo" />`
            paymentCard.querySelector('.basket_paymentCardNumber').textContent = selectedCard.number
            paymentData.querySelector('.charge_paymentNumber').textContent = selectedCard.number
            closePopup()
        }
      })
    })
  })
};
