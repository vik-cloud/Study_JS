'use strict';

let money = +prompt('Ваш месячный доход?', 50000);
let income = 'фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 500000;
let period = 10;


showTypeOf(money);
showTypeOf(income);
showTypeOf(addExpenses);

// console.log(addExpenses.length);
// console.log('Период равен ' + period + ' месяцев');
// console.log('Цель заработать ' + mission + ' рублей');  

console.log(addExpenses.toLowerCase().split(', '));

let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?');

if (getAccumulatedMonth() < 0){
  console.log('Цель недостижима, Вы в убытке!');
} else {
  console.log('Цель будет достигнута за', getTargetMonth(), 'месяцев');
}

let budgetDay = Math.floor(getAccumulatedMonth() / 30);
console.log('Бюджет на день:', budgetDay, 'руб.');


function getStatusIncome() {
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
}

function getExpensesMonth() {
  return amount1 + amount2;
}; 

let expensesMonth = getExpensesMonth();
console.log('Расходы за месяц:', expensesMonth, 'руб.');

function getAccumulatedMonth() {
 return money - getExpensesMonth();
}; 

let accumulatedMonth = getAccumulatedMonth();

function getTargetMonth() {
  return  Math.ceil(mission / getAccumulatedMonth());
}; 

function showTypeOf(data) {
  console.log('Тип данных значения "' + data + '":', typeof data);
} 

getStatusIncome();



