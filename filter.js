const pessoas = [
    { nome: "Joao", idade: 17},
    { nome: "Maria", idade: 22},
    { nome: "Jose", idade: 19},
    { nome: "Ana", idade: 15},
];

const maioresDeIdade = 
pessoas.filter(pessoa => pessoa.idade >=18);

console.log("Pessoas maiores de idade: " , maioresDeIdade );