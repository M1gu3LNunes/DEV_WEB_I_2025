<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="get">
    <label for="">nome: </label>
    <input id="nome" type="text">

    <label for="">categoria: </label>

    <select name="categoria" id="categoria">

    <option value="limpeza">limpeza</option>

    <option value="moveis">moveis</option>

    <button type="submit">cadastrar</button>    

    </select>

    <?php
    session_start();
    if(isset($_GET["nome"]) && isset($GET["categoria"]) && isset($GET["fabricante"])){
        $produto;
        $nome= $_GET["nome"];
        $categoria= $GET["categoria"];
        $fabricante= $GET["fabricante"];
        
        $_SESSION["produto""]


    }

    ?>

    </form>
</body>
</html>