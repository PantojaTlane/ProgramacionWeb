<?php include 'db.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conexion a base de datos</title>
</head>
<body>
    <?php 
        $query = "SELECT * FROM cliente";
        $result = mysqli_query($conn, $query);
    ?>
    <ul>
        <?php while($cliente = mysqli_fetch_array($result)): ?>
            <li><b>Nombre:  </b><?= $cliente['nombre'] ?> <b>  Email: </b><?= $cliente['email'] ?></li>
        <?php endwhile; ?>
    </ul>
</body>
</html>