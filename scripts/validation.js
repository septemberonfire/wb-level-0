export default () => {
  const submitBtn = document.querySelector('.charge_button')

  const inputPhone = document.querySelector(".inputPhone");
  const phoneRegExp = /^([+]?[0-9\s-\(\)]{3,25})*$/i;
  const errorPhone = document.querySelector('.errorPhone')

  inputPhone.addEventListener('blur', ()=> {
    if (inputPhone.value == '') {
      errorPhone.textContent = 'Укажите номер телефона'
    } else if (!inputPhone.value.match(phoneRegExp)) {
      errorPhone.textContent = 'Формат: +9 999 999 99 99'
    }
  }, true)

  const inputName = document.querySelector(".inputName");
  const nameRegExp = /[^а-яёА-ЯЁ ]/g
  const errorName = document.querySelector('.errorName')

  inputName.addEventListener('blur', () => {
    if (inputName.value == '') {
      errorName.textContent = 'Укажите имя'
    } else errorName.textContent = ''
  }, true)


  const inputSurname = document.querySelector(".inputSurname");
  const surnameRegExp = /[^а-яёА-ЯЁ ]/g;
  const errorSurname = document.querySelector('.errorSurname')

  inputSurname.addEventListener('blur', () => {
    if (inputSurname.value == '') {
      errorSurname.textContent = 'Введите фамилию'
    } else errorSurname.textContent = ''
  }, true)

  const inputEmail = document.querySelector(".inputEmail");
  const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  const errorEmail = document.querySelector('.errorEmail')

  inputEmail.addEventListener('blur', () => {
    if (inputEmail.value == '') {
      errorEmail.textContent = 'Укажите электронную почту'
    } else if (!inputEmail.value.match(emailRegExp)) {
      errorEmail.textContent = 'Проверьте адрес электронной почты'
    } else errorEmail.textContent = ''
  }, true)


  const inputInn = document.querySelector(".inputInn")
  const innRegExp = /[^0-9]/g
  const errorInn = document.querySelector('.errorInn')

  inputInn.addEventListener('blur', () => {
    if (inputInn.value == '') {
      errorInn.textContent = 'Укажите ИНН'
    } else if (!inputInn.value.match(innRegExp)) {
      errorInn.textContent = 'Проверьте ИНН'
    } else if (inputInn.value.typeof = Number) {errorInn.textContent = ''}
  }, true)

  submitBtn.addEventListener('click', () => {
    if (inputEmail.value.match(emailRegExp)) {
      return
    } else errorEmail.textContent = 'Проверьте адрес электронной почты'
  })
};
