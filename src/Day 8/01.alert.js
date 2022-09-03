alert("Merhaba Dünya")
// alert() fonksiyonu ile kullanıcıya bir mesaj gösterir.
console.log(this) // this anahtar kelimesi ile kullanıcıya gösterilen mesajın hangi obje olduğunu gösterir.

console.log(window) // window obje üzerinde çalışır.
const cevap = confirm("Emin misiniz?") // confirm() fonksiyonu ile kullanıcıya bir mesaj gösterir. True veya False değerini döndürür.

if (cevap == true) {
  console.log("Silin Gitsin")
} else {
  console.log("Silmeyin")
}

const cevap2 = prompt("2+ 2 = ?") // prompt() fonksiyonu ile kullamıcıdan bir değer alır. Cevabı string olarak alır. 

if (cevap2 == "4") {
  console.log("Doğru")
} else {
  console.log("Yanlış")
}

let value
value = window // window obje üzerinde çalışır.
value = window.location //tarayıcının adres satırındaki URL hakkında bilgiler içerir
value = window.location.host // hostname ve port bilgilerini birlikte verir.
value = window.location.hostname // hostname bilgisi verir.
value = window.location.port // port bilgisi verir.
value = window.location.href // URL bilgisi verir.
console.log(value)
if(confirm("Sayfa Yenilensin mi?")){
    window.location.reload() // sayfa yenilenir.
}
else{
    console.log("Sayfa Yenilenmedi")
}

value = window.outerHeight // pencerenin yüksekliğini verir.
value = window.outerWidth // pencerenin genişliğini verir.
value = window.innerHeight // pencerenin iç yüksekliğini verir.
value = window.innerWidth // pencerenin iç genişliğini verir.
console.log(value)