<?php

      

  try {
    $opc = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8");
    $dsn = "mysql:host=localhost;dbname=Tienda";
    $dwes = new PDO($dsn, "Tienda", "Tienda", $opc);
  } catch (PDOException $e) {
    $error = $e->getCode();
    $mensaje = $e->getMessage();
  }

  
$campo = $_POST["campo"] ?? null;

$and = '';
$where = '';

if($campo != null){
    $and .= "AND (Nombre LIKE '%". $campo . "%' OR Precio LIKE '%". $campo . "%' OR Categoria LIKE '%". $campo . "%');";
    $where .= "WHERE (Nombre LIKE '%". $campo . "%' OR Precio LIKE '%". $campo . "%' OR Categoria LIKE '%". $campo . "%');";
}


$html = " ";

if (!isset($error)) {
    $sql = "SELECT DISTINCT Categoria FROM Productos $where";
    $resultado = $dwes->query($sql);
    if ($resultado) {
      $row = $resultado->fetch();
      while ($row != null) {
        $categoria = $row['Categoria'];
        $html .= " <div class='container px-4 py-5' id='custom-cards'>
        <h2 class='pb-2 border-bottom'>$categoria</h2>
        <div class='row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-3'>";

        $sql2 = "SELECT ID, Nombre, Foto, Precio FROM Productos WHERE Categoria = '$categoria' $and";
        $resultado2 = $dwes->query($sql2);
        $row2 = $resultado2->fetch();
        while ($row2 != null) {
          $nombre = $row2['Nombre'];
          $foto = $row2['Foto'];
          $precio = $row2['Precio'] . " €";
          $id = $row2["ID"];

          $html .= "<div class='col zoom'>
          <div class='card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg' style='background-image: url(\"$foto\");'>
            <div class='d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1'>
              <h3 class='pt-5 mt-5 mb-4 display-6 lh-1 fw-bold'>$nombre</h3>
              <ul class='d-flex list-unstyled mt-auto'>
                <li class='me-auto'>
                  $precio 
                </li>
                <li class='d-flex align-items-center me-2'>
                  <a href='compra.php?ID=$id'><button type='button' class='btn btn-danger'>Comprar</button></a>
                </li>
              </ul>
            </div>
          </div>
        </div>";



          $row2 = $resultado2->fetch();
        }
        $html .= "</div></div>";
        $row = $resultado->fetch();
      }
    }
  }

echo json_encode($html, JSON_UNESCAPED_UNICODE);
  ?>
