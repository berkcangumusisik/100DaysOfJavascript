/** 
 Fonksiyonlar
 * function functionName(varsa parametreler) {}
*/

function merhaba() {
    console.log("Merhaba")
}

merhaba()

//Parametreli fonksiyon
function yasHesapla(dogumYili){
    console.log(new Date().getFullYear() - dogumYili)
}

yasHesapla(1999)
yasHesapla(2001)

//Fonksiyonlara değer atama
function merhaba2(yas = 23, isim ="Berkcan"){
    console.log(`Merhaba ${isim}. Yaşınız:  ${yas}`)
}
merhaba2()
merhaba2(25)

function square(x){
    return x * x
}

function cube(x){
    return x * x * x
}
let a = square(12)

console.log(a)
console.log(cube(2))

//Fonksiyonların return kullanırsak farklı fonksiyonlardan çağırılabilir.

/*Function Expression*/
const merhaba3 = function(name){
    console.log("Merhaba", name)
}

merhaba3("Berkcan")

function yasHesapla(dogumYili) {
    return new Date().getFullYear() - dogumYili;
}

let yasAhmet = yasHesapla(1985);
let yasAyse = yasHesapla(1987);

console.log(yasAhmet, yasAyse);

function emekliligeKacYilKaldi(dogumYili, isim) {
    let yas = yasHesapla(dogumYili);
    let kalan_sene = 65 - yas;

    if (kalan_sene > 0) {
        console.log(`${isim}, emekli olmanıza ${kalan_sene} yıl kaldı.`);
    } else {
        console.log("zaten emekli oldunuz.");
    }
}

emekliligeKacYilKaldi(1980, "Ali");
emekliligeKacYilKaldi(1950, "Ayşe");

/**
 * Immediately Invoked Function Expression (IIFE)
 * Tanımlandığı yerde çalışan bir fonksiyon çeşididir.
 */

(function(name){
    console.log("Merhaba", name)
})("Berkcan")

const database ={
    host: "localhost",
    add:function(){
        console.log("Eklendi.")
    },
    get:function(){
        console.log("Elde edildi.")
    },
    update:function(id){
        console.log("Id:",id," Güncellendi.")
    },
    delete:function(id){
        console.log("Id:",id," silindi.")
    }
}

console.log(database.host)
database.add()
database.get()
database.update(1)
database.delete(1)