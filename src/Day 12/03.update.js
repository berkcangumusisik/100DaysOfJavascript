// Replace 
const cartBody = document.getElementsByClassName("card-body")[1]
const newElement = document.createElement("h3")
newElement.className = "card-title"
newElement.id = "tasks-title"
neweElement.textContent = "Yeni Todolar"

// Eski Element
// replaceChild => Yeni Elementi Eski Elementin yerine koyar
const oldElement = document.querySelector("#tasks-title")
cartBody.replaceChild(newElement, oldElement)
console.log(cartBody)