console.log("Değişkenler")

let firstName = "Berkcan"
console.log(firstName)

var a = 10 //number veri tipi
console.log(a)
console.log(typeof a)

let b = 3.14 // number veri tipi
console.log(b)
console.log(typeof b)

var dogruMu = true
console.log(dogruMu)
console.log(typeof dogruMu)

let x = null
console.log(x)
console.log(typeof x)

var c
console.log(c)
console.log(typeof c)

let hobbies=['yazılım','kitap okumak','müzik dinlemek']
console.log(hobbies)
console.log(typeof hobbies)

let address={
    city:'Ankara',
    country:'Turkiye'
}
console.log(address)

const name = "Berkcan"
console.log(name)


const  numbers = [1,2,3,4,5,6]
numbers.push(7)
console.log(numbers)
/**
 Değişkenler
 * Türkçe karakter kullanılmaz.
 * Arada boşluk olmaz. Genellikle camelCase adlandırma yapılır.
 * Sayı ile başlayamaz.
 * 
 Primitive Veri Türleri
  * string => metinsel ifadelerdir. Tırnak içinde yazılır.
  * number => sayısal ifadelerdir.
  * boolean => true ve false değerlerini içerir.
  * null => ifadenin boş bir değer olduğunu gösterir.
  * undefined => ifadenin tanımlanmamış olduğunu gösterir.
  
 Referans Veri Türleri
 * array => dizilerdir.
 * object => Birden fazla değeri içerir.
 * function => fonksiyonları içerir.
 VAR LET VE CONST FARKLARI
 var 
 * Değişkenlerin değeri sonradan değiştirebilir.
 * Tekrar tanımlanabilir.
 * Var ile fonksiyon içinde tanımlanan değişkenlere fonksiyon dışından erişim sağlanamaz.
 let
 * Sonradan tekrar değiştirilebilir 
 * Aynı kapsam  içerisinde sadece bir sefer tanımlanabilir. 
 * Tekrar tanımlanmaya çalıştığında kod hata verir ve çalışmayı durdurur.
  const
  * Constant yani Sabit anlamını taşımaktadır .
  * Tanımlandıktan sonra değiştirilemez.
  * Dizilerde eklemeye izin verir.
*/
