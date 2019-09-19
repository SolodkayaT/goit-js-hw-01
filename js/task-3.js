/* eslint-disable no-alert */
const USER_CANCELED = 'Отменено пользователем!';
const WELCOME = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userInput = prompt('Введите свой пароль:');

if (userInput === null) {
  message = USER_CANCELED;
}

if (userInput === ADMIN_PASSWORD) {
  message = WELCOME;
}
if (userInput !== ADMIN_PASSWORD && userInput != null) {
  message = ACCESS_DENIED;
}
alert(message);
