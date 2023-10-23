import drawItems from "./scripts/drawItems.js";
import { products } from "./scripts/constants.js";
import { toggleHandler } from "./scripts/toggleArrowHandler.js";
import productButtonsHandler from "./scripts/productButtonsHandler.js";
import productTooltipHandler from "./scripts/productTooltipHandler.js";
import priceTooltipHandler from './scripts/priceTooltipHandler.js'
import chargeDeliveryTooltipHandler from "./scripts/chargeDeliveryTooltipHandler.js";
import basketDeliveryTooltipHandler from "./scripts/basketDeliveryTooltipHandler.js";


drawItems(products)
productButtonsHandler(products)
productTooltipHandler()
priceTooltipHandler()
chargeDeliveryTooltipHandler()
basketDeliveryTooltipHandler()

const arrows = document.querySelectorAll('.basket_dropdownButton')

arrows.forEach((arrow) => arrow.addEventListener('click', toggleHandler))