<?php

if (isset($_POST['email']) && !empty($_POST['email'])){

    
    $nome = addslashes($_POST['name']);
    $email = addslashes($_POST['email']);
    $mensagem = addslashes($_POST['message']);
    $foto = addslashes($_POST['file']);


    $to = "lucas.a.pereira05@gmail.com";
    $subject = "MIONA - IMG";
    $body = "Nome: ".$nome. "\r\n".
            "Email: ".$email. "\r\n".
            "Foto: ".$foto. "\r\n".
            "Mensagem: ".$mensagem.
    $header = "contato@luscadev.com.br"."\r\n".
            "Reply-To: ".$email. "\r\n".
            "X=Mailer:PHP/".phpversion();

    if(mail($to, $subject, $body, $header)){

        echo('email enviado');


    }else{
        echo('erro');

    }

}

?>