export default () => {
  const modalDeliveryWindow = document.querySelector('.delivery_popupWrap')
  const closeBtn = document.querySelector('.delivery_popupCloseBtn')
  
  const basketDeliveryChanger = document.querySelector('.basket_deliveryChanger')
  const deliveryOpener = document.querySelector('.charge_deliveryOpener')

  const showModalDelivery = () => {
    modalDeliveryWindow.style.opacity = '1'
    modalDeliveryWindow.style.visibility = 'visible'
  }

  const hideModalDelivery = () => {
    modalDeliveryWindow.style.opacity = '0'
    modalDeliveryWindow.style.visibility = 'hidden'
  }

  basketDeliveryChanger.addEventListener('click', showModalDelivery)
  deliveryOpener.addEventListener('click', showModalDelivery)
  closeBtn.addEventListener('click', hideModalDelivery)


}