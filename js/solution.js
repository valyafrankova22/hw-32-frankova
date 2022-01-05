const ul = document.getElementById(`ulId`);
const attrsList = ul.attributes;
// Task 1
const arrOfAttrs = [];
for (let attribute of attrsList) {
    arrOfAttrs.push(attribute.nodeValue);
}
console.log(arrOfAttrs);


//Task 2
const arrOfAttrsName = [];
for (let attrName of attrsList) {
    arrOfAttrsName.push(attrName);
}
console.log(arrOfAttrsName);


//Task 3
const newLi = ul.lastElementChild.innerHTML = `Привет, меня зовут Валя`;
console.log(newLi);


// Task 4
function newAttr () {
   ul.firstElementChild.setAttribute(`data-my-name`, `Valya`);
}
newAttr();
console.log(ul.firstElementChild);


// Task 5
function remove() {
    ul.removeAttribute(`data-dog-tail`);
}
remove();
console.log(ul.attributes);