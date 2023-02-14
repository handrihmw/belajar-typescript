import Asus from "./Asus"
import Macbook from "./Macbook"

let asus = new Asus("Zenbook", true, true)
console.log(asus)
asus.hello()

let macbook = new Macbook(2022, true, false)
console.log(macbook)
macbook.world()