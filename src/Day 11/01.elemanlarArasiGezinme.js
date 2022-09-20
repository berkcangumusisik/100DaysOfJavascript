
let value
const todoList = document.querySelector(".list-group")
const todo = document.querySelector(".list-group-item:nth-child(2)")
const cardrow = document.querySelector(".card.row")
value = todoList
value = todo
value = cardrow


// Child Nodes
value = todoList.childNodes // childNodes ile textleride alırız. Satır atlamaları da birer node olarak sayılır.


// Children - Element 
value = todoList.children // children ile sadece elementleri alırız. Satır atlamaları alınmaz.
value = todoList.children[1]
value = todoList.children[todoList.children.length - 1]
value = todoList.children[2].textContent = "Değiştirildi" //  3. elemanın textini değiştiririz.


value = cardrow
value = cardrow.children
value = cardrow.children[2].children[1].textContent = "Değiştirildi"

value = todoList
value = todoList.firstElementChild // ilk elemanı alırız.
value = todoList.lastElementChild // son elemanı alırız.
value = todoList.childElementCount // eleman sayısını alırız.

value = cardrow
value = cardrow.parentElement // parentElement ile parent elementi alırız.
value = cardrow.parentElement.parentElement // parentElement ile parent elementinin parent elementini alırız.


// Element Kardeşleri
value = todo
value = todo.previousElementSibling // previousElementSibling ile önceki kardeşi alırız.
value = todo.nextElementSibling // nextElementSibling ile sonraki kardeşi alırız.
console.log(value)