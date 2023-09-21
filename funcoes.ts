//                  FUNÇOES

function addNumber(x:number, y:number): number{
    return x+y;
}

let soma: number = addNumber(5, 5);

console.log(soma);

//Funções multi tipos

function callToPhone(phone: number | string): number|string{
    return phone;
}

//funções async

async function getDatabase(id: number): Promise<string>{
    return "Richard";
}
