const PRODUCT_LIMIT_EXCEEDED = 'На складе недостаточно твоаров!';
const ORDER_IS_PROCESSED = 'Заказ оформлен, с вами свяжется менеджер!';
const total = 100;
const order = 80;
let message;

if (total < order) {
  message = PRODUCT_LIMIT_EXCEEDED;
} else {
  message = ORDER_IS_PROCESSED;
}
console.log(message);
