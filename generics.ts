//Generics

//Como os remedios genéricos, não é aquele especifico que voce quer mais é um generico que vai ser parecido


//Precisamos e podemos passar pelo parametro qual tipo a função vai retornar, ja que as variáveis criadas pegandoa função estarão como any usando <> apos o nome da função e um nome para o parametro do tipo

function concatArray<T>(...itens: T[]):T[]{
    //... é o operador spread que significa que aceita diversos itens
    return new Array().concat(...itens) 
}

const numArray = concatArray<number[]>([1, 5], [3]);
console.log(numArray);
const stringArray = concatArray<string[]>(['1', '4'], ['Goku'])
console.log(stringArray);

