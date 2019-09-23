/* eslint-disable no-alert */
const USER_CANCELED = 'Отменено пользователем!';
const WELCOME = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userInput = prompt('Введите свой пароль:');

if (userInput === null) {
  message = USER_CANCELED;
} else if (userInput === ADMIN_PASSWORD) {
  message = WELCOME;
} else {
  message = ACCESS_DENIED;
}
alert(message);
