 
 
'use strict';

class UserData {
  constructor(gender, surname, name) {
    this.gender = gender;
    this.surname = surname;
    this.name = name;
  }

  allData() {
    console.log(this);
  }
  fullName() {
    return `${this.name} ${this.surname}`
  }

}

class Profession extends UserData {
  constructor(gender, surname, name, profession) {
    super(gender, surname, name);
    this.profession = profession;
  }

  sayFullInfoUser() {
    Profession.counter++;
    console.log(`${this.fullName()} 
    Profession: ${this.profession} 
    Gender: ${this.gender}
    Number registration: ${Profession.counter}`)
  }

}

Profession.counter = 0;

// let boss1 = new UserData('man', 'Makarenko', 'Viktor');
let boss = new Profession('man', 'Makarenko', 'Viktor', 'Web developer');
boss.sayFullInfoUser()

let engineer = new Profession('man', 'Orlov', 'Anatolik', 'IT engineer');
engineer.sayFullInfoUser()


// let proger = new Profession('man', 'Makarenko', 'Viktor'); 
//  boss.sayInfo()
// console.log(proger)
// console.log(boss.fullName())
