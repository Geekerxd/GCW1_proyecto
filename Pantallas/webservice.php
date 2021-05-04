<?php
	$action = $_POST['action'];

	if ($action == "addUsuario") 
		addUsuario();
	else if ($action == "getProducts")
		getProducts();

	function connect() {
		$databasehost = "localhost";
		$databasename = "railroadplaying";
		$databaseuser = "root";
		$databasepass = "root";

		$mysqli = new mysqli($databasehost, $databaseuser, $databasepass, $databasename);
		if ($mysqli->connect_errno) {
			echo "Problema con la conexion a la base de datos";
		}
		return $mysqli;
	}

	function disconnect() {
		mysqli_close();
	}

	function addUsuario() {
		$name = $_POST["name"];
		$email = $_POST["email"];
		$contra = $_POST["contra"];

		$mysqli = connect();
		
		$result = $mysqli->query("INSERT INTO usuario(nombre_usuario, email, contrasena ) values('".$name."','".$email."',".$contra.");");
		
		if (!$result) {
			echo "Problema al hacer un query: " . $mysqli->error;								
		} else {
			echo "Todo salio bien";		
		}
		mysqli_close($mysqli);
	}

	function getProducts() {
		$mysqli = connect();

		$result = $mysqli->query("SELECT * FROM product");	
		
		if (!$result) {
			echo "Problema al hacer un query: " . $mysqli->error;								
		} else {
			// Recorremos los resultados devueltos
			$rows = array();
			while( $r = $result->fetch_assoc()) {
				$rows[] = $r;
			}			
			// Codificamos los resultados a formato JSON y lo enviamos al HTML (Client-Side)
			echo json_encode($rows);
		}
		$result->free();
		disconnect();		
	}
?>