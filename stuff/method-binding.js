class Human {
    constructor(name) {
        this.name = name
    }

    salute(name) {
        return `${this.name}: Hello, ${name}!`
    }
}

var peter = new Human('Peter')

//peter.salute('Anna')

var salute = peter.salute//.bind(peter)

salute('Anna')