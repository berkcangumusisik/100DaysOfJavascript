// Dinamik Eleman Silme
const todoList = document.querySelector(".list-group")
const todos = document.querySelectorAll("li.list-group-item")

// Remove Methodu => Elementi siler
todos[1].remove() // 2. elemanı sildik

// Remove Child Methodu => Elementin child'ını siler
todoList.removeChild(todos[2]) // 3. elemanı sildik
console.log(todos)

console.log(todoList)