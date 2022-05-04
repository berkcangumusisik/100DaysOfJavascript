// Number veri tipinden String'e Çevirme
let number1 = String(10)
console.log(number1)
console.log(typeof number1)

let number2 = (10).toString()
console.log(number2)
console.log(typeof number2)


// String veri tipinden Number'a Çevirme
let string1 = Number('10')
console.log(string1)
console.log(typeof string1)

let string2 = parseFloat("3.14")
console.log(string2)
console.log(typeof string2)

let string3 = parseInt("3")
console.log(string3)
console.log(typeof string3)

//String ve integer toplanırsa sonuç string olur.
const hello = "Hello " + 34
console.log(hello)
console.log(typeof hello )

const a = Number("34") + 53
console.log(a)
console.log(typeof a)
/**
 * parseFloat => string ifadeyi ondalıklı sayıya çevirir. 
 * parseInt => string ifadeyi tam sayıya çevirir. 
 * */