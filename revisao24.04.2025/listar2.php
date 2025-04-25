<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    session_start();
    if (!isset($_SESSION["produtos"])) {
        $_SESSION["produtos"] = [];
    }
    if(isset($_GET["nomeproduto"]) && isset($_GET["categoria"]) && isset($_GET["fabricante"])){
        $nomeproduto = $_GET["nomeproduto"];
    $categoria = $_GET["categoria"];
    $fabricante = $_GET["fabricante"];
       
        $produtos=[$nomeproduto,$categoria,$fabricante];
        $_SESSION["produtos"][count($_SESSION["produtos"])]=$produtos;

        echo "<table>";
        echo "<tr><td>Nome</td><td>Categoria</td><td>Fabricante</td></tr>";

        for($i = 0; $i<count($_SESSION["produtos"]); $i++ ) {
            echo "<tr>";
            for($j = 0; $j<3; $j++ ) {
                echo "<td>";
                echo $_SESSION["produtos"][$i][$j];
                echo "</td>";
            } 
            echo "</tr>";
            
        }
        echo "</table>";
    }
    
    
    ?>
</body>
</html>