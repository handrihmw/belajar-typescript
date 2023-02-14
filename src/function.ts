// function

function getName(): string {
    return "Nama Saya Handri Hermawan"
}

console.log(getName())

function getAge(): number {
    return 27
}

console.log(getAge())

function printName(): void {
    console.log("Tanpa Return")
}

printName()

// arguments types
function multiply (value1: number, value2: number): number {
    return value1 * value2
}

const resultMultiply = multiply(13, 6)

console.log(resultMultiply)

// function as type
type Age = number
let age: Age = 27

console.log("Umur:", age)

type addFunc = (value1: number, value2: number) => number
const add: addFunc = (value1: number, value2: number): number => {
    return value1 + value2
}

const resultAdd = add(19, 95)
console.log(resultAdd)

// default parameter
let nameFull = (first: string, last: string = 'Cool!'): string => {
    return first + " " + last
}

console.log(nameFull("Handri", "Hermawan"))

// optional parameter

const getStatus = (status1: string, status2 ?: string): string => {
    return status1 + " " + status2
}

console.log(getStatus("Belum"))

const getNumber = (num1: number, num2: number): number => {
    return num1 + num2
}

console.log(getNumber(6, 9))