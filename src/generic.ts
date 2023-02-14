function getData(value: any) {
    return value
}

console.log(getData("String").length)
console.log(getData(123).length)

// generic
function getAll<T>(value: T) {
    return value
}

console.log(getAll("String").length)
// console.log(getAll(123).length)

// arrow function
const getArr = <T>(value: T) => {
    return value
}

console.log(getArr("Arrow Function").length)
// console.log(getArr(234).length)