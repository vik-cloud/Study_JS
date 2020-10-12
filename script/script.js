'use strict';

let money = +prompt('Ваш месячный доход?', 50000);
let income = 'фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 500000;
let period = 10;


console.log(typeof money);
console.log(typeof income);
console.log(typeof addExpenses);

console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');  

console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = money / 30;
console.log(budgetDay); 


// LESSON03

let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?');

let budgetMonth = money - (amount1 + amount2);
console.log('Бюджет на месяц: ', budgetMonth, 'руб.');


if (budgetMonth < 0){
  console.log('Цель недостижима, ты в убытке, найди нормальную работу!');
} else {
  console.log('Цель будет достигнута за', Math.ceil(mission/budgetMonth), 'месяцев');
}

budgetDay = Math.floor(budgetMonth/30);
console.log('Бюджет на день:', budgetDay, 'руб.');

switch (true){
  case (budgetDay >= 1200) :
    console.log('У вас высокий уровень дохода');
    break;
  case (600 <= budgetDay && budgetDay < 1200) :
    console.log('У вас средний уровень дохода');
    break;
  case (0 <= budgetDay && budgetDay < 600) :
    console.log('К сожалению у вас уровень дохода ниже среднего');
    break;
  case (budgetDay < 0) :
    console.log('Что то пошло не так');
    break;
}

 






