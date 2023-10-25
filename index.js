import drawItems from "./scripts/drawItems.js";
import { products } from "./scripts/constants.js";
import { toggleHandler } from "./scripts/toggleArrowHandler.js";
import productButtonsHandler from "./scripts/productButtonsHandler.js";
import productTooltipHandler from "./scripts/productTooltipHandler.js";
import priceTooltipHandler from './scripts/priceTooltipHandler.js'
import chargeDeliveryTooltipHandler from "./scripts/chargeDeliveryTooltipHandler.js";
import basketDeliveryTooltipHandler from "./scripts/basketDeliveryTooltipHandler.js";
import chooseAll from "./scripts/handlers/chooseAll.js";
import chooseItem from "./scripts/handlers/chooseItem.js";
import plus from "./scripts/handlers/plus.js";
import minus from "./scripts/handlers/minus.js";
import drawDelivery from "./scripts/drawDelivery.js";
import validation from "./scripts/validation.js";
import drawCharge from "./scripts/drawCharge.js";
import drawModalDelivery from "./scripts/drawModalDelivery.js";
import tabs from "./scripts/tabs.js";
import showAndHideModalDelivery from "./scripts/showAndHideModalDelivery.js";
import modalDeliveryCheckbox from "./scripts/modalDeliveryCheckbox.js";
import modalDeliveryDeleteButtonHandler from "./scripts/modalDeliveryDeleteButtonHandler.js";
import drawModalPayment from "./scripts/drawModalPayment.js";
import drawAvailableItems from "./scripts/drawAvailableItems.js";

drawItems(products)
productButtonsHandler(products)
productTooltipHandler()
priceTooltipHandler()
chargeDeliveryTooltipHandler()
basketDeliveryTooltipHandler()
drawDelivery()
drawCharge()
drawModalDelivery()
tabs()
showAndHideModalDelivery()
modalDeliveryCheckbox()
modalDeliveryDeleteButtonHandler()
drawModalPayment()
validation()

const arrows = document.querySelectorAll('.basket_dropdownButton')

arrows.forEach((arrow) => arrow.addEventListener('click', toggleHandler))


const chooseAllCheckbox = document.getElementById('chooseAll')
chooseAllCheckbox.addEventListener('click', chooseAll)

const productCheckboxes = document.querySelectorAll('.basket_productCheckbox')
productCheckboxes.forEach(checkbox => checkbox.addEventListener('click', chooseItem))
productCheckboxes.forEach(checkbox => checkbox.addEventListener('click', drawCharge))

const pluses = document.querySelectorAll('.basket_counterPlus')
const minuses = document.querySelectorAll('.basket_counterMinus')

pluses.forEach(btn => {
    btn.addEventListener('click', plus)
    btn.addEventListener('click', chooseItem)
    btn.addEventListener('click', drawDelivery)
    btn.addEventListener('click', drawCharge)
})
minuses.forEach(btn => {
    btn.addEventListener('click', minus)
    btn.addEventListener('click', chooseItem)
    btn.addEventListener('click', drawDelivery)
    btn.addEventListener('click', drawCharge)
})

const chargeCheckbox = document.querySelector('.charge_checkbox')
const chargeBtn = document.querySelector('.charge_button')

chargeCheckbox.addEventListener('click', () => {
    const totalSum = document.querySelector('.chargeAmount')

    if (chargeCheckbox.checked) {
        chargeBtn.textContent = `Оплатить ${totalSum.textContent}`
    } else chargeBtn.textContent = 'Заказать'
    drawCharge()
})