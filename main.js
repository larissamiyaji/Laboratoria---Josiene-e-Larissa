var name = prompt("Digite seu nome:");

var saudacao = document.getElementById('saudacao');
saudacao.innerHTML="Olá, " + name;

var play = prompt("Coloque o número correspondente a sua resposta. \nQuer iniciar o jogo?:\n 1.Sim\n 2.Não");

if(play==2){
  var endgame = document.getElementById('endgame');
endgame.innerHTML="Jogo finalizado";
}
else{
  if(play==1){
    var answer1 = prompt("1 - Qual a cor do céu?\n1. Azul\n2. Verde\n3. Vermelho")
    //Perunta1
    if( answer1==1){
      var pergunta1 = document.getElementById('respostacorreta1');
      pergunta1.innerHTML="Pergunta 1: Azul";
    }
    else {
      var pergunta1 = document.getElementById('respostaincorreta1');
      pergunta1.innerHTML="Pergunta 1: Azul";
    }
    //Pergunta2
    var answer2 = prompt("2 - Quanto é 1+1?\n1. 23456789\n2. a\n3. 2");
    if(answer2==3){
      var pergunta2 = document.getElementById('respostacorreta2');
      pergunta2.innerHTML="Pergunta 2: 2";
    }
    else {
      var pergunta2 = document.getElementById('respostaincorreta2');
      pergunta2.innerHTML="Pergunta 2: 2";
    }
    //Pergunta 3
    var answer3 = prompt("Qual a capital do Brasil?\n1. São Paulo\n2. Brasília\n3. Rio de Janeiro")
    if(answer3==2){
      var pergunta3 = document.getElementById('respostacorreta3');
      pergunta3.innerHTML="Pergunta 3: Brasília";
    }
    else {
      var pergunta3 = document.getElementById('respostaincorreta3');
      pergunta3.innerHTML="Pergunta 3: Brasília";
    }



    var results1 = document.getElementById('results');
    results1.innerHTML="Resultados";
  }
}
