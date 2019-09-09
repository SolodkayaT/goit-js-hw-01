const name = 'Генератор защитного поля';
let price = 1000;
console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);
price = 2000;
console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);
console.assert(name === 'Генератор защитного поля', 'Error: invalid name');
console.assert(price === 1000 || price === 2000, 'Error: invalid price');
