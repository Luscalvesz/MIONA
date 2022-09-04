<?php

<?
echo ('<link rel="stylesheet" type="text/css" href="assets/css/style.css" />');
?>

if (isset($_POST['email']) && !empty($_POST['email'])){
    $nome = addslashes($_POST['name']);
    $gato = addslashes($_POST['catName']);
    $email = addslashes($_POST['email']);
    $foto = addslashes($_POST['img']);

    $to = "testsforlusca@gmail.com";
    $subject = "MIONA - IMG";
    $body = "Nome: ".$nome. "\r\n".
            "Email: ".$email. "\r\n".
            "Foto: ".$foto. "\r\n".
            "Gato: ".$gato. "\r\n".
    $header = "From:contato@luscadev.com.br"."\r\n".
            "Reply-To:".$email. "\r\n".
            "X=Mailer:PHP/".phpversion();
    if(mail($to, $subject, $body, $header)){
        echo('email enviado');
    }else{
        echo('erro');
    }
}
?>