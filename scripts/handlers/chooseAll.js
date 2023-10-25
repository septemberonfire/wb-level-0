import { products } from "../constants.js"
import drawCharge from "../drawCharge.js"
import drawDelivery from "../drawDelivery.js"

export default () => {
    const currentEl = document.getElementById('chooseAll')
    document.querySelectorAll('.basket_productCheckbox').forEach((el) => {
        const currentProductItem = el.closest('.basket_productsItem')
        const currentProduct = products.find((prod) => prod.id == currentProductItem.dataset.id)
        
        if (currentEl.checked) {
            currentProduct.isChosen = true
            el.checked = true
        } else {
            el.checked = false
            currentProduct.isChosen = false
        }
    })
    drawDelivery()
    drawCharge()
}

