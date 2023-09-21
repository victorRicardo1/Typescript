//Estudos typescript

//tsc (arquivo.ts)

//tipos primitivos: number, boolean, string
let ligado:boolean = true;
let num:number = 5;
let altura: number = 1.70;
let word:string = "Hello";

//tipos especiais: null, undefined
let nulo:null = null;
let undef: undefined = undefined;

//tipos abrangentes: any, void
let qualquer: any = [5, '', true, null, undefined];
let vazio:void;

//objeto sem previsibilidade

let produto: object = {
    name: "Richard",
    cidade: 'Ma',
    idade: 19,
    vivo: true
};

//objeto tipado com previsibilidade

type produtoLoja = {
    nome:string;
    preco:number;
    unidade:number;
};

let meuProduto: produtoLoja = {
    nome: 'Mesa',
    preco: 50.99,
    unidade: 102
};
