alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(`O número secreto é ${numeroSecreto}`);
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt('Escolha um númeor entre 1 e 10');

    if(chute == numeroSecreto) {
         break;
    } else{
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else{
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }  
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa} !`);  

// if(tentativas > 1) {
//     alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas !`);  
// } else{
//     alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa !`);  
// } 