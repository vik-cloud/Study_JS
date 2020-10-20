'use strict';

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let money,

    income = 'фриланс',

    appData = {
      budget: 'money',
      budgetDay: 0,
      budgetMonth: 0,
      expensesMonth: 0,
      addExpenses: [],
      deposit: false,
      expenses: {},
      getExpensesMonth: function() {

    
          return 2000;

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
        },
      asking: function() {

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Квартплата, проездной, кредит');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i=0; i<2; i++){
          let key = prompt('Введите обязательную статью расходов?'),
              value = prompt('Во сколько это обойдется?', 10000);
          while (!isNumber(value)){
            value = prompt('Повторите ввод. Во сколько это обойдется?', 10000);
          }
          appData.expenses[key] = +value;
          // console.log(appData.expenses);
        }



      }
    } // End appData{}

appData.asking();
start();


let mission = 500000,
    period = 10,
    expensesMonth = appData.getExpensesMonth(),
    accumulatedMonth = appData.getAccumulatedMonth(),
    targetMonth = appData.getTargetMonth();

function start() {
  do {
    money = prompt('Ваш месячный доход?', 50000);
  }
  while(!isNumber(money));
  return money;
}


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