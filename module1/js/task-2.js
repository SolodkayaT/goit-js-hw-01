const PRODUCT_LIMIT_EXCEEDED = 'На складе недостаточно твоаров!';
const ORDER_IS_PROCESSED = 'Заказ оформлен, с вами свяжется менеджер!';
const total = 100;
const order = 80;
let message;

if (total < order) {
  message = PRODUCT_LIMIT_EXCEEDED;
  console.assert(
    total < order || message === PRODUCT_LIMIT_EXCEEDED,
    'Error: in order processed massage ',
  );
} else {
  message = ORDER_IS_PROCESSED;
  console.assert(
    total > order && message === ORDER_IS_PROCESSED,
    'Error: in limit exceeded massage ',
  );
}
console.log(message);
