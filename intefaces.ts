/*
//                  INTERFACES
*/

//Interfaces(parecidas com o type), sua diferença é que o type é utilizado mais para tipar objetos, as interfaces são um contrato para serem utilizados nas classes 

type robot = {
    id: number | string;
    name: string;
};

interface robot2{ //Diz que a classe deve ter os elementos abaixo
    readonly id: number | string;
    name: string;
    sayHello():string;
}

const bot1: robot = {
    id: 1,
    name: "Electro"
};

const bot2: robot2 = {
    id: '1',
    name: 'Rich',
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

class Pessoa implements robot2{
    id: string | number;
    name: string;
    constructor(id:string | number, name: string){
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return `Hello ${this.name}`
    }
}

const P = new Pessoa(1, 'Rich');
console.log(P.sayHello());