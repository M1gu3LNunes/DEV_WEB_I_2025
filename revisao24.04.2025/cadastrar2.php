<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Produtos</title>
</head>

<body>
    <form action="listar2.php" method="GET">
        <label for="nomeproduto">nomeproduto</label>
        <input type="text" name="nomeproduto">
        <select name="categoria" id="">
            <option value="limpeza">Limpeza</option>
            <option value="cereais">Cereais</option>
            <option value="armarinho">Armarinho</option>
        </select>
        <label for="fabricante">Fabricante</label>
        <input type="text" name="fabricante">
        <button type="submit">Enviar</button>
    </form>
</body>

</html>