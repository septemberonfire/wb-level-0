import { products } from "../constants.js"
import drawCharge from "../drawCharge.js"
import drawDelivery from "../drawDelivery.js"

export default (e) => {
    const product = e.target.closest('.basket_productsItem')
    const currentCheckbox = product.querySelector('.basket_productCheckbox')
    const productData = products.find((el) => el.id == product.dataset.id)

    if (currentCheckbox.checked) {
        const amount = product.querySelector('.basket_counterAmount').textContent
        productData.isChosen = true
    } else productData.isChosen = false

    drawDelivery()
    drawCharge()
}