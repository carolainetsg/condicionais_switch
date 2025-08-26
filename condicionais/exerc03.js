const leia= require("readline-sync");
let nome, idade, doacao, aptodoar;
nome=leia.question("Nome do doador: ");
idade=leia.questionInt("Idade do doador: ");
doacao=leia.keyInYN("Já doou outras vezes?");

if(idade>=18 && idade<=59){
     if(idade>=60 && idade<=69){
         if(doacao){
        aptodoar=true;
         }
        }else {
            aptodoar=false;
        }
    }
    if(aptodoar=true){
    console.log(`O ${nome} está apto para doar sangue!`);
}else{
    console.log(`O ${nome} não está apto para doar sangue!`);
}
//
//if(idade>=60 && idade<=69){
  //  doacao=leia.keyInYN("Primeira vez doando?");
    //doacao="n";
    //console.log(`O ${nome} está apto para doar sangue!`);
//}
//else{
  //  doacao="y";
    //console.log(`O ${nome} não está apto para doar sangue!`)
//}
