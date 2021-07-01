'use strict';

let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');
let compulsoryExpense = prompt('Введите обязательную статью расходов в этом месяце', '');
let $ = prompt('Во сколько обойдется?', '');


let appData = {
    budget: money,
    timeData: time,
    expenses: {
        compulsoryExpense: $
    },
    optionalExpenses: {},
    income: [],
    savings: false,
};
let s = (money / 30);
alert(s);

console.log(s);

