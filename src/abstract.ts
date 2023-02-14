abstract class vehicle {
    abstract wheels: number

    start(): void {
        console.log('cekeskes!')
    }
}

class Car extends vehicle {
    wheels: number = 4
}

class Bike extends vehicle {
    wheels: number = 2
}

let car =  new Car()
console.log("wheels:", car.wheels)
car.start()

let bike = new Bike()
console.log("wheels:", bike.wheels)
bike.start()