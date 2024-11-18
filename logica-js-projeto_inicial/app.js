alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(`O número secreto é ${numeroSecreto}`);
let chute;

while(chute != numeroSecreto){
    chute = prompt('Escolha um númeor entre 1 e 10');

    if(chute == numeroSecreto) {
        alert(`Você acertou o número secreto ${numeroSecreto} !`);   
    } else{
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else{
            alert(`O número secreto é maior que ${chute}`);
        }
    }
           
}

