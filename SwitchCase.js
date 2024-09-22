let dia = 1;

let horario = 17;

switch(dia){

    case 1: 
        console.log('Segunda-feira');
    break;

    case 2: 
        console.log('Terça-feira');
    break;

    case 3: 
        console.log('Quarta-feira');

    if(horario >= 18){
        console.log('Hora de ir para casa');

    }else{
        console.log('Ainda é hora de trabalhar');
    }
    break;

    default:
         console.log('Dia desconhecido');
    break;

}