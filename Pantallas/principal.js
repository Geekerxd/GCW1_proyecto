$(document).ready(function(){

    var file;

    $("#image").change(function(e){
        file = e.target.files[0].name;
    });

    $("#btnSubmit2").click(function(){

        if($("#nombre").val() != ""){
            if($("#email2").val() != ""){
                if($("#password2").val() != ""){
                    if(file != ""){

                        var nombre = $("#nombre").val();
                        var email = $("#email2").val();
                        var password = $("#password2").val();
                        
                        var user = new Usuario(nombre, password, email, file);

                        sendUser(user);

                    }
                    else{
                        alert ("Debes llenar todos los campos.");
                    }
                }
                else{
                    alert ("Debes llenar todos los campos.");
                }
            }
            else{
                alert ("Debes llenar todos los campos.");
            }
        }
        else{
            alert ("Debes llenar todos los campos.");
        }

    });

    $("#btnSubmit").click(function(){

        if($("#email1_1").val() != ""){
            if($("#password1_1").val() != ""){
                if($("#email1_2").val() != ""){
                    if($("#password1_2").val() != ""){

                        var email1 = $("#email1_1").val();
                        var contra1 = $("#password1_1").val();
                        var email2 = $("#email1_2").val();
                        var contra2 = $("#password1_2").val();

                        var user1 = new UsuarioLogIn(email1, contra1);
                        var user2 = new UsuarioLogIn(email2, contra2);

                        getUser1(user1);
                        getUser2(user2);

                    }
                    else{
                        alert ("No ingresó contraseña.");
                    }
                }
                else{
                    alert ("No ingresó correo.");
                }
            }
            else{
                alert ("No ingresó contraseña.");
            }
        }
        else{
            alert ("No ingresó correo.");
        }

    });

    function sendUser(user){
        // Objeto en formato JSON el cual le enviaremos al webservice (PHP)
        var dataToSend = {
            action: "addUser",
            nombre: user.nombre,
            contrasena: user.contrasena,
            email: user.email,
            foto: user.foto,
        };

        //var objetoEnJSON = JSON.stringify(sendProduct);

        //var objetoDesdeJSON = JSON.parse(objetoEnJSON);

        $.ajax({
            //url: "https://miwebservices.000webhostapp.com/webservice/webservice.php",
            url: "user.php",
            async: true,
            type: "POST",
            data: dataToSend,
            success: function(data) {
                //obtenemos el mensaje enviado desde el servidor SIN formato JSON
                alert("Registro exitoso!");

                
            },
            error: function(x, y, z) {
                alert("Error en webservice: " + x + y + z);
            },
        });
    }

    function getUser1(user){
        // Objeto en formato JSON el cual le enviaremos al webservice (PHP)
        var dataToSend = {
            action: "getUser1",
            email: user.email,
            contrasena: user.contrasena,
        };

        //var objetoEnJSON = JSON.stringify(sendProduct);

        //var objetoDesdeJSON = JSON.parse(objetoEnJSON);

        $.ajax({
            //url: "https://miwebservices.000webhostapp.com/webservice/webservice.php",
            url: "user.php",
            async: true,
            type: "POST",
            data: dataToSend,
            success: function(data) {
                //obtenemos el mensaje enviado desde el servidor SIN formato JSON
                alert("Sesion 1 iniciada!");

                
            },
            error: function(x, y, z) {
                alert("Error en webservice: " + x + y + z);
            },
        });
    }

    function getUser2(user){
        // Objeto en formato JSON el cual le enviaremos al webservice (PHP)
        var dataToSend = {
            action: "getUser2",
            email: user.email,
            contrasena: user.contrasena,
        };

        //var objetoEnJSON = JSON.stringify(sendProduct);

        //var objetoDesdeJSON = JSON.parse(objetoEnJSON);

        $.ajax({
            //url: "https://miwebservices.000webhostapp.com/webservice/webservice.php",
            url: "user.php",
            async: true,
            type: "POST",
            data: dataToSend,
            success: function(data) {
                //obtenemos el mensaje enviado desde el servidor SIN formato JSON
                alert("Sesion 2 iniciada!");

                
            },
            error: function(x, y, z) {
                alert("Error en webservice: " + x + y + z);
            },
        });
    }

});