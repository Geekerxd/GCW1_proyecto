<?php

    include('db_conection.php');

    Class User{
        public $nombre;
        public $contrasena;
        public $email;
        public $foto;
        public $escenario;

        function addUser(){
            $this->nombre = $_POST["nombre"];
            $this->contrasena = $_POST["contrasena"];
            $this->email = $_POST["email"];
            $this->foto = $_POST["foto"];

            $db = new Connection;

            $mysqli = $db->connect();

            $result = $mysqli->query("CALL sp_signupUsuario('".$this->nombre."','".$this->contrasena."','".$this->email."','".$this->foto."');");
        
            if(!$result){
                echo "Problema al hacer el query: " . $mysqli->error;
            }
            else{
                
            }

            mysqli_close($mysqli);
        }

        function getUser1(){
            $this->contrasena = $_POST["contrasena"];
            $this->email = $_POST["email"];

            $db = new Connection;

            $mysqli = $db->connect();

            $result = $mysqli->query("CALL sp_loginUsuario('".$this->email."','".$this->contrasena."');");

            if(!$result){
                echo "Problema al hacer el query: " . $mysqli->error;
            }
            else{
                // Recorremos los resultados devueltos

                session_start();
                            
                // Store data in session variables
                $_SESSION["loggedin"] = true;
                $_SESSION["contrasena1"] = $this->contrasena;
                $_SESSION["email1"] = $this->email;
                
            
			    $rows = array();
			    while( $r = $result->fetch_assoc()) {
				    $rows[] = $r;
			    }			
			// Codificamos los resultados a formato JSON y lo enviamos al HTML (Client-Side)
			echo json_encode($rows);
            }

            mysqli_close($mysqli);
        }

        function getUser2(){
            $this->contrasena = $_POST["contrasena"];
            $this->email = $_POST["email"];

            $db = new Connection;

            $mysqli = $db->connect();

            $result = $mysqli->query("CALL sp_loginUsuario('".$this->email."','".$this->contrasena."');");

            if(!$result){
                echo "Problema al hacer el query: " . $mysqli->error;
            }
            else{
                // Recorremos los resultados devueltos

                session_start();
                            
                // Store data in session variables
                $_SESSION["loggedin"] = true;
                $_SESSION["contrasena2"] = $this->contrasena;
                $_SESSION["email2"] = $this->email;
                
            
			    $rows = array();
			    while( $r = $result->fetch_assoc()) {
				    $rows[] = $r;
                }			
			// Codificamos los resultados a formato JSON y lo enviamos al HTML (Client-Side)
			echo json_encode($rows);
            }

            mysqli_close($mysqli);
        }

        function getDatosUser1(){

            $db = new Connection;

            $mysqli = $db->connect();

            session_start();

            $result = $mysqli->query("CALL sp_loginUsuario('".$_SESSION["email1"]."','".$_SESSION["contrasena1"]."');");

            if(!$result){
                echo "Problema al hacer el query: " . $mysqli->error;
            }
            else{
                // Recorremos los resultados devueltos
                
            
			$rows = array();
			while( $r = $result->fetch_assoc()) {
				$rows[] = $r;
			}			
			// Codificamos los resultados a formato JSON y lo enviamos al HTML (Client-Side)
			echo json_encode($rows);
            }

            mysqli_close($mysqli);
        }

        function getDatosUser2(){

            $db = new Connection;

            $mysqli = $db->connect();

            session_start();

            $result = $mysqli->query("CALL sp_loginUsuario('".$_SESSION["email2"]."','".$_SESSION["contrasena2"]."');");

            if(!$result){
                echo "Problema al hacer el query: " . $mysqli->error;
            }
            else{
                // Recorremos los resultados devueltos

               
                
            
			$rows = array();
			while( $r = $result->fetch_assoc()) {
				$rows[] = $r;
			}			
			// Codificamos los resultados a formato JSON y lo enviamos al HTML (Client-Side)
			echo json_encode($rows);
            }

            mysqli_close($mysqli);
        }


    }

    $user = new User;

    $action = $_POST['action'];
    if($action == "addUser"){
        $user->addUser();
    }
    else if($action == "getUser1"){
        $user->getUser1();
    }
    else if($action == "getUser2"){
        $user->getUser2();
    }
    else if($action == "getDatosUser1"){
        $user->getDatosUser1();
    }
    else if($action == "getDatosUser2"){
        $user->getDatosUser2();
    }
    


?>