export default function productButtonsHandler(products) {
  window.addEventListener("click", (event) => {

    if (
      event.target.classList.contains("basket_productDelete") &&
      event.target.closest(".basket_productsItem")
    ) {
      const CurrentElement = event.target.closest(".basket_productsItem");
      const headerCounter = document.querySelector('.header_counter')
      const tabbarCounter = document.querySelector('.tabbar_counter')
      const basketActualContainer = document.querySelector('.basket_actualProducts')
      CurrentElement.remove();
      headerCounter.textContent = document.querySelectorAll(".basket_productsItem").length
      tabbarCounter.textContent = document.querySelectorAll(".basket_productsItem").length
      if (!document.querySelectorAll(".basket_productsItem").length) {
        headerCounter.style.visibility = 'hidden'
        tabbarCounter.style.visibility = 'hidden'
        document.querySelector(".basket_absent").style.display = 'none'
        document.querySelector(".basket_delivery").style.display = 'none'
        document.querySelector(".basket_payment").style.display = 'none'
        document.querySelector(".basket_reciever").style.display = 'none'
        document.querySelector(".charge").style.display = 'none'
        basketActualContainer.innerHTML = ''
        basketActualContainer.innerHTML = `<h3 class="basket_empty">В корзине пока нет товаров</h3>`
      }
    }

    if (
      event.target.classList.contains("basket_productDelete") &&
      event.target.closest(".basket_absentItem")
    ) {
      let CurrentElement = event.target.closest(".basket_absentItem");
      const absentContainer = document.querySelector(".basket_absent");
      CurrentElement.remove();
      if (!document.querySelectorAll(".basket_absentItem").length) {
        absentContainer.remove();
      }
    }

  });
}
