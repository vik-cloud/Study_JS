let money = 50000;
let income = 'фриланс';
let addExpenses = "УЧЕБА, КОММУНАЛКА, ДОСУГ";
let deposit = true;
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

console.log(addExpenses);