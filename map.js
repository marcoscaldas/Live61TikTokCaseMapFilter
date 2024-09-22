const carrinho = [
    { nome:'Camisa', preco: 30, quantidade: 2},
    { nome:'Calca',  preco: 35, quantidade: 1},
    { nome:'Bone',   preco: 20, quantidade: 3}
 ];

const totais = carrinho.map( item => ({
      nome: item.nome, 
      total: item.preco * item.quantidade  }) 
);
console.log(totais);


// COM FUNCAO CONVENCIONAL

const carrinho2 = [
      { nome:'Camisa', preco: 30, quantidade: 2},
      { nome:'Calca',  preco: 35, quantidade: 1},
      { nome:'Bone',   preco: 20, quantidade: 3}
   ];
  
  const totais2 = carrinho.map( function (item){
        return {
        nome: item.nome, 
        total: item.preco * item.quantidade  }}
  );
  console.log(totais2);