// Scope(Kapsam) Kavramı

// Global Scope : Bir dosyaya JavaScript kodu yazmaya başladığımızda Global kapsamındayız demektir.
var value1 = 10
let value2 = 20
const value3 = 30
console.log(value1, value2, value3)
// Function Scope : Bir fonksiyonun kapsamıdır.
function Func(){
    var value1 = 10
    let value2 = 20
    const value3 = 30
    console.log(value1, value2, value3)
}
Func()
// Block Scope : Bir ifadedeki kapsamıdır.

if(true){
    var a = 10
    let b = 20
    const c = 30
    console.log(a, b, c)
}
console.log(a)
// console.log(b)
// console.log(c)