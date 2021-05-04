function logIn(){
    var email = $("#exampleInputEmail1").val();
    var password = $("#exampleInputPassword1").val();

    var siCoincide;

    //var database = firebase.database();
    for (var i = 0; i < jugadores.length ; i++ ){
		if(jugadores[i].player.correo == email && jugadores[i].player.contrasena == password){
			currentPlayer = jugadores[i].player;
			currentKey = jugadores[i].key;
            currentName = jugadores[i].player.nombre;
			place = i;
			update=true;
            siCoincide = true;
		}
	}
    if(siCoincide != true){
        alert("El email o la contraseña no coinciden.");
        return false;
    }
    else{
        //$('.stage').append("<button>Play</button>");
        
    }
    alert("Usuario: "+currentName);
}