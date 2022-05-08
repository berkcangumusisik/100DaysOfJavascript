// Bir sayının 10 ile 50 arasında olduğunu kontrol eden bir kontrol yazınız.
let number = 40
if (number > 10 || number > 50) {
    console.log("Sayı 10 ile 50 arasındadır")
} else {
    console.log("Geçersiz aralık")
}

// Bir sayının pozitif tek sayı olup olmadığını kontrol eden bir kontrol yazınız.
let number2 = -10
if (number2 > 0) {
    if (number2 % 2 === 1) {
        console.log("Pozitif tek sayıdır")
    }
    else{
        console.log("Pozitif çift sayıdır")
    }
}
else{
    console.log("Negatif sayıdır")
}


// x, y ve z sayılarının büyüklüğünü kontrol eden bir kontrol yazınız.
let x = 60
let y = 40
let z = 30
if (x > y && x > z) {
    console.log("x en büyük sayıdır.")
}else if(y > x && y > z){
    console.log("y en büyük sayıdır.")
}else if(z > x && z > y){
    console.log("z en büyük sayıdır.")
}else{
    console.log("x, y ve z sayıları eşittir.")
}

/**
 * 2 vize(%40) ve 1 final(%60) notunu alan bir öğrencinin ortalaması için:
 * not ortalaması 50 ve üzeri ise geçti değilse kaldı.
 * not ortalaması 50 ve üstü olsa bile final notu en az 50 olmalıdır.
 * Finalden 70 alındığında ortalama 50 altında olsa bile geçti.
 */
let vize1 = 100
let vize2 = 100
let final = 70
let ortalama = (((vize1 + vize2) / 2) * 0.4) + (final * 0.6)
if (ortalama >= 50) {
    if (final >= 50) {
        console.log("Geçti")
    }else{
        console.log("Kaldı")
    }
}else if (ortalama < 50){
    if(final >= 70){
        console.log("Geçti")
    }else{
        console.log("Kaldı")
    }

}