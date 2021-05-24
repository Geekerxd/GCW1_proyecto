<?php

Class Connection {
    private $databasehost = "localhost:3306";
	private $databasename = "railroadcrossing";
	private $databaseuser = "root";
	private $databasepass = "root";

    function connect(){
        $mysqli = new mysqli($this->databasehost, $this->databaseuser, $this->databasepass, $this->databasename);
        if($mysqli->connect_errno){
            echo "Problema con la conexion a la base de datos.";
        }
        return $mysqli;
    }
}

?>