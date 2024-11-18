let numeroSecreto = 5;
console.log(`O número secreto é ${numeroSecreto}`);
alert('Boas vindas ao jogo do número secreto');
let chute = prompt('Escolha um númeor entre 1 e 10');

if(chute == numeroSecreto) {
    alert(`Você acertou o número secreto ${numeroSecreto} !`);   
} else{
    alert('Você errou');
}