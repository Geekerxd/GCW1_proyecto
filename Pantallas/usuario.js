var Usuario = function(nombre, contrasena, email, foto) {
	this.nombre = nombre;
	this.contrasena = contrasena;
	this.email = email;
	this.foto = foto;
};

var UsuarioLogIn = function(email, contrasena){
	this.email = email;
	this.contrasena = contrasena;
}

