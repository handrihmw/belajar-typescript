class List<T> {
    private data: T[]

    constructor(...elements: T[]) {
        this.data = elements
    }

    add(element: T): void {
        this.data.push(element)
    }

    addMultiple(...elements: T[]): void {
        this.data.push(...elements)
    }

    getAll(): T[] {
        return this.data
    }
}

let numbers = new List<Number>(1, 2, 3)
numbers.add(4)
numbers.addMultiple(5, 6)
console.log(numbers.getAll())

let random = new List<Number | string | boolean>(1, "hallo", true)
random.add(4)
random.addMultiple(5, "world")
console.log(random.getAll())