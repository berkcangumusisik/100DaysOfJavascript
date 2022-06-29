/**
 * Döngüler bizi kod kalabalığından kurtarır.
 For Döngüsü
 * For döngüsünü bitiş noktasını bildiğimiz durumlarda kullanırız. 
 for(başlangıç; koşul; artış miktarı){
    //Yapılacak işlemler
 }
 */
console.log("*********** For Döngüsü *************")
//ekrana 0'dan 10'a kadar sayıları yazdırınız.
for (let i = 0; i < 10; i++) {
    console.log(i)
}
//1'dan 10'a kadar olan sayıların toplamını ekrana yazdırınız.
let toplam = 0
for (let l = 0; l <= 10; l++) {    
    toplam += l
}
console.log("1'den 10'a kadar olan sayıların toplamı : " + toplam)

//For döngüsünün dizilerle kullanımı
let toplam2 = 0
let sayilar = [1,4,5,6,8,90,5]
for (let i = 0; i < sayilar.length; i++) {
    console.log(sayilar[i])
}

for (let sayi of sayilar){
    toplam2 += sayi
}
console.log("Sayılar dizisinin toplamı : " + toplam2)

let user ={
    "name" : "Berkcan Gümüşışık",
    "username": "berkcan",
    "password": 12345
}

for(let key in user){
    console.log(key)
    console.log(user[key])
}

//While Döngüsü
let i = 0
while (i < 10) {
    console.log(i)
    i++
}

//Do while
// fark : yukarıda ilk koşula bakar (while) sonra çıktı verir ama bunda sonda koşulu sorar sonra başa döndürür yani başta her zaman işletilir sonda false dönerse başa dönmez.
let a=0
do{
    console.log(a)
    a++
}while(a<10)