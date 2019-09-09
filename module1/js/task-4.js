/* eslint-disable no-alert */
const USER_CANCELED = 'Отменено пользователем!';
const INSUFFICIENT_CREDITS = 'Недостаточно средств на счету!';
const WRONG_VALUE = 'Вы ввели не число, либо число меньше нуля!';
const credits = 23580;
const pricePerDroid = 3000;
let message;
let totalPrice;
let balance;
const userSaid = prompt('Сколько дроидов вы хотите приобрести?');

if (userSaid === null) {
  message = USER_CANCELED;
  console.assert(
    userSaid === null && message === USER_CANCELED,
    'Error: in user canceled message',
  );
}

if (userSaid > 0 && userSaid != null && userSaid !== '' && !userSaid.isNan) {
  totalPrice = pricePerDroid * userSaid;

  if (totalPrice < credits) {
    balance = credits - totalPrice;
    message = `Вы купили ${userSaid} дроидов, на счету осталось ${balance} кредитов.`;
    console.assert(
      totalPrice < credits
        && message
          === `Вы купили ${userSaid} дроидов, на счету осталось ${balance} кредитов.`,
      'Error: in total price and balance message',
    );
  } else {
    message = INSUFFICIENT_CREDITS;
    console.assert(
      totalPrice > credits && message === INSUFFICIENT_CREDITS,
      'Error: in insufficient credits message',
    );
  }
} else {
  message = WRONG_VALUE;
  console.assert(
    userSaid < 0
      && userSaid === null
      && userSaid === ''
      && userSaid.isNan
      && message === WRONG_VALUE,
    'Error: in wrong value message',
  );
}
alert(message);
