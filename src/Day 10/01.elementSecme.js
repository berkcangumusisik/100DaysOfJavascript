// Id'ye göre element seçme
let element

element = document.getElementById("title") // getElementById ile id'ye göre element seçme
element = document.getElementById("title").id // id'ye göre element seçme ve id'sini almak
element = document.getElementById("title").className // id'ye göre element seçme ve class'ını almak
element = document.getElementById("title").classList // id'ye göre element seçme ve class'larını almak
document.getElementById("title").style.color = "red" // id'ye göre element seçme ve style'ını değiştirmek
document.getElementById("title").style.backgroundColor = "yellow" // id'ye göre element seçme ve style'ını değiştirmek
document.getElementById("title").innerHTML = "Merhaba" // id'ye göre element seçme ve içeriğini değiştirmek
element = document.querySelector("#title") // querySelector ile id'ye göre element seçme
element = document.querySelector(".card-header") // querySelector ile class'a göre element seçme

// Çoklu element seçme
element = document.getElementsByClassName("task")[0] // getElementsByClassName ile class'a göre element seçme
element = document.getElementsByClassName("task")[1] // getElementsByClassName ile class'a göre element seçme

for (let i = 0; i < document.getElementsByClassName("task").length; i++) {
    document.getElementsByClassName("task")[i].style.color = "red" // getElementsByClassName ile class'a göre element seçme ve style'ını değiştirmek
}

console.log(element)