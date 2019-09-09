/* eslint-disable no-alert */
const USER_CANCELED = 'Отменено пользователем!';
const WELCOME = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userInput = prompt('Введите свой пароль:');

if (userInput === null) {
  message = USER_CANCELED;
  console.assert(
    userInput === null && message === USER_CANCELED,
    'Error: in user canceled message',
  );
}

if (userInput === ADMIN_PASSWORD) {
  message = WELCOME;
  console.assert(
    userInput === ADMIN_PASSWORD && message === WELCOME,
    'Error: in user welcome message',
  );
}
if (userInput !== ADMIN_PASSWORD && userInput != null) {
  message = ACCESS_DENIED;
  console.assert(
    userInput !== ADMIN_PASSWORD && message === ACCESS_DENIED,
    'Error: in user wrong password message',
  );
}
alert(message);
