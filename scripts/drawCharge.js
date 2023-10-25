import formatNum from "./helpers/formatNum.js";
import { products } from "./constants.js";

export default () => {
  
  const charge = document.querySelector(".charge");
  let commonSum = [];
  let commonOldSum = [];
  let totalDiscount;
  let commonAmount = [];
  products.forEach((element) => {
    if (element.isChosen) {
      commonSum.push(+element.actualPrice * +element.amount.picked);
      commonOldSum.push(
        Number(element.oldPrice) * Number(element.amount.picked)
      );

      commonAmount.push(Number(element.amount.picked));
    } 
  });

  let totalActualSum = 0
  if (commonSum) {
    totalActualSum = commonSum.reduce((a, b) => a + b);
  }
    const totalOldSum = commonOldSum.reduce((a, b) => a + b);
    const totalAmount = commonAmount.reduce((a, b) => a + b);
    totalDiscount = Number(totalOldSum) - Number(totalActualSum);

  const chargeStringHTML = `
  <h3 class="chargeTitle">
            Итого
            <div class="chargeAmount">
              ${formatNum(totalActualSum)}
              <div class="chargeCurrency">сом</div>
            </div>
          </h3>
          <div class="charge_caption">
            <div class="charge_captionProducts">
              ${formatNum(totalAmount)} товара
              <div class="charge_captionProductsValue">2 302 048 сом</div>
            </div>
            <div class="charge_captionDiscount">
              Скидка
              <div class="charge_captionDiscountValue">−${formatNum(
                totalDiscount
              )} сом</div>
            </div>
            <div class="charge_captionDelivery">
              Доставка
              <div class="charge_captionDeliveryValue">Бесплатно</div>
            </div>
          </div>
          <div class="charge_delivery">
            <div class="charge_deliveryTitleWrap">
              <h3 class="charge_deliveryTitle">Доставка в пункт выдачи</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="charge_correctBtn charge_deliveryOpener">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1585 3.05991L16.9401 6.84154L6.72705 17.0546L2.73544 17.8529C2.38557 17.9229 2.07711 17.6144 2.14709 17.2646L2.94541 13.273L13.1585 3.05991ZM4.17707 13.9321L13.1585 4.95072L15.0493 6.84154L6.06789 15.8229L3.70436 16.2956L4.17707 13.9321Z" fill="#CB11AB"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9948 7.78715L12.2132 4.00552L13.6313 2.5874C14.4145 1.8042 15.6843 1.8042 16.4675 2.5874L17.4129 3.53281C18.1961 4.31601 18.1961 5.58584 17.4129 6.36904L15.9948 7.78715ZM16.4675 5.42363C16.7286 5.16256 16.7286 4.73929 16.4675 4.47822L15.5221 3.53281C15.261 3.27174 14.8378 3.27174 14.5767 3.53281L14.104 4.00552L15.9948 5.89634L16.4675 5.42363Z" fill="#CB11AB"/>
                </svg>
            </div>
            <p class="charge_deliveryAddress">
              Бишкек, улица Ахматбека Суюмбаева, 12/1
            </p>
            <p><a href="#" class="charge_deliveryDate">5–8 фев</a></p>
          </div>
          <div class="charge_tooltipWrap">
            <img
              src="./images/icons/icon-delivery.svg"
              alt="back-delivery"
              class="charge_tooltipImg"
            />
            <p class="charge_tooltipCaption">
              Обратная доставка товаров на склад при отказе —
              <span class="charge_tooltipCaption-underlined">бесплатно</span>
            </p>
            <div class="charge_deliveryTooltip">
              Если товары вам не подойдут, мы вернем их обратно на склад — это бесплатно
            </div>
          </div>
          <div class="charge_payment">
            <div class="charge_paymentTitleWrap">
              <h3 class="charge_paymentTitle">Оплата картой</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="charge_correctBtn paymentOpener">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1585 3.05991L16.9401 6.84154L6.72705 17.0546L2.73544 17.8529C2.38557 17.9229 2.07711 17.6144 2.14709 17.2646L2.94541 13.273L13.1585 3.05991ZM4.17707 13.9321L13.1585 4.95072L15.0493 6.84154L6.06789 15.8229L3.70436 16.2956L4.17707 13.9321Z" fill="#CB11AB"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9948 7.78715L12.2132 4.00552L13.6313 2.5874C14.4145 1.8042 15.6843 1.8042 16.4675 2.5874L17.4129 3.53281C18.1961 4.31601 18.1961 5.58584 17.4129 6.36904L15.9948 7.78715ZM16.4675 5.42363C16.7286 5.16256 16.7286 4.73929 16.4675 4.47822L15.5221 3.53281C15.261 3.27174 14.8378 3.27174 14.5767 3.53281L14.104 4.00552L15.9948 5.89634L16.4675 5.42363Z" fill="#CB11AB"/>
                </svg>
            </div>
            <div class="charge_paymentData">
              <div class="charge_paymentSystem">
                <img src="./images/icons/icon-mir.svg" alt="mir" />
              </div>
              <div class="charge_paymentNumber">1234 12•• •••• 1234</div>
            </div>
          </div>
          <div class="charge_checkboxBlock">
            <div class="charge_checkboxWrap">
              <input type="checkbox" id="charge" class="charge_checkbox" />
              <label for="charge" class="charge_checkboxLabel"
                >Списать оплату сразу</label
              >
            </div>
            <p class="charge_checkboxCaption">
              Спишем оплату с карты при получении
            </p>
          </div>
          <button class="charge_button">Заказать</button>

          <div class="charge_notificationWrap">
            <img src="./images/icons/icon-checked.svg" alt="checked" />
            <p class="charge_notification">
              Соглашаюсь с
              <span class="charge_notification-underlined">правилами пользования торговой площадкой и возврата</span>
            </p>
          </div>
  `;

  charge.innerHTML = `${"" + chargeStringHTML}`;
};
