'use strict';

let btnStart = document.getElementById('start'),
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomeAll = document.querySelectorAll('.additional_income-item'),
    additionalIncomeFirst = additionalIncomeAll[0],
    additionalIncomeSecons = additionalIncomeAll[1],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    btnIncomeAdd = document.querySelector('.income_add'),
    incomeItems = document.querySelectorAll('.income-items'),
    btnExpensesAdd = document.querySelector('.expenses_add'),
    expensesItems = document.querySelectorAll('.expenses-items');


      // console.log(expensesItems[0]); //test var
      // console.log(btnExpensesAdd); //test var


function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}


let appData = {
      budget: 0,
      mission: 500000,
      income: {},
      budgetDay: 0,
      budgetMonth: 0,
      targetMonth: 0,
      expensesMonth: 0,
      addExpenses: [],
      addIncome: [],
      deposit: 0,
      expenses: {},
      period: 3,
      moneyDeposit: 0,
      percentDeposit: 0,
      start: function() {
        appData.budget = salaryAmount.value;
        if(appData.budget === ''){
          alert('Поле "Месячный доход" пустое, оно должно быть заполнено');
          return;
        }
        appData.getIncome();
        appData.getExpenses();
        appData.getExpensesMonth();
        appData.getBudget(); 
        appData.getAddExpenses();
        appData.getAddIncome();

        appData.showResult();
        // return money;
      },

      addIncomeBlock: function() {
        let incomeItemsClone = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(incomeItemsClone, btnIncomeAdd);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3){
          btnIncomeAdd.style.display = 'none';
        }
      },
      addExpensesBlock: function() {
        let expensesItemsClone = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(expensesItemsClone, btnExpensesAdd);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
          btnExpensesAdd.style.display = 'none';
        }
      },
      getExpensesMonth: function() {
          for(let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
          }
          return appData.expensesMonth;
        },
      getBudget: function() {
          appData.budgetMonth = appData.budget - appData.expensesMonth;
          appData.budgetDay = Math.floor(appData.budgetMonth / 30);
        },
      getTargetMonth: function() {
          appData.targetMonth = Math.ceil(appData.mission / appData.budgetMonth);
          return appData.targetMonth;
        },
      getStatusIncome: function(){
          switch (true){
            case (appData.budgetDay >= 1200) :
              console.log('У вас высокий уровень дохода');
              break;
            case (600 <= appData.budgetDay && appData.budgetDay < 1200) :
              console.log('У вас средний уровень дохода');
              break;
            case (0 <= appData.budgetDay && appData.budgetDay < 600) :
              console.log('К сожалению у вас уровень дохода ниже среднего');
              break;
            case (appData.budgetDay < 0) :
              console.log('Что то пошло не так');
              break;
          }
        },
      getAddIncome: function(){
        additionalIncomeAll.forEach(function(item){
          item = item.value.trim();
          if(item !== ''){
            appData.addIncome.push(item);
          }
        });
      },
      getAddExpenses: function() {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
          item = item.trim();
          if(item !== ''){
            appData.addExpenses.push(item);
          }
        });
      },
      getExpenses: function() {
        expensesItems.forEach(function(item){
          let expensesName = item.querySelector('.expenses-title').value,
              expensesCash = item.querySelector('.expenses-amount').value;
              if(expensesName !== '' && expensesCash !== ''){
                appData.expenses[expensesName] = +expensesCash;
              }
        });

      },
      getIncome: function() {
        incomeItems.forEach(function(item){
          let incomeName = item.querySelector('.income-title').value,
              incomeCash = item.querySelector('.income-amount').value;
              if(incomeName !== '' && incomeCash !== ''){
                appData.income[incomeName] = +incomeCash;
              }
        });
      },
      showResult: function() {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        // console.log('budgetMonthValue', budgetMonthValue.value);
      },
      getInfoDeposit: function() {
        if(appData.deposit) {
          appData.moneyDeposit = prompt('Введите сумму депозита', 1000);
          while (!isNumber(appData.moneyDeposit)){
            appData.moneyDeposit = prompt('Введите сумму депозита', 1000);
          }
          appData.percentDeposit = prompt('Введите годовой процент депозита', 10);
          while (!isNumber(appData.percentDeposit)){
            appData.percentDeposit = prompt('Введите годовой процент депозита', 10);
          }
        }
      },
      calcSavedMoney: function() {
        return appData.budgetMonth * appData.period;
      }
    } // End appData{}
              

btnStart.addEventListener('click', appData.start);

btnIncomeAdd.addEventListener('click', appData.addIncomeBlock);
btnExpensesAdd.addEventListener('click', appData.addExpensesBlock);








// appData.getInfoDeposit();


// appData.getTargetMonth();  
// if (appData.targetMonth < 0){
//   console.log('Цель не будет достигнута');
// } else {
//   console.log('Цель будет достигнута за', appData.targetMonth, 'месяцев');
// }

// console.log('Расходы за месяц:', appData.expensesMonth, 'руб.');
// appData.getStatusIncome(); 









