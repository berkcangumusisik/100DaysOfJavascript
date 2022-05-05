
// GET Methods
let simdi = new Date() // new Date() ile şu anki zamanı verir.
console.log(simdi)

let gun = simdi.getDate() // şu anki ayın gününü verir.
console.log(gun) 

let day = simdi.getDay() // şu anki günün haftadaki numarasını verir. 0 - pazar 6-cumartesi
console.log(day)

let year = simdi.getFullYear() // yıl bilgisini verir.
console.log(year)

let hour = simdi.getHours() //saat bilgisini verir.
console.log(hour)

//SET Methods 

let fiveYearsLater = new Date().setFullYear(2025) // şu anki zamanının yılını 2025 yapar.
console.log(fiveYearsLater)

let fiveMonthLater = simdi.setMonth(5) // şu anki zamanının ayını 5 yapar.
console.log(fiveMonthLater)

let dogumTarihi = new Date(1999,4,12) // 1999 yılında 12.04.1999 tarihini verir.
let yas = new Date().getFullYear() - dogumTarihi.getFullYear()
console.log("Yaşınız : ", yas)

let milisecond = simdi - dogumTarihi
let saniye = milisecond/100
let dakika = saniye / 60
let saat = dakika / 60
let date = saat / 24

console.log("Doğum gününüzden bugüne kadar " + date + " gün geçmiştir.")