import ItfLaptop from "./ItfLaptop"
import * as Keyboard from "./Keyboard"
import { world } from "./Keyboard"

abstract class BaseLaptop<T> implements ItfLaptop<T> {
    name: string
    type: T
    withNumeric: boolean
    withTouchButton: boolean

    constructor(
        name: string,
        type: T,
        numeric: boolean,
        touchButton: boolean
    ) {
        this.name = name
        this.type = type
        this.withNumeric = numeric
        this.withTouchButton = touchButton
    }

    hello() {
        console.log(Keyboard.hello())
    }

    world() {
        console.log(world())
    }
}

export default BaseLaptop