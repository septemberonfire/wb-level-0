import drawItems from "./scripts/drawItems.js";
import { products } from "./scripts/constants.js";
import { toggleHandler } from "./scripts/toggleArrowHandler.js";

drawItems(products)

const arrows = document.querySelectorAll('.basket_dropdownButton')

arrows.forEach((arrow) => arrow.addEventListener('click', toggleHandler))