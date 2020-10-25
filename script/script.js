'use strict';

const bookParent = document.querySelector('.books'),
      bookAll = document.querySelectorAll('.book'),
      body = document.querySelector('body'),
      bookLinkAll = document.querySelectorAll('.book a'),
      advertising = document.querySelector('.adv');
      

// console.log(bookLinkAll);

bookParent.prepend(bookAll[1]);
bookParent.append(bookAll[2]);
bookAll[3].before(bookAll[4]);

body.setAttribute('style','background-image: url(./image/you-dont-know-js.jpg)');

bookLinkAll[4].textContent = 'Книга 3. this и Прототипы Объектов';

advertising.remove();



