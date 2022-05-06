// Karşılaştırma Operatörleri
/**
 * !=  Eşit değil mi?
 * !== Eşit değil mi? (Tip kontrolü de yapılır)
 * >=  Büyük eşit mi? 
 * <=  Küçük eşit mi?
 * >   Büyük mü?
 * <   Küçük mü?
 * ==  Eşit mi?
 * === Eşit mi? (Tip kontrolü de yapılır)
 
 */

console.log(2 == 2)
console.log("js" == "java")
console.log(2 == "2")
console.log(2 === "2")
console.log(2 > 4)
console.log(2 < 4)
console.log(2 != 4)
console.log(2 >= 2)
console.log(2 <= 4)

// Logical Operators
/**
 * &&  ve operatörü (AND)  true && true = true diğer durumlarda false
 * ||  veya operatörü (OR)  false || false = false diğer durumlarda true
 * !  not operatörü (NOT)  !true = false
 */

console.log((2 == 2) && ("Ahmet" == "Ahmet"))
console.log((4 == 2) && ("Ahmet" == "Ahmet"))
console.log((2 == 2) || ("Ahmet" == "Ahmet"))
console.log((4 == 2) || ("Ahmet" == "Ahmet"))
console.log(!(2 == 2))