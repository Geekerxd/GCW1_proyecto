var userName;
var email;
var password;

function singUp() {
    var nombre = $("#nombre").val();
    var correo = $("#exampleInputEmail2").val();
    var contrasena = $("#exampleInputPassword2").val();
    userName = nombre;
    email = correo;
    password = contrasena;
    //$("#container").hide();
    
    var position = { x : 0, y : 0, z : 0};
    var rotation = { x: 0, y : 0, z: 0};
    var puntaje = 0;
    const dbRefPlayers =  firebase.database().ref().child("jugadores");

    var newPlayer = dbRefPlayers.push();
    newPlayer.set({
    nombre,
    correo,
    contrasena,
    position,
    rotation,
    puntaje
    });
}