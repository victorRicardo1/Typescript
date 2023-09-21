//arrays

let dados: string[] = ['opa', 'ola', 'mundo'];
let dados2: Array<string> = ['hello', 'world'];

//array de multi tipos

let infos:(string | number)[] = ['ola', 5];


//tuplas: vetores multitypes que temos locais certos pra cada coisa, precisa seguir a ordem de definição

let boleto:[string, number, number] = ['agua conta', 500, 913];

//datas

let aniversario:Date = new Date("2023-09-01 05:00");
console.log(aniversario.toString()); //pega o horario