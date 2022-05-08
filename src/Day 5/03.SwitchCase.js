// çoğu zaman if ve else ile yaptığımız şeyleri switch ile de yapabiliriz. Koşul çok fazlaysa switch clean code için seçilmeli

let day;

switch (new Date().getDay()){
    case 0:
        day = "pazar"
    break;
    case 1:
        day ="pazartesi"
    break;
    case 2:
        day ="salı"
    break;
    case 3:
        day ="çarşamba"
    break;
    case 4:
        day ="perşembe"
    break;
    case 5:
        day ="cuma"
    break;
    case 6:
        day ="cumartesi"
    break;
}
console.log(`Bugun ${day}`)


let month
switch (new Date().getMonth()) {
    case 0:
        console.log("Ocak")
        break;
    case 1:
        console.log("Şubat")
        break;
    case 2:
        console.log("Mart")
        break;
    case 3:
        console.log("Nisan")
        break;
    case 4:
        console.log("Mayıs")
        break;
    case 5:
        console.log("Haziran")
        break;
    case 6:
        console.log("Temmuz")
        break;
    case 7:
        console.log("Ağustos")
        break;
    case 8:
        console.log("Eylül")
        break;
    case 9:
        console.log("Ekim")
        break;
    case 10:
        console.log("Kasım")
        break;
    case 11:
        console.log("Aralık")
        break;
    default:
        console.log("Geçersiz Değer Girildi")
        break;
}


/**
  switch(koşul){
      case 1:
        case 1 doğruysa çalışacak kodlar
      break;
      default:
        case 1 doğru değilse çalışacak kodlar
      break;
    }
 */

