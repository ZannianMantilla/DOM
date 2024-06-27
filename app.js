// Objeto padre en el navegador
let win = window;
let dom = document;
let head = dom.head;
let body = dom.body;

const $header = dom.querySelector('header');
const $header_class = dom.querySelector('.header');
const $header_class_all = dom.querySelectorAll('.header');
const $header_id = dom.querySelector('#header');
const $main = dom.querySelector('main');
const $buscar = dom.querySelectorAll('div.card > ul.list > li.list__item > a');
// const $buscar = dom.querySelectorAll();


const id = document.getElementById('header');
const clase = document.getElementsByClassName('header');

console.log(win)
console.log(dom)
console.log(head)
console.log(body)
console.log(dom.title)
console.log(dom.styleSheets)
console.log($header)
console.log($header_class)
console.log($header_class_all)
console.log($header_id)
console.log(id)
console.log(clase)
console.clear()
console.log($main.childNodes)

$main.childNodes.forEach((nodo) => console.log(nodo));
// const arreglosNodo = Array.from($main.childNodes);
const arreglosNodo = [...$main.childNodes];
const nuevo2 = arreglosNodo.filter((nodo) => (nodo.nodeType === nodo.TEXT_NODE) ? true:false);
console.log(nuevo2);
console.clear()


console.log($main.children); //Hijos
console.log($main.parentElement); //Padre
console.log($main.previousElementSibling); //Hermano anterior
console.log($main.nextElementSibling); //Hermano siguiente
console.log($buscar)
console.clear()

 const $form =  dom.querySelector("#search");
 console.log($form);
 
 $form.setAttribute('method', 'GET');
 $form.firstElementChild.removeAttribute("placeholder");
 $form.firstElementChild.setAttribute('autocomplete', 'on');

  $form.classList.add("otra__clase")
 console.log($form.classList);
  $form.classList.remove("otra__clase") 
 console.log($form.classList);
  $form.classList.toggle("otra__clase") 
 console.log($form.classList);