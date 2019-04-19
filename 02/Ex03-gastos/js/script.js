//pesquisar = input, pesquisar # no querySelector
//# = é um id, uma coisa única, . = é uma classe
//console.log('Entrou')

//Coletar o elemento botao
var botao = document.querySelector('.transacao__button') //métedo BEM

// var corpo = document.querySelector('body')
//     corpo.style.backgroundColor = 'purple'
    
botao.addEventListener('click', function(evento){
    evento.preventDefault ();
    //inputs (elementos no DOM)
    var inputTransacao = document.getElementById('transacaoInputName');
    var inputValor = document.querySelector('#transacaoInputMoney');
    var inputData = document.getElementById('transacaoInputDate');
    
    //valores dos inputs 
    var valorTransacao = inputTransacao.value;
    var valorValor = inputValor.value;
    var valorData = inputData.value;
    
    var linha = document.createElement('tr');

    var colunaTransacao = document.createElement('td');
    colunaTransacao.textContent = valorTransacao
    linha.appendChild(colunaTransacao)

    var colunaValor = document.createElement('td');
    colunaValor.textContent = valorValor
    linha.appendChild(colunaValor)

    var colunaData = document.createElement('td');
    colunaData.textContent = valorData
    linha.appendChild(colunaData)

    var tabela = document.querySelector('.extrato__body');
    tabela.appendChild(linha)

    var corpo = document.querySelector('body')
    if (valorValor <10){ 
    corpo.style.backgroundColor = 'green';
    } else if (valorValor>10 && valorValor<50){
        corpo.style.backgroundColor = 'orange';
    }else if(valorValor>50){
        corpo.style.backgroundColor = 'red';
        //alert('Miga sua louca, vai devagar caraii'!)
    }
    document.querySelector('.transacao__form').reset();





    //console.log(valorTransacao)
    //console.log(valorValor)
    //console.log(valorData)

})