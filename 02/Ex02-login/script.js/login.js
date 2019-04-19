var mensagem = document.querySelector('.mensagem');

var botao = document.querySelector('.button');
botao.addEventListener('click', function (evento) {
    evento.preventDefault();
    var email = document.querySelec('loginInputEmail')
    var senha = document.querySelector('loginInputPassword')
    mensagem.textContent = 'O email ' + email.value + ' foi cadastrado com sucesso!'
}) 
if (email.value == "" || email.value.length == 0){
    mensagem.textContent = 'Digite um email válido'
    email.focus()
    return

} else if (email.value.indexOf('@')>=0 && email.value.indexOf('@')<=email.value.length-1) {
     mensagem.textContent = 'O email informado é inválido'
     return
     else if (senha.value == "" || senha.value.length < 6 ){
         mensagem.textContent = 'A senha informada é inválida '
     }
     
     
     
     //else {
       //  mensagem.textContent = 'O email' + email.value + ' foi cadastrado com sucesso'
//}
 