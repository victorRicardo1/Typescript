//DECORATORS

//Quando decoramos uma função para que a gente dispare alguma outra ação ou injete alguma outra coisa

function displayName(target: any){
    console.log(target);
}


//Gatilho da função acima da classe pra ela decorar
@displayName
class Funcionario{}

//ou seja decoramos um metodo e colocamos um gatilho pra executar esta função