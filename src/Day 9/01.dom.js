/**
 * Document Object Model
 * Html etikletleri bir araya gelerek bir ağaç yapısı oluşturur.
 * Elementlere JS ile erişebiliriz ve onları değiştirebiliriz.
 */

let value 
value = document // Html sayfasının tüm etiketlerini verir.
value = document.all // Html sayfasındaki etiketlerin detaylı bilgilerini verir.
value = document.all.length // Html sayfasındaki etiketlerin sayısını verir.
value = document.all[2] // Html sayfasındaki üçüncü etiketi verir.
console.log(value)

const element = document.all
for(let i = 0; i < element.length; i++){
    console.log(element[i])
}
/**
 element.forEach(function(element){
    console.log(element)
})
 */
// Html sayfasındaki elementlere erişmek yalnızca for döngüsü ile mümkündür. forEach döngüsü ile erişilemez. Ancak aşağıdaki gibi erişilebilir.

let dizi = Array.from(element)
dizi.forEach(function(element){
    console.log(element)
})

let value2 = document.body // Html sayfasındaki body etiketini verir.
value2 = document.head // Html sayfasındaki head etiketini verir.
value2 = document.location // Html sayfasının adresini verir.
value2 = document.location.hostname // Html sayfasının adresinin domain adını verir.
value2 = document.location.port // Html sayfasının adresinin port numarasını verir.
value2 = document.URL // Html sayfasının adresini verir.
value2 = document.characterSet // Html sayfasının karakter setini verir.
value2 = document.links // Html sayfasındaki tüm linkleri verir.
console.log(value2)