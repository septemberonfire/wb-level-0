export default () => {
  const tabBtns = document.querySelectorAll('.delivery_popupTabBtn')
  const tabContentCards = document.querySelectorAll('.tabContent')

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      let currentBtn = btn
      let tabId = btn.getAttribute('data-tab-content')
      let currentTab = document.querySelector(`#${tabId}`)

      tabBtns.forEach((el) => {
        el.classList.remove('active')
      })

      tabContentCards.forEach((el) => {
        el.classList.remove('active')
      })

      currentBtn.classList.add('active')
      currentTab.classList.add('active')
    })
  })
}