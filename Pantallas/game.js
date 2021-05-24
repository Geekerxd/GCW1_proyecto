$(document).ready(function(){

    cargaUsuario1();
    cargaUsuario2();

    function cargaUsuario1(){
        // Objeto en formato JSON el cual le enviaremos al webservice (PHP)
        var dataToSend = {
            action: "getDatosUser1",
        };

        //var objetoEnJSON = JSON.stringify(sendProduct);

        //var objetoDesdeJSON = JSON.parse(objetoEnJSON);

        $.ajax({
            //url: "https://miwebservices.000webhostapp.com/webservice/webservice.php",
            url: "user.php",
            async: true,
            type: "POST",
            data: dataToSend,
            dataType: 'json',
            success: function(data) {
                //obtenemos el mensaje enviado desde el servidor SIN formato JSON
                //alert("Se cargaron los datos de sesion 1");

                console.log(Object.values(data));
                var objectLength = Object.keys(data).length;

                for (let index = 0; index < objectLength; index++) {

                    //$(".noticias-row").append("<div class='card' id=" + Object.values(data[index].idCurso).join("") + "col-12 col-sm-6 col-md-3 d-none d-sm-block'><span class='badge badge-info etiqueta'>" + Object.values(data[index].nombreCat).join("") + "</span><a href='curso.php' target='_blank'><img src=" + Object.values(data[index].fotoCurso).join("") + " class='card-img-top' alt='no se pudo cargar esta imagen' /></a><div class='Tarjeta-texto'><p style='margin-top: 15px'><strong>" + Object.values(data[index].nombreCurso).join("") + "</strong></p><p class='lead' style='font-size: 15px'>" + Object.values(data[index].descCortaCurso).join("") + "<a class='linkColor' href='curso.php'>Más información</a></p></div><div class='row empty'></div><div class='container_iconos row'><span class='material-icons md-xx'>thumb_up</span><i class='fas' :hover>" + Object.values(data[index].valoracion).join("") + "%</i><i class='fas fa-comment' :hover>138</i></div><input type='hidden' name='idCurso' value=" + Object.values(data[index].idCurso).join("") + "></div>");
                    $(".JugadoreLeft").append("<div class='puntaje1'><input class='puntaje' id='puntajejugador1' value=0 style='width: 50%; background-color: rgba(239, 184, 16, 0.7); border-radius: 10px'></input></div><br><img class='image-fit profileRight' style='border: solid blue 1px' src='uploads/"+ Object.values(data[index].foto).join("") +"' alt='no se cargo :('/><label class='JugadorRightName' style='background-color: rgba(0,0,0,0.5); color: white; border-radius:10px'>"+ Object.values(data[index].nombre).join("") +"</label>");
                    
                }

                
            },
            error: function(x, y, z) {
                alert("Error en webservice: " + x + y + z);
            },
        });
    }

    function cargaUsuario2(){
        // Objeto en formato JSON el cual le enviaremos al webservice (PHP)
        var dataToSend = {
            action: "getDatosUser2",
        };

        //var objetoEnJSON = JSON.stringify(sendProduct);

        //var objetoDesdeJSON = JSON.parse(objetoEnJSON);

        $.ajax({
            //url: "https://miwebservices.000webhostapp.com/webservice/webservice.php",
            url: "user.php",
            async: true,
            type: "POST",
            data: dataToSend,
            dataType: 'json',
            success: function(data) {
                //obtenemos el mensaje enviado desde el servidor SIN formato JSON
                //alert("Se cargaron los datos de sesion 2");

                console.log(Object.values(data));
                var objectLength = Object.keys(data).length;

                for (let index = 0; index < objectLength; index++) {

                    //$(".noticias-row").append("<div class='card' id=" + Object.values(data[index].idCurso).join("") + "col-12 col-sm-6 col-md-3 d-none d-sm-block'><span class='badge badge-info etiqueta'>" + Object.values(data[index].nombreCat).join("") + "</span><a href='curso.php' target='_blank'><img src=" + Object.values(data[index].fotoCurso).join("") + " class='card-img-top' alt='no se pudo cargar esta imagen' /></a><div class='Tarjeta-texto'><p style='margin-top: 15px'><strong>" + Object.values(data[index].nombreCurso).join("") + "</strong></p><p class='lead' style='font-size: 15px'>" + Object.values(data[index].descCortaCurso).join("") + "<a class='linkColor' href='curso.php'>Más información</a></p></div><div class='row empty'></div><div class='container_iconos row'><span class='material-icons md-xx'>thumb_up</span><i class='fas' :hover>" + Object.values(data[index].valoracion).join("") + "%</i><i class='fas fa-comment' :hover>138</i></div><input type='hidden' name='idCurso' value=" + Object.values(data[index].idCurso).join("") + "></div>");
                    $(".JugadorRight").append("<div class='puntaje2'><input class='puntaje' id='puntajejugador2' value=0 style='width: 50%; background-color: rgba(239, 184, 16, 0.7); border-radius: 10px'></input></div><br><img class='image-fit profileRight' style='border: solid blue 1px' src='uploads/"+ Object.values(data[index].foto).join("") +"' alt='no se cargo :('/><label class='JugadorRightName' style='background-color: rgba(0,0,0,0.5); color: white; border-radius:10px'>"+ Object.values(data[index].nombre).join("") +"</label>");
                    
                }

                
            },
            error: function(x, y, z) {
                alert("Error en webservice: " + x + y + z);
            },
        });
    }

});