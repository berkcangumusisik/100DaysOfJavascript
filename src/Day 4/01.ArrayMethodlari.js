let numbers = [43,56,33,23,44,35,5]
console.log(numbers.toString()) // dizi elemanlarını stringe çevirir.
console.log(numbers.join("-")) // dizi elemanlarının arasına - karakteri ekler.

numbers.pop() //.pop() dizinin son elemanını siler.
console.log(numbers)

numbers.shift() //.shift() dizinin ilk elemanını siler.
console.log(numbers)

numbers.push(100) //.push() dizinin sonuna eleman ekler.
console.log(numbers)

numbers.unshift(60) //.unshift() dizinin başına eleman ekler.
console.log(numbers)

let numbers2 = [1,2,3,4,5,6,7,8,9,10]
console.log(numbers.concat(numbers2)) //.concat() iki dizi arasına eleman ekler.
numbers2.splice(3,0,15) //.splice() diziden elemanları kaldırır, değiştirir ya da çıkanın yerine ekler.
console.log(numbers2)

console.log(numbers2.reverse()) //.reverse() diziyi tersine çevirir.

