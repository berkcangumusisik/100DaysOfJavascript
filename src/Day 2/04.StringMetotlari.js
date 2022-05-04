const firstName = "Louis";
const lastName = "Armstrong";
const langs = "Java, Python, JavaScript, C++ "

let fullName = firstName + " " + lastName
console.log(fullName)

name = "Berkcan "
name += "Gümüşışık"
console.log(name)

console.log(firstName.length) //String değerinin uzunluğunu verir.

console.log(firstName.concat(" ", lastName, " ")) //.concat() metodu ile stringleri birleştirir.

console.log(firstName.toLowerCase()) //toLowerCase() metodu ile stringin tüm harflerini küçük harfe çevirir.

console.log(firstName.toUpperCase()) //toUpperCase() metodu ile stringin tüm harflerini büyük harfe çevirir.

console.log(firstName[0])
console.log(firstName[2])
console.log(firstName[firstName.length - 1])

console.log(firstName.indexOf("L")) //indexOf() metodu ile stringin içinde aranan karakterin indexini verir. Eğer yoksa -1 verir.

console.log(firstName.charAt(0)) //.charAt() metoduyla aranan indexteki karakteri verir.

console.log(firstName.charAt(firstName.length - 1))

langs.split(",")
console.length(langs) //.split() metodu ile belirtilen karakterlere göre stringi parçalar.

langs.replace("Python","Flutter")
console.log(langs) //.replace() metodu ile belirtilen karakterleri değiştirir.

console.log(langs.includes("Java")) //.includes() metodu ile belirtilen karakterin stringin içinde olup olmadığını kontrol eder.