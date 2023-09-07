(function(){
    'use strict';
    
    var $txtNome = document.getElementById('txtnome');
    var $txtSobrenome =document.getElementById('txtsobrenome')
    var $txtEnd = document.getElementById('txtend');
    var $txtExp= document.getElementById('txtexp');
    var $txtCursos = document.getElementById('txtcursos');
    var $txtRedes = document.getElementById('txtredes');

    var $btn = document.getElementById('btn');

    $btn.addEventListener('click', function(){
        if($txtNome.value ===""||$txtSobrenome.value==="" ||$txtEnd.value==="" ||$txtExp.value==="" ||$txtCursos.value==="" ||$txtRedes.value===""){
            alert('Preencha todos os campos!');
        } else{
            alert('Formulário Enviado!')
        }
        
    })
   
})()