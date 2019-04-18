 var mensagem = document.querySelector('.mensagem');


var botao = document.querySelector('.button');
botao.addEventListener('click', function (evento) {
    evento.preventDefault();
    var email = document.querySelector('#newsInputEmail')
    mensagem.textContent = 'O email ' + email.value + ' foi cadastrado com sucesso!'
}) 

var email = 0
if (email.value == "" || email.value.length == 0){
    mensagem.textContent = 'Digite um email'
} else if (email.value.indexOf('@')>=0 && email.value.indexOf('@')<=email.value.length-1) {
     mensagem.textContent = 'O email informado é inválido'
    } else {
         mensagem.textContent = 'O email' + email.value + ' foi cadastrado com sucesso'
}
