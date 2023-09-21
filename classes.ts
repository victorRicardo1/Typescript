//Classes

//Uma classe é uma forma para reaproveitarmos e criarmos algo nela


//data modifiers
//public: podem ser acessados
//private: Não pode ser acessado fora da classe
//protected: So pode ser enxergado dentro da classe e de subclasses que herdam esta classe
//DATA MODIFIERS TAMBÉM SÃO APLICAVEIS EM MÉTODOS


class Character {
    private name: string; //podemos colocar como opcional utilizando ? antes de :
    strength: number;
    skill: number;
    weapon: string;

    constructor(name:string, strength: number, skill:number, weapon:string){
        this.name = name;
        this.strength = strength;
        this.skill = skill;
        this.weapon = weapon;
    }
    
    attack():void{
        console.log(`Attack with ${this.strength} using ${this.weapon}`);
    }
}

const p1 = new Character('Gabriel Belmont', 20, 90, "Vampire Killer");
console.log(p1);
p1.attack();

//  SUBCLASSES

class Magician extends Character{
    magicPoints:number;
    constructor(name:string, strength: number, skill: number, weapon: string, magicPoints:number){
        super(name, strength, skill, weapon);
        this.magicPoints = magicPoints;
    }
}

const p2 = new Magician('Trevor Belmont', 30, 88, 'vampire killer', 120);
console.log(p2);
p2.attack();
