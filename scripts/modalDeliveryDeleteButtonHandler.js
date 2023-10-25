export default () => {
  const deliveryPopup = document.querySelector('.delivery_popup')
  deliveryPopup.addEventListener('click', (e) => {
    if (e.target.classList.contains('delivery_popupPickpointBtn')) {
      e.target.closest('.delivery_popupPickpointAddress').style.display = 'none'
    }
  })
}