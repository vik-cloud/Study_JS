'use strict';

let body = document.querySelector('body')

function DomElement(){
  this.selector = '.sran';  
  this.height;  
  this.width;  
  this.bg;  
  this.fontSize;
}
 
DomElement.prototype.createElement = function(){
  if(this.selector[0] === '.'){
    let block = document.createElement('div');
    block.classList.add('block');
    block.textContent = 'block';
    body.prepend(block);
  } else if(this.selector[0] === '#'){
    let block = document.createElement('p');
    block.id = 'best';
    block.textContent = 'best';
    body.prepend(block);
  } 
}

let ob = new DomElement;

ob.createElement()

