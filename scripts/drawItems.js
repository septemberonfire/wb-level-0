import drawUnavailableItems from "./drawUnavailableItems.js";
import drawAvailableItems from "./drawAvailableItems.js";

export default function drawItems (products){
  drawAvailableItems(products)
  drawUnavailableItems(products)
}