import drawItems from "./scripts/drawItems.js";
import { products } from "./scripts/constants.js";
import { toggleHandler } from "./scripts/toggleArrowHandler.js";
import productButtonsHandler from "./scripts/productButtonsHandler.js";
import tooltipHandler from "./scripts/tooltipHandler.js";

drawItems(products)
productButtonsHandler(products)
tooltipHandler()

const arrows = document.querySelectorAll('.basket_dropdownButton')

arrows.forEach((arrow) => arrow.addEventListener('click', toggleHandler))