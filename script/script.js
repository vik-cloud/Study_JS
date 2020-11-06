'use strict';

let body = document.querySelector('body')

function DomElement(selector, height, width, fontSize, bg){
  this.selector = selector;    
  this.height = height;    
  this.width = width;    
  this.bg = bg;
  this.fontSize = fontSize;
}
 
DomElement.prototype.createElement = function(){
  let element;
  if(this.selector[0] === '.'){
    element = document.createElement('div');
    element.classList.add('block');
    element.textContent = 'block';
    body.prepend(element);
  } else if(this.selector[0] === '#'){
    element = document.createElement('p');
    element.id = 'div - best';
    element.textContent = 'p - best';
    body.prepend(element);
  } 
  // element.style.fontSize = this.fontSize;
  element.style.background = this.bg;
  element.style.height = this.height + 'px';
  element.style.width = this.width + 'px';
  element.style.fontSize = this.fontSize + 'px';
};

let elem1 = new DomElement('#asd',100, 300, 50, 'green');
elem1.createElement();

