const name = "Berkcan Gümüşışık"
const department = "Computer Science"
const salary = "100000"

const a = `İsim ${name}\nDepartman:${department}\nMaaş:${salary}`

console.log(a)

const x = `İsim : ${name}`
console.log(x)
/*
const html = "<ul>" +
            "<li>İsim : " + name + "</li>" +   
            "<li>Departman : " + department + "</li>" +
            "<li>Maaş : " + salary + "</li>" +
            "</ul>"    
*/

const html = `
            <ul>
                <li>${name}</li>
                <li>${department}</li>
                <li>${salary}</li>
            </ul>        
            `
document.body.innerHTML = html 
/**
 * Template Literal ile stringleri daha kolay oluşturabiliriz.
 * `` ile stringleri ${} içerisinde javascript değişkenlerini kolaylıkla ekrana yazdırırız.
 */