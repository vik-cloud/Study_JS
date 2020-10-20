'use strict';

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let money;

let income = 'фриланс';

let appData = {
  budget: 'money',
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  getExpensesMonth: function() {
      let expenses = [];
      let sum = 0;
      for (let i=0; i<2; i++){
        expenses[i] = prompt('Введите обязательную статью расходов?');
        let mon = prompt('Во сколько это обойдется?', 10000);
        while (!isNumber(mon)){
          mon = prompt('Повторите ввод. Во сколько это обойдется?', 10000);
        }
        sum += +mon;
      }
      return sum;
    },
  getAccumulatedMonth: function() {
      return money - appData.expensesMonth;
    },
  getTargetMonth: function() {
      return  Math.ceil(mission / accumulatedMonth);
    },
  getStatusIncome: function() {
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

  
} // Конец объекита




start();

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 500000;
let period = 10;


function start() {
  do {
    money = prompt('Ваш месячный доход?', 50000);
  }
  while(!isNumber(money));
  return money;
}


console.log(addExpenses.toLowerCase().split(', '));


let expensesMonth = appData.getExpensesMonth(); // Переделана на объект
let accumulatedMonth = appData.getAccumulatedMonth(); // Переделана на объект
let targetMonth = appData.getTargetMonth(); // Переделана на объект



if (targetMonth < 0){
  console.log('Цель не будет достигнута');
} else {
  console.log('Цель будет достигнута за', targetMonth, 'месяцев');
}


let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день:', budgetDay, 'руб.');






console.log('Расходы за месяц:', expensesMonth, 'руб.');


appData.getStatusIncome();


// console.log('money ', money)
// console.log('appData.budget ', appData.budget)