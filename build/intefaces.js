"use strict";
/*
//                  INTERFACES
*/
const bot1 = {
    id: 1,
    name: "Electro"
};
const bot2 = {
    id: '1',
    name: 'Rich',
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
}
const P = new Pessoa(1, 'Rich');
console.log(P.sayHello());
