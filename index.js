//ex1
function onlyUnique(value, index, array) {
    return array.indexOf(value) === index
}

const a = [1, 2, 3, 1, 5, 4]
let unique = a.filter(onlyUnique)

console.log(unique)


//ex2
function findMatch(string, value) {
    for (let i = 1; i < string.length; i += 2) {
        if (string[i] === value) {
            return false
        } else (string[i] === !value)
        return true
    }
}

const string = ['str', 'str1', 'str2', 'str3', 'str4', 'str5']
let value = 'str1'
let result = findMatch(string, value)

console.log(result)

//ex3
function findElement(lista, valoare) {
    for (let i = 1; i < lista.length; i < 4) {
        if (lista[i] === valoare) {
            return false
        } else (lista[i] === !valoare)
        return true
    }
}

const lista = ['str', 'str1', 'str2', 'str3', 'str4', 'str5']
let valoare = 'str1'
let rezultat = findElement(lista, valoare)

console.log(rezultat)


//ex4
function removeObjects(jsObjects, elementRemove) {
    return jsObjects.filter(function(obj) {
        return JSON.stringify(obj) !== JSON.stringify(elementRemove)
    })
}

let jsObjects = [
    {
        name: 'Boris',
        age: 30
    },
    {
        name: 'Alex',
        age: 32
    },
    {
        name: 'Vasile',
        age: 31
    }]

let elementRemove = {
    name: 'Vasile',
    age: 31
}

let newList = removeObjects(jsObjects, elementRemove)
console.log(newList)

//ex5
function square(n) { 
    for (let i = 1; i <= n; i++) { 
        line += "*  "
    } 
    for (let j = 1; j <= n; j++) { 
        console.log(line)
    } 
} 

let line = ""
let size = 4 
square(size)


//ex 6
function areSame (arr1, arr2)
{
    let A = arr1.length
    let B = arr2.length

    if (A !=B)
    return false

    arr1.sort()
    arr2.sort()

    for(let i=0; i < B; i++)
    if (arr1[i] != arr2[i])
    return false

    return true
}

let arr1 = [1, 1, 1, 1, 1]
let arr2 = [1, 1, 2, 1, 1]

console.log(areSame(arr1, arr2))
