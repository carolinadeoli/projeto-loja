
(function(){
    'use strict';
    
    var $txtNome = document.getElementById('txtnome');
    var $txtSobrenome =document.getElementById('txtsobrenome')
    var $txtEmail = document.getElementById('txtemail');
    var $txtMsg = document.getElementById('msg');
    var $btn = document.getElementById('btn');

    $btn.addEventListener('click', function(){
        if($txtNome.value ===""|| $txtSobrenome.value==="" || $txtEmail.value==="" || $txtMsg.value===""){
            alert('Preencha todos os campos!');
        } else{
            alert('Formulário Enviado!')
        }
        
    })

    var $txtMsg = document.getElementById('msg');
    var $restaContainer = document.getElementById('restaContainer');
    var $resta = document.getElementById('resta');
    var maxima = $txtMsg.maxLength;

    function mostrarContainerResta(){
        $restaContainer.style.display = 'block';
    }
    mostrarContainerResta();
    showCaractersLeft(maxima);
    
    $txtMsg.addEventListener('input', checkLength)

    function checkLength(){
        var numeroLetrasDigitadas = this.value.length;
        var caracteresRestantes = maxima - numeroLetrasDigitadas;
        showCaractersLeft(caracteresRestantes);
    } 
    
    function showCaractersLeft(n){
        $resta.textContent = n;
    }

    
})()