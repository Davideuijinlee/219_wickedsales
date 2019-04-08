<?php
session_start();

$output = [
    'message'=>'Sign in api working!'
];

if(empty($_SESSION['user'])){
    $_SESSION['user'] = 'Horserace God Li';

    $output['message'] = 'Session set, user signed in';
} else{
    $output['message'] = 'User already signed in';
    $output['user'] = $_SESSION['user'];
}

$output['succes'] = true;

print(json_encode($output));

?>