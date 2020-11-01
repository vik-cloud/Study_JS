'use strict';

function isNumber(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
}


let btnStart = document.getElementById('start'),
    btnCancel = document.getElementById('cancel'),
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
    periodAmountValue = document.querySelector('.period-amount'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    dataInputTextAll = document.querySelectorAll('.data input[type=text]');
// console.log(dataInputTextAll);


let appData = {
      budget: '',
      income: {},
      budgetDay: 0,
      budgetMonth: 0,
      targetMonth: 0,
      expensesMonth: 0,
      addExpenses: [],
      addIncome: [],
      deposit: 0,
      expenses: {},
      moneyDeposit: 0,
      percentDeposit: 0,
      checkSalaryAmount: function(){
        btnStart.style.pointerEvents = 'none';
        salaryAmount.addEventListener('input', function(){
          if(isNumber(salaryAmount.value)){
            btnStart.style.pointerEvents = '';
          } else {
            btnStart.style.pointerEvents = 'none';
          } 
        });
      },
      start: function(){
        this.budget = salaryAmount.value;
        this.getExpenses();
        this.getExpensesMonth();
        this.getBudget(); 
        this.getIncome();
        this.getAddExpenses();
        this.getAddIncome();
        this.showResult();
        appData.disableInput();
      },
      reset: function(){

      },
      addIncomeBlock: function(){
        let incomeItemsClone = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(incomeItemsClone, btnIncomeAdd);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3){
          btnIncomeAdd.style.display = 'none';
        }
      },
      addExpensesBlock: function(){
        let expensesItemsClone = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(expensesItemsClone, btnExpensesAdd);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
          btnExpensesAdd.style.display = 'none';
        }
      },
      getExpensesMonth: function(){
          for(let key in this.expenses){
            this.expensesMonth += this.expenses[key];
          }
          return this.expensesMonth;
        },
      getBudget: function(){ //проверено
          this.budgetMonth = this.budget - this.expensesMonth;
          this.budgetDay = Math.floor(this.budgetMonth / 30);
        },
      getTargetMonth: function(){
        return Math.ceil(targetAmount.value / this.budgetMonth);
      },
      getAddIncome: function(){
        additionalIncomeAll.forEach(function(item){
          item = item.value.trim();
          if(item !== ''){
            appData.addIncome.push(item);  // this вернул => undefined
          }
        });
      },
      getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
          item = item.trim();
          if(item !== ''){
            appData.addExpenses.push(item); // this вернул => undefined
          }
        });
      },
      getExpenses: function(){
        expensesItems.forEach(function(item){
          let expensesName = item.querySelector('.expenses-title').value,
              expensesCash = item.querySelector('.expenses-amount').value;
              if(expensesName !== '' && expensesCash !== ''){
                // console.log(this);
                appData.expenses[expensesName] = +expensesCash; // this вернул => undefined
              }
        });
      },
      getIncome: function(){
        incomeItems.forEach(function(item){
          let incomeName = item.querySelector('.income-title').value,
              incomeCash = item.querySelector('.income-amount').value;
              if(incomeName !== '' && incomeCash !== ''){
                appData.income[incomeName] = +incomeCash; // this вернул => undefined
                appData.budgetMonth += +incomeCash; // this вернул => undefined
              }
            });
      },
      showResult: function(){
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = this.getTargetMonth();
        incomePeriodValue.value = this.calcSavedMoney();
        periodSelect.addEventListener('input', function(){
          incomePeriodValue.value = appData.calcSavedMoney();
        });
      },
      getPeriodValue: function(){
        periodAmountValue.textContent = periodSelect.value;
      },
      calcSavedMoney: function(){
        return this.budgetMonth * periodSelect.value;
      },
      disableInput: function(){
        dataInputTextAll.forEach(function(item,i){
          item.setAttribute("disabled", "disabled");
        });
        btnStart.style.display = 'none';
        btnCancel.style.display = 'inline-block';
      }
    }; // End appData{}
              
    
appData.checkSalaryAmount();
// btnStart.addEventListener('click', appData.start);
let start = appData.start.bind(appData);
btnStart.addEventListener('click',start);
btnIncomeAdd.addEventListener('click', appData.addIncomeBlock);
btnExpensesAdd.addEventListener('click', appData.addExpensesBlock);
periodSelect.addEventListener('input', appData.getPeriodValue);






// let ivan = {
//             age: 24,
//             work: 'shit',
//             countru: 'ru',
//             f2: function(){
//               console.log(ira.f1())
//             }
//             },
//     oleg = {
//             age: 18,
//             work: 'don-t work',
//             countru: 'ru',
//             info: function(){
//               // console.log('My age:',this.age)
//             }
//             },
//     ira = {
//             age: 38,
//             work: 'Workis shit',
//             countru: 'ru',
//             info: function(){
//               // console.log('My age:',this.age)
//             },
//             f1: function(){
//               return this.age + 2;
//             },
//           };

// let foo = function(){
//   console.log(ira.f1)
// }

