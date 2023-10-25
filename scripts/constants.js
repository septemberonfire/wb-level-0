export const products = [
  {
    img: "./images/products/product-img1.png",
    size: 56,
    name: "Футболка UZcotton мужская",
    color: "белый",
    store: "Коледино WB",
    provider: {
      name: "ООО Вайлдберриз",
      tooltipName: 'ООО "ВАЙЛДБЕРРИЗ"',
      ogrn: "1067746062449",
      address: "142181, Московская Область, Подольск, Д Коледино, Д. 6 СТР. 1",
    },
    amount: {
      all: 3,
      picked: 1,
      inStock: 3,
    },
    actualPrice: 522,
    oldPrice: 1051,
    id: 1,
    isChosen: true,
  },
  {
    img: "./images/products/product-img2.png",
    size: "",
    name: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
    color: "прозрачный",
    store: "Коледино WB",
    provider: {
      name: "ООО Мегапрофстиль",
      tooltipName: 'ООО "МЕГАПРОФСТИЛЬ"',
      ogrn: "5167746237148",
      address:
        "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
    },
    amount: {
      all: 300,
      picked: 200,
      inStock: 184,
    },
    actualPrice: 10500,
    oldPrice: 11500,
    id: 2,
    isChosen: true,
  },
  {
    img: "./images/products/product-img3.png",
    size: "",
    name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
    color: "",
    store: "Коледино WB",
    provider: {
      name: "ООО Вайлдберриз",
      tooltipName: 'ООО "ВАЙЛДБЕРРИЗ"',
      ogrn: "1067746062449",
      address: "142181, Московская Область, Подольск, Д Коледино, Д. 6 СТР. 1",
    },
    amount: {
      all: 4,
      picked: 2,
      inStock: 4,
    },
    actualPrice: 247,
    oldPrice: 475,
    id: 3,
    isChosen: true,
  },
];

export const deliveryPickpoint = [
  {
    id: "pickpoint-first",
    address: "г. Бишкек, улица Ахматбека Суюмбаева, 12/1",
    basketAddress: "Бишкек, улица Ахматбека Суюмбаева, 12/1",
    rating: 4.82,
  },
  {
    id: "pickpoint-second",
    address: "г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",
    basketAddress: "Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",
    rating: 4.99,
  },
  {
    id: "pickpoint-third",
    address: "г. Бишкек, улица Табышалиева, д. 57",
    basketAddress: "Бишкек, улица Табышалиева, д. 57",
    rating: 4.67,
  },
];

export const deliveryCourier = [
  {
    address: "Бишкек, улица Табышалиева, 57",
    id: 1,
  },
  {
    address: "Бишкек, улица Жукеева-Пудовкина, 77/1",
    id: 2,
  },
  {
    address: "Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1",
    id: 2,
  },
];

export const cards = [
  {
    paymentSystemLogo: './images/icons/icon-mir.svg',
    number: '2222 22•• •••• 2222',
    id: 'two'
  },
  {
    paymentSystemLogo: './images/icons/icon-visa.svg',
    number: '4444 44•• •••• 4444',
    id: 'four'
  },
  {
    paymentSystemLogo: './images/icons/icon-mastercard.svg',
    number: '6666 66•• •••• 6666',
    id: 'six'
  },
  {
    paymentSystemLogo: './images/icons/icon-maestro.svg',
    number: '8888 88•• •••• 8888',
    id: 'eight'
  },
]
