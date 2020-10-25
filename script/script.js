'use strict';

const bookParent = document.querySelector('.books'),
      bookAll = document.querySelectorAll('.book'),
      body = document.querySelector('body'),
      bookLinkAll = document.querySelectorAll('.book a'),
      advertising = document.querySelector('.adv'),
      bookListAll = document.querySelectorAll('ul'),
      bookListItemAll = document.querySelectorAll('li');
      

console.log(bookListItemAll);

bookParent.prepend(bookAll[1]);
bookParent.append(bookAll[2]);
bookAll[3].before(bookAll[4]);

body.setAttribute('style','background-image: url(./image/you-dont-know-js.jpg)');

bookLinkAll[4].textContent = 'Книга 3. this и Прототипы Объектов';

advertising.remove();

bookListItemAll[3].after(bookListItemAll[6]);
bookListItemAll[6].after(bookListItemAll[8]);
bookListItemAll[9].after(bookListItemAll[2]);

bookListItemAll[50].after(bookListItemAll[48]);
bookListItemAll[47].after(bookListItemAll[55]);
bookListItemAll[53].after(bookListItemAll[51]);


bookListAll[2].insertAdjacentHTML('beforeend', '<li>Глава 8: За пределами ES6</li>');
bookListAll[2].append(bookListItemAll[26]);

