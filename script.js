'use strict';

let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    $1 = prompt('Во сколько обойдется?', ''),
    a2 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    $2 = prompt('Во сколько обойдется?', '');

appData.expenses.a1 = $1;
appData.expenses.a2 = $2;

alert(appData.budget / 30);


