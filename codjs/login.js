(function(){
    'use strict';
    var $txtUser = document.getElementById('txtUser');
    var $txtPass = document.getElementById('txtPass');
    var $txtPassConf = document.getElementById('txtPassConf')
    var $txtEmail = document.getElementById('txtEmail');
    var $btn = document.getElementById('btn');

    $btn.addEventListener('click', function(){
        if($txtUser.value ===""|| $txtPass.value==="" || $txtPassConf.value==="" || $txtEmail.value===""){
            alert('Preencha seu nome de Usuário, Senha e E-mail');
        } else{
            alert('Formulário Enviado!')
        }
        
    })

})()