class User{
    fullName: string
    firstName: string
    lastName: string
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = firstName + ' ' + lastName
    }
}

interface Person {
    firstName: string
    lastName: string
}

function getName(person: Person){
    return 'Hello ' + person.firstName + ' ' + person.lastName
}

let user = new User('liu', 'huan')

console.log(getName(user))