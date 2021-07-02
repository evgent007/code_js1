'use strict';

let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

alert(appData.budget / 30);

for (let i = 0; i < 2; i++){
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        $ = prompt('Во сколько обойдется?', '');
    
    if (typeof (a) === 'string' && typeof (a) != null && typeof ($) != null && a != ''
        && $ != '' && a.length < 50) {
        appData.expenses[a] = $;
    } else {
        console.log("bad result");
        i--;
    }
};

appData.moneyDay = appData.budget / 30;
console.log(appData.moneyDay);

alert("Бюджет на 1 день составляет " + appData.moneyDay + "руб.");

if (appData.moneyDay < 100) {
    console.log("Это минимальный уровень достатка!");
} else if (appData.moneyDay > 100 && appData.moneyDay < 2000) {
    console.log("Это средний уровень достатка!");
} else if (appData.moneyDay > 2000) {
    console.log("Это высокий уровень достатка!");
} else {
    console.log("Произошла ошибка");
}

console.log(appData);
