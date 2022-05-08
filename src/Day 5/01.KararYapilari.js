let username = "berkcan"
let password = "123456"
let isLoggedIn = true
if (isLoggedIn === true) {
    console.log("Uygulamaya Giriş Yapıldı")
}else{
    console.log("Merhaba")
}

if (username === "berkcan" && password === "123456") {
    console.log("Giriş Başarıyla Gerçekleşti")
} else {
    console.log("Giriş Başarısız")
}

if (username === "berkcan" ){
    if(password === "123456"){
        console.log("Giriş Başarıyla Gerçekleşti")
    }
    else{
        console.log("Şifre Yanlış")
    }
}

//yas >= 17 
//mezuniyet === "lise" ya da mezuniyet === "üniversite"
let mezuniyet = "üniversite"
let yas = 23
if(yas >= 18 && (mezuniyet === "lise" || mezuniyet === "üniversite")){
    console.log("Ehliyet alabilirsiniz")
}else{
    console.log("Ehliyet alamazsınız")
}

let process = 1
if (process === 1) {
    console.log("İşlem 1")
} else if(process === 2) {
    console.log("İşlem 2")
}else if(process === 3) {
    console.log("İşlem 3")
}else if(process === 4) {
    console.log("İşlem 4")
}else{
    console.log("Geçersiz İşlem")
}
// 2 yerine 3 eşittir kullanmak farkında olmadan yapabileceğiniz hataların önüne geçer.

/**
 if(kosul1){
    //kosul1 doğru ise çalışacak kodlar
 }else if(kosul2){
    //kosul2 doğru ise çalışacak kodlar
}else{
    //herhangi bir kosul doğru değil ise çalışacak kodlar
}
 */


// ternary operatör
// kosul ? doğru : yanlış
console.log(isLoggedIn ? "Giriş Yapıldı" : "Giriş Yapılmadı")