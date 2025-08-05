let listaDeNumerosSorteados = []
let numeroMaximo = 3
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        if(listaDeNumerosSorteados.length == numeroMaximo){
            listaDeNumerosSorteados = []
            return gerarNumeroAleatorio()
        }
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
mensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        let tentativas = tentativa > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto com ${tentativa} ${tentativas}!`;

        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativa++;
        limparCampo();
    };
}

function reiniciarJogo(){
    limparCampo();
    mensagemInicial();
    tentativa = 1;
    numeroSecreto = gerarNumeroAleatorio();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}












