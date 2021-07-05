'use strict';

let money, time;

function start() {
    do {
        money = +prompt('Ваш бюджет на месяц?', '');
        console.log(typeof money);
    } while (isNaN(money) || money == '' || money == null);

    time = prompt('Введите дату в формате YYYY-MM-DD', '');
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            $ = prompt('Во сколько обойдется?', '');

        if (typeof (a) === 'string' && typeof (a) != null && typeof ($) != null && a != ''
            && $ != '' && a.length < 50) {
            appData.expenses[a] = $;
        } else {
            console.log("bad result");
            i--;
        }
    }
}
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++){
        let a = prompt('Статья необязательных расходов?', ''),
            $ = prompt('Во сколько обойдется?', '');

        
        if (typeof (a) === 'string' && typeof (a) != null && typeof ($) != null && a != ''
            && $ != '' && a.length < 50) {
            appData.optionalExpenses[i] = $;
        } else {
            console.log("bad result");
            i--;
        }
    }
}

chooseOptExpenses();

function detectDayBudget() {
    appData.moneyDay = (appData.budget / 30).toFixed();

    let monDay = +appData.moneyDay;

    console.log(monDay);
    console.log(typeof monDay);
    return monDay;
}

alert("Бюджет на 1 день составляет " + detectDayBudget() + "руб.");

function detectLevel() {
    let wealth;
    if (appData.moneyDay < 100) {
        wealth = "Это минимальный уровень достатка!";
        console.log(wealth);
    } else if (appData.moneyDay > 100 && appData.moneyDay < 2000) {
        wealth = "Это средний уровень достатка!";
        console.log(wealth);
    } else if (appData.moneyDay > 2000) {
        wealth = "Это высокий уровень достатка!";
        console.log(wealth);
    } else {
        wealth = "Произошла ошибка";
        console.log(wealth);
    }
    return alert(wealth);
}

detectLevel();

function checkSavings() {
    if (appData.savings) {
        let save = +prompt('сумма накоплений?', ''),
            percent = +prompt('какой процент?');
        
        appData.monthIncome = save / 100 / 12 * percent;
        alert('доход в месяц : ' + appData.monthIncome);
    }
}

checkSavings();

console.log(appData);
