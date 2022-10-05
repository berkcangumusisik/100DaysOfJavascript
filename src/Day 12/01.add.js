// Element Oluşturma

const newLink = document.createElement("a") // createElement ile yeni bir element oluşturduk
const cartBody = document.getElementsByClassName("card-body")[1] // card-body class'ına sahip elementi seçtik
newLink.id = "clear-todos" // id'sini belirledik
newLink.className = "btn btn-danger" // class'ını belirledik
newLink.href = "https://www.google.com" // href'ini belirledik
newLink.target = "_blank" // target'ını belirledik
newLink.appendChild(document.createTextNode("Google'a Git"))
cartBody.appendChild(newLink)
console.log(newLink)
