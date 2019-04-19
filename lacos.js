//adivinhe o número 

//Gerar numero aleátório entre 0 e 10
var numeroOculto = Math.round(Math.random()*10)

var acertou = false;

while (acertou == false){
    var chute = parseInt(prompt('Tente adivinhar o número'))
    
    if(chute == numeroOculto){
        acertou = true
        alert('Parabéns, você acertou!')
    } 
}
var numero = 0
while (numero<=10){
    console .log(numero)
    numero -- //numero = numero +1 (incremetar)

    var numero = 0
while (numero<=0){
    console .log(numero)
    numero -- //numero = numero -1 (decrementar)

}
