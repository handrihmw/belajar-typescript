interface Laptop {
    name: string
    on(): void
    off(): void
}

class Asus implements Laptop {
    name: string
    isGamer: boolean

    constructor(name: string, isGamer: boolean) {
        this.name = name
        this.isGamer = isGamer
    }

    on(): void {
        console.log("Laptop Menyala")
    }
    off(): void {
        console.log("Laptop Mati")
    }
}

class Macbook implements Laptop {
    name: string
    isDeveloper: boolean

    constructor(name: string, isDeveloper: boolean) {
        this.name = name
        this.isDeveloper = isDeveloper
    }

    on(): void {
        console.log("Macbook Menyala")
    }
    off(): void {
        console.log("Macbook Mati")
    }

}

let asus = new Asus('Asus', true)
console.log(asus.on())
console.log(asus.off())

let macbook = new Macbook('Macbook Pro', true)
console.log(macbook.on())
console.log(macbook.off())