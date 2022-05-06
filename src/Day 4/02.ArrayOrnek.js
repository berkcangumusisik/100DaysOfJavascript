// 1- "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.
let meyveler = ["Elma","Armut","Muz","Çilek"]
// 2- Dizi kaç elemanlıdır?
console.log(meyveler.length)
// 3- Dizinin ilk ve son elemanı nedir?
console.log(meyveler[0])
console.log(meyveler[meyveler.length-1])
// 4- Elma dizinin bir elemanımıdır?
console.log(meyveler.includes("Elma"))
// 5- Kiraz meyvesini listenin sonuna ekleyiniz.
meyveler[meyveler.length] = "Kiraz";
// 6- Dizinin son 2 elemanını siliniz.
meyveler.splice(meyveler.length-2,2);
console.log(meyveler);

