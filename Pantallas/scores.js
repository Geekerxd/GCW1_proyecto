$(document).ready(function(){

    traeScores();

    function traeScores(){
        // Objeto en formato JSON el cual le enviaremos al webservice (PHP)
        var dataToSend = {
            action: "traeScores"
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
                alert("Se cargo los puntajes!");

                console.log(Object.values(data));
                var objectLength = Object.keys(data).length;
                var num = 4;

                for (let index = 0; index < objectLength; index++) {

                    if(index == 0){
                        $(".table").append("<div class='row'><div class='cell' data-title='Foto'><img src='uploads/"+ Object.values(data[index].foto).join("") + "' alt='foto'></div><div class='cell' data-title='Full Name'>"+ Object.values(data[index].nombre).join("") +"</div><div class='cell' data-title='Age'><span class='material-icons md-xx md-Gold'>emoji_events</span></div><div class='cell' data-title='Job Title'>"+ Object.values(data[index].puntaje).join("") +"</div><div class='cell' data-title='Location'>"+ Object.values(data[index].fecha).join("") +"</div></div>");
                    }
                    else if(index == 1){
                        $(".table").append("<div class='row'><div class='cell' data-title='Foto'><img src='uploads/"+ Object.values(data[index].foto).join("") + "' alt='foto'></div><div class='cell' data-title='Full Name'>"+ Object.values(data[index].nombre).join("") +"</div><div class='cell' data-title='Age'><span class='material-icons md-xx md-Plate'>emoji_events</span></div><div class='cell' data-title='Job Title'>"+ Object.values(data[index].puntaje).join("") +"</div><div class='cell' data-title='Location'>"+ Object.values(data[index].fecha).join("") +"</div></div>");
                    }
                    else if(index == 2){
                        $(".table").append("<div class='row'><div class='cell' data-title='Foto'><img src='uploads/"+ Object.values(data[index].foto).join("") + "' alt='foto'></div><div class='cell' data-title='Full Name'>"+ Object.values(data[index].nombre).join("") +"</div><div class='cell' data-title='Age'><span class='material-icons md-xx md-Bronze'>emoji_events</span></div><div class='cell' data-title='Job Title'>"+ Object.values(data[index].puntaje).join("") +"</div><div class='cell' data-title='Location'>"+ Object.values(data[index].fecha).join("") +"</div></div>");
                    }
                    else{
                        $(".table").append("<div class='row'><div class='cell' data-title='Foto'><img src='uploads/"+ Object.values(data[index].foto).join("") + "' alt='foto'></div><div class='cell' data-title='Full Name'>"+ Object.values(data[index].nombre).join("") +"</div><div class='cell' data-title='Age'>#"+num+"</div><div class='cell' data-title='Job Title'>"+ Object.values(data[index].puntaje).join("") +"</div><div class='cell' data-title='Location'>"+ Object.values(data[index].fecha).join("") +"</div></div>");
                        num += 1;
                    }
                }

                
            },
            error: function(x, y, z) {
                alert("Error en webservice: " + x + y + z);
            },
        });
    }

});