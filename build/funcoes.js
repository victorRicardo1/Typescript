"use strict";
//                  FUNÇOES
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(5, 5);
console.log(soma);
//Funções multi tipos
function callToPhone(phone) {
    return phone;
}
//funções async
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Richard";
    });
}
