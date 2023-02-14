export class User {
    public name: string

    constructor(name: string) {
        this.name = name
    }
}

let user = new User("Handri Hermawan")
console.log(user.name)

// other way
export class Person {
    constructor(public name: string) {
    }
}

let person = new Person("Hermawan Handri")
console.log(person.name)

// other way
export class Man {
    public name: string

    constructor(name: string, public age: number) {
        this.name = name
    }
}

let man = new Man("Hermawan", 27)
console.log(man)

// inheritance
export class People {
    name: string

    constructor (name: string, public age: number) {
        this.name = name
    }

    setName(value: string): void {
        this.name = value
    }

    getName = () => {
        return this.name
    }
}

class Admin extends People {
    read: boolean = true
    write: boolean = true
    phone: string
    private _email: string = ''
    // static property
    static getRoleName: string = 'Admin'

    constructor(phone: string, name: string, age: number ) {
        super(name, age)
        this.phone = phone
    }

    // static property
    static getRoleNames() {
        return "Hallo Admin"
    }

    getRole(): { read: boolean, write: boolean } {
        return {
            read: this.read,
            write: this.write
        }
    }

    set email(value: string) {
        if (value.length < 5) {
            this._email = 'Email Salah'
        } else {
            this._email = value
        }
    }

    get email(): string {
        return this._email
    }
}

let admin = new Admin('087750500441', 'Almas', 25)
admin.email = 'handri@gmail.com'

console.log(admin.getName)
console.log(admin.getRole)
console.log(admin.setName('Aqmarina'))
console.log(admin.phone)
console.log(admin.email)

// static property
let adminStatics = Admin.getRoleNames()
console.log(adminStatics)

let adminStatic = Admin.getRoleName
console.log(adminStatic)