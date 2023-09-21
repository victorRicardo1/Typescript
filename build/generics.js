"use strict";
//Generics
//Como os remedios genéricos, não é aquele especifico que voce quer mais é um generico que vai ser parecido
function concatArray(...itens) {
    //... é o operador spread que significa que aceita diversos itens
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
console.log(numArray);
const stringArray = concatArray(['1', '4'], ['Goku']);
console.log(stringArray);
