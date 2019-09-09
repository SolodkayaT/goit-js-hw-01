/* eslint-disable no-alert */
const NO_DELIVERY = 'В вашей стране доставка не доступна';
const USER_CANCELED = 'Отменено пользователем!';
const userCountry = prompt('Введите страну для доставки товара:');
let shippingСost;

if (userCountry === null) {
  alert(USER_CANCELED);
  console.assert(
    userCountry === null && USER_CANCELED,
    'Error: in user canceled message',
  );
}
if (userCountry !== null) {
  switch (userCountry.toLowerCase()) {
    case 'китай':
      shippingСost = '100';
      break;
    case 'чили':
      shippingСost = '250';
      break;
    case 'австралия':
      shippingСost = '170';
      break;
    case 'индия':
      shippingСost = '80';
      break;
    case 'ямайка':
      shippingСost = '120';
      break;
    default:
      alert(NO_DELIVERY);
  }
}
if (shippingСost !== undefined) {
  alert(`Доставка в ${userCountry} будет стоить ${shippingСost} кредитов`);
}
