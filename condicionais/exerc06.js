const leia=require("readline-sync");
let nome, codigo,salario,nsalrio;

nome=leia.question("Nome do colaborador(a): ");
codigo=leia.questionInt("Codigo do cargo do colaborador(a): ");
salario=leia.questionFloat("Salario do colaborador(a):R$ ");

switch(codigo){
    case 1:
        nsalario=(salario*110)/100
        console.log(`O colaborador(a) ${nome} é gerente e o seu novo salário é R$ ${nsalario}`);
        break;
    case 2:
        nsalario=(salario*107)/100
        console.log(`O colaborador(a) ${nome} é gerente e o seu novo salário é R$ ${nsalario}`);
        break;
    case 3:
        nsalario=(salario*109)/100
        console.log(`O colaborador(a) ${nome} é gerente e o seu novo salário é R$ ${nsalario}`);
        break;
    case 4:
        nsalario=(salario*106)/100
        console.log(`O colaborador(a) ${nome} é gerente e o seu novo salário é R$ ${nsalario}`);
        break;
    case 5:
        nsalario=(salario*105)/100
        console.log(`O colaborador(a) ${nome} é gerente e o seu novo salário é R$ ${nsalario}`);
        break;
    case 6:
        nsalario=(salario*108)/100
        console.log(`O colaborador(a) ${nome} é gerente e o seu novo salário é R$ ${nsalario}`);
        break;
    default:
    console.log("Opção invalida!!");
    break;

}