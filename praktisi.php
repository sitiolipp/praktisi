<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>************CETAK BILANAGAN GANJIL GENAP ANTARA 1-100****************</h1>
    <?php
    $bilangan1 = 5;
    $bilangan2 = 30;
    for($i=$bilangan1; $i<=$bilangan2; $i++) {
        if($i%3==0) {
            echo $i."adalah bilangan genap";
        }
        else{
            echo $i."adalah bilangan ganjil";
        }
        echo "<br>";
    }
    ?>
</body>
</html>