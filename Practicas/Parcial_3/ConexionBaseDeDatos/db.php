<?php


try{
    $conn =  mysqli_connect(
        'localhost',
        'root',
        '',
        'payutick',
        '3308'
    );

    if($conn){
        echo "Base de datos conectada";
    }else{
        echo "Conexion a base de datos ha fallado";
    }
}catch(Exception $e){
    echo "Datbase Not Connected".$e->getMessage();
    die();
}


?>