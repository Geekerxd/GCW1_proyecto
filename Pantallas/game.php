<html>
  <head>
    <title>Game</title>
    <link rel="stylesheet" href="styles/game.css" />
    <link rel="stylesheet" href="styles/pantallaJ.css" />
    <link rel="stylesheet" href="styles/stylePausa.css" />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
      crossorigin="anonymous"
    />
    <!-- JavaScript Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
      crossorigin="anonymous"
    ></script>
    <script type="text/javascript" src="js/jquery/jquery-2.1.4.min.js"></script>
    <script type="text/javascript" src="js/three/three.js"></script>
    <script type="text/javascript" src="js/three/MTLLoader.js"></script>
    <script type="text/javascript" src="js/three/OBJLoader.js"></script>
    <script
      type="text/javascript"
      src="js/escenarios/nivel1/nivel1.js"
    ></script>
    <script
      type="text/javascript"
      src="js/escenarios/nivel1/nivel1Anim.js"
    ></script>
    <script
      type="text/javascript"
      src="js/escenarios/nivel2/nivel2.js"
    ></script>
    <script
      type="text/javascript"
      src="js/escenarios/nivel2/nivel2Anim.js"
    ></script>
    <script
      type="text/javascript"
      src="js/escenarios/nivel3/nivel3.js"
    ></script>
    <script
      type="text/javascript"
      src="js/escenarios/nivel3/nivel3Anim.js"
    ></script>
    

    <script type="text/javascript">
      var movementSpeed = 5;
      var totalObjects = 50;
      var objectSize = 1;
      var sizeRandomness = 1000;
      var colors = [0xff0fff, 0xccff00, 0xff000f, 0x996600, 0xffffff];
      var dirs = [];
      var parts = [];

      var particleSystem;
      var particleCount = 500;
      var particles;
      var rango;
      var tempo = 100;

      var scene;
      var camera;
      var renderer;
      var controls;
      var objects = [];
      var clock;
      var deltaTime;
      var keys = {};
      var keysQueue = [],
        keysQueue2 = [];
      var jugador1 = [];
      var jugador2 = [];
      var vagones1 = [];
      var vagones2 = [];

      var lastPosition1 = [];
      var lastPosition2 = [];

      var CoordPlayer1 = [];
      var CoordPlayer2 = [];

      var queNivel = Math.floor(Math.random() * 3) + 1;
      var anim = [];
      var anim2 = [];
      var anim3 = [];
      var anim4 = [];
      var anim5 = [];
      var anim6 = [];
      var anim7 = [];
      var anim8 = [];

      var f = 0;
      var direction = new THREE.Vector3(0, 0, 1);
      var direction2 = new THREE.Vector3(0, 0, 1);
      var direction3 = new THREE.Vector3(0, 0, 1);
      var arriba = false,
        derecha = false;
      var integer = [50],
        integer2 = 0;
      var integer3 = 0,
        integer4 = 0;
      var laMoneda = [];
      var edgeSize = 50,
        padding = 0.15;

      var pause;
      var esPausa = false;

      var hayColision1 = false;
      var hayColision2 = false;

      var raycaster;
      var objetosConColision = [];
      var hola = [];

      var nivel2Contador = 0;
      var nivel2Contador2 = 0;
      var nivel3Contador = 0;

      var puntajejugador1 = 0.0;
      var puntajejugador2 = 0.0;
      var yasebajo1 = false;
      var yasebajo2 = false;

      var contColision = 0;
      var yahuboparticulas = false;


      function sendDatosGanador1(puntos1, puntos2){
        // Objeto en formato JSON el cual le enviaremos al webservice (PHP)
        var dataToSend = {
            action: "actualizarUsuarios1",
            puntos1: puntos1,
            puntos2: puntos2
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
                //alert("Se subieron los resultados!");

                
            },
            error: function(x, y, z) {
                alert("Error en webservice: " + x + y + z);
            },
        });
      }

      function sendDatosGanador2(puntos1, puntos2){
        // Objeto en formato JSON el cual le enviaremos al webservice (PHP)
        var dataToSend = {
            action: "actualizarUsuarios2",
            puntos1: puntos1,
            puntos2: puntos2
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
                //alert("Se subieron los resultados!");

                
            },
            error: function(x, y, z) {
                alert("Error en webservice: " + x + y + z);
            },
        });
      }




      function explode(x, y) {
        parts.push(new ExplodeAnimation(x, y));
      }
      function ExplodeAnimation(x, y) {
        var geometry = new THREE.Geometry();

        for (i = 0; i < totalObjects; i++) {
          var vertex = new THREE.Vector3();
          vertex.x = x;
          vertex.y = 0;
          vertex.z = y;

          geometry.vertices.push(vertex);
          dirs.push({
            x: Math.random() * movementSpeed - movementSpeed / 2,
            y: Math.random() * movementSpeed - movementSpeed / 2,
            z: Math.random() * movementSpeed - movementSpeed / 2,
          });
        }
        var material = new THREE.PointsMaterial({
          size: objectSize,
          color: colors[2],
        });
        var particles2 = new THREE.Points(geometry, material);

        this.object = particles2;
        this.status = true;

        this.xDir = Math.random() * movementSpeed - movementSpeed / 2;
        this.yDir = Math.random() * movementSpeed - movementSpeed / 2;
        this.zDir = Math.random() * movementSpeed - movementSpeed / 2;

        scene.add(this.object);

        this.update = function () {
          if (this.status == true) {
            var pCount = totalObjects;
            while (pCount--) {
              var particle2 = this.object.geometry.vertices[pCount];
              //particle.y += dirs[pCount].y;
              particle2.x += dirs[pCount].x;
              particle2.z += dirs[pCount].z;
            }
            this.object.geometry.verticesNeedUpdate = true;
          }
        };
      }

      function randInRange(a, b) {
        return a + Math.floor((b - a) * Math.random());
      }
      function spawnAppleVector() {
        var x = randInRange(-48, 48),
          z = randInRange(-48, 48);
        return new THREE.Vector3(x, 1, z);
      }

      $(document).ready(function () {
        setupScene();
        // rayos para las colisiones


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
                    $(".JugadoreLeft").append("<div class='puntaje1'><input class='puntaje' id='puntajejugador1' value=0 style='width: 50%; background-color: rgba(239, 184, 16, 0.7); border-radius: 10px' disabled></input></div><br><img class='image-fit profileRight' style='border: solid blue 1px' src='uploads/"+ Object.values(data[index].foto).join("") +"' alt='no se cargo :('/><label class='JugadorRightName' style='background-color: rgba(0,0,0,0.5); color: white; border-radius:10px'>"+ Object.values(data[index].nombre).join("") +"</label>");
                    
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
                    $(".JugadorRight").append("<div class='puntaje2'><input class='puntaje' id='puntajejugador2' value=0 style='width: 50%; background-color: rgba(239, 184, 16, 0.7); border-radius: 10px' disabled></input></div><br><img class='image-fit profileRight' style='border: solid blue 1px' src='uploads/"+ Object.values(data[index].foto).join("") +"' alt='no se cargo :('/><label class='JugadorRightName' style='background-color: rgba(0,0,0,0.5); color: white; border-radius:10px'>"+ Object.values(data[index].nombre).join("") +"</label>");
                    
                }

                
            },
            error: function(x, y, z) {
                alert("Error en webservice: " + x + y + z);
            },
        });
    }



        // la moneda
        var monedaPosi = spawnAppleVector();
        loadOBJWithMTL("assets/obj/", "coin3.obj", "coin3.mtl", (moneda) => {
          //console.log("x: " + monedaPosi.x + " Z: " + monedaPosi.z);

          laMoneda.push(moneda);
          transform(
            laMoneda[0],
            monedaPosi.x,
            1.5,
            monedaPosi.z,
            90,
            0,
            0,
            1.5
          );
          scene.add(moneda);
        });

        //document.addEventListener('keydown', onKeyDown);
        //document.addEventListener('keyup', onKeyUp);
        gamepause(false);

        window.addEventListener("gamepadconnected", (event) => {
          console.log("Control conectado");
          console.log(event.gamepad);
          onControl = true;
        });

        window.addEventListener("gamepaddisconnected", (event) => {
          console.log("Control desconectado");
          onControl = false;
        });

        /*
			//particulas de nieve
			if (queNivel == 2) {
				rango = 0.3;
				particles = new THREE.Geometry();
				var pMaterial = new THREE.PointsMaterial({
					color: 0xFFFFFF,
					size: 1
				});
				for (var p = 0; p < particleCount; p++) {
					var pX = rango * (Math.random() * 500 - 250),
						pY = rango * (Math.random() * 500 - 250),
						pZ = rango * (Math.random() * 500 - 250),
						particle = new THREE.Vector3(pX, pY, pZ);

					particle.velocity = new THREE.Vector3(0, -Math.random(), 0);

					particles.vertices.push(particle);
				}
				particleSystem = new THREE.Points(
					particles,
					pMaterial);

				scene.add(particleSystem);
			}*/

        render();
      });

      function loadOBJWithMTL(path, objFile, mtlFile, onLoadCallback) {
        var mtlLoader = new THREE.MTLLoader();
        mtlLoader.setPath(path);
        mtlLoader.load(mtlFile, (materiales) => {
          var objLoader = new THREE.OBJLoader();
          objLoader.setPath(path);
          objLoader.setMaterials(materiales);
          objLoader.load(objFile, (objCargado) => {
            onLoadCallback(objCargado);
          });
        });
      }

      function gamepause(aux) {
        pause = aux;
      }

      function onKeyDown(event) {
        keys[String.fromCharCode(event.keyCode)] = true;
      }
      function onKeyUp(event) {
        keys[String.fromCharCode(event.keyCode)] = false;
      }

      document.addEventListener("keydown", function (e) {
        switch (e.key) {
          case "ArrowDown":
            keysQueue.push(new THREE.Vector3(0, 0, 1));
            break;
          case "ArrowUp":
            keysQueue.push(new THREE.Vector3(0, 0, 1));
            break;
          case "ArrowLeft":
            keysQueue.push(new THREE.Vector3(0, 0, 1));
            integer[0] = 1;
            break;
          case "ArrowRight":
            keysQueue.push(new THREE.Vector3(0, 0, 1));
            integer[1] = 1;
            break;

          case "s":
            keysQueue2.push(new THREE.Vector3(0, 0, 1));
            break;
          case "w":
            keysQueue2.push(new THREE.Vector3(0, 0, 1));
            break;
          case "a":
            keysQueue2.push(new THREE.Vector3(0, 0, 1));
            integer[2] = 1;
            break;
          case "d":
            keysQueue2.push(new THREE.Vector3(0, 0, 1));
            integer[3] = 1;
            break;

          case "x":
            integer[4] = 1;
            break;
        }
      });

      function render() {

        if(hayColision1 == true){

          var selectedObject = scene.getObjectByName(jugador1);
          scene.remove(selectedObject);

          if(yasebajo1 == false){
            puntajejugador1 = puntajejugador1 - 50;
            yasebajo1 = true;
          }

          var puntajeFinal1 = puntajejugador1;
          var puntajeFinal2 = puntajejugador2;

          if(puntajeFinal1 > puntajeFinal2){
            sendDatosGanador1(puntajeFinal1, puntajeFinal2);
            
            
          }
          else if(puntajeFinal1 < puntajeFinal2){
            sendDatosGanador2(puntajeFinal1, puntajeFinal2);
          
          }
          else{
            
          }

          contColision += 0.1;

          if(contColision >= 5){
            location.href ="ganador.php";
          }


        }

        if(hayColision2 == true){

          

          if(yasebajo2 == false){
            puntajejugador2 = puntajejugador2 - 50;
            yasebajo2 = true;
          }

          var puntajeFinal1 = puntajejugador1;
          var puntajeFinal2 = puntajejugador2;

          if(puntajeFinal1 > puntajeFinal2){
            sendDatosGanador1(puntajeFinal1, puntajeFinal2);
          }
          else if(puntajeFinal1 < puntajeFinal2){
            sendDatosGanador2(puntajeFinal1, puntajeFinal2);
          
          }
          else{

          }

          contColision += 0.1;

          if(contColision >= 5){
            location.href ="ganador.php";
          }


        }


        /*
			//particulas de nieve
			if (queNivel == 2) {
				particleSystem.translateY(-1 * deltaTime);
				tempo -= 2 * (1 * deltaTime);
				if (tempo < 0) {
					scene.remove(particleSystem);
					particleSystem.position.y = 80;
					tempo = 100;
				} else {
					scene.add(particleSystem);
				}
				var pCount = particleCount;
				while (pCount--) {
					var particle = particles.vertices[pCount];
					if (particle.y < -200) {
						particle.y = 200;
						particle.velocity.y = 0;
					}
					particle.velocity.y -= Math.random() * .1;
					particle.add(particle.velocity);
				}
				particleSystem.geometry.__dirtyVertices = true;
			}*/

        requestAnimationFrame(render);
        deltaTime = clock.getDelta();
        var velocidad = 20;

        /*if (f > 10) {
          var gamepads = navigator.getGamepads();
          if (gamepads[0].buttons[15].pressed) {
            integer[1] = 1;
            //console.log("izq");
            keysQueue.push(new THREE.Vector3(0, 0, 1));
			f = 0;
          }
          if (gamepads[0].buttons[14].pressed) {
            integer[0] = 1;
            //console.log("der");
            keysQueue.push(new THREE.Vector3(0, 0, 1));
			f = 0;
          }
        }f++;*/

        //tren inicial derecha
        direction = keysQueue.length > 0 ? keysQueue.pop(0) : direction;
        //tren inicial izquierda
        direction2 = keysQueue2.length > 0 ? keysQueue2.pop(0) : direction2;

        if(esPausa == false && hayColision1 == false && hayColision2 == false){
        jugador2[0].translateX(direction2.x * deltaTime * velocidad);
        jugador2[0].translateZ(direction2.z * deltaTime * velocidad);

        jugador1[0].translateX(direction.x * deltaTime * velocidad);
        jugador1[0].translateZ(direction.z * deltaTime * velocidad);
        }

        // Seguimiento de vagones:
        var pos1 = new THREE.Vector3(
          jugador1[0].position.x,
          0,
          jugador1[0].position.z
        );
        var pos2 = new THREE.Vector3(
          jugador2[0].position.x,
          0,
          jugador2[0].position.z
        );

        lastPosition1.push(pos1);
        lastPosition2.push(pos2);

        //console.log("X: " + jugador1[0].position.x + " y: " + jugador1[0].position.z);
        
        if(esPausa == false && hayColision1 == false && hayColision2 == false){
        for (let i = 1; i < vagones1.length; i++) {
          var ultiPosi = lastPosition1[lastPosition1.length - 15 - i * 7];

          
          transform(vagones1[i], ultiPosi.x, 0, ultiPosi.z, 0, 0, 0, 1);
          
        }

        for (let i = 1; i < vagones2.length; i++) {
          var ultiPosi = lastPosition2[lastPosition2.length - 15 - i * 7];

          
          transform(vagones2[i], ultiPosi.x, 0, ultiPosi.z, 0, 0, 0, 1);
          
        }
        }
        

        // Animaciones:
        laMoneda[0].rotateZ(deltaTime);

        ////////////////////////////////Animacion del nivel////////////////////////////////////////////
        if (queNivel == 1) {
          nivel1Anim();
        } else if (queNivel == 2) {
          nivel2Anim();
        } else if (queNivel == 3) {
          nivel3Anim();
        }
        //////////////////////////////////////////////////////////////////////////////////////////////////

        // Esto pasa cuando toca las teclas:

        if (integer[0] == 1) {
          jugador1[0].rotateY(THREE.Math.degToRad(90));

          integer[0] = 0;
        }
        if (integer[1] == 1) {
          jugador1[0].rotateY(THREE.Math.degToRad(-90));
          integer[1] = 0;
        }
        if (integer[2] == 1) {
          jugador2[0].rotateY(THREE.Math.degToRad(90));
          integer[2] = 0;
        }
        if (integer[3] == 1) {
          jugador2[0].rotateY(THREE.Math.degToRad(-90));
          integer[3] = 0;
        }
        if (integer[4] == 1) {
          //monedas posicion
          var monedaPosi = spawnAppleVector();
          transform(
            laMoneda[0],
            monedaPosi.x,
            1.5,
            monedaPosi.z,
            90,
            0,
            0,
            1.5
          );
          integer[4] = 0;
        }

        // si colisiona con la moneda
        if (jugador1[0].position.distanceTo(laMoneda[0].position) < 3) {
          // nueva posición de la moneda
          var monedaPosi = spawnAppleVector();
          transform(
            laMoneda[0],
            monedaPosi.x,
            1.5,
            monedaPosi.z,
            90,
            0,
            0,
            1.5
          );

          

          // nuevo vagón detrás
          var nuevoVagon = vagones1[0].clone();
          transform(
            nuevoVagon,
            jugador1[0].position.x - 10,
            0,
            jugador1[0].position.z - 10,
            0,
            0,
            0,
            1
          );
          vagones1.push(nuevoVagon);
          scene.add(vagones1[vagones1.length - 1]);

          console.log("Si hay colision moneda vagon derecho");

          $(".JugadorRight input").remove()
          puntajejugador2 += 5;
          $(".JugadorRight .puntaje2").append("<input class='puntaje' id='puntajejugador2' value="+puntajejugador2+" style='width: 50%; background-color: rgba(239, 184, 16, 0.7); border-radius: 10px' disabled></input>");
          console.log(puntajejugador2);
        } 
        else if (jugador2[0].position.distanceTo(laMoneda[0].position) < 3) {
          // nueva posición de la moneda
          var monedaPosi = spawnAppleVector();
          transform(
            laMoneda[0],
            monedaPosi.x,
            1.5,
            monedaPosi.z,
            90,
            0,
            0,
            1.5
          );

          

          // nuevo vagón detrás
          var nuevoVagon = vagones2[0].clone();
          transform(
            nuevoVagon,
            jugador2[0].position.x - 10,
            0,
            jugador2[0].position.z - 10,
            0,
            0,
            0,
            1
          );
          vagones2.push(nuevoVagon);
          scene.add(vagones2[vagones2.length - 1]);

          console.log("Si hay colision moneda vagon izqu");

          $(".JugadoreLeft input").remove()
          puntajejugador1 += 5;
          $(".JugadoreLeft .puntaje1").append("<input class='puntaje' id='puntajejugador1' value="+puntajejugador1+" style='width: 50%; background-color: rgba(239, 184, 16, 0.7); border-radius: 10px' disabled></input>");
          console.log(puntajejugador1);
        }

        //checa colision de jugador1 a los vagones de jugador2
        for (let i = 0; i < vagones2.length; i++) {
          if (jugador1[0].position.distanceTo(vagones2[i].position) < 3) {
            if(yahuboparticulas == false){
              explode(jugador1[0].position.x, jugador1[0].position.z);
              yahuboparticulas = true;
            }
            hayColision2 = true;
          }
        }
        //checa colision de jugador2 a los vagones de jugador1
        for (let i = 0; i < vagones1.length; i++) {
          if (jugador2[0].position.distanceTo(vagones1[i].position) < 3) {
            if(yahuboparticulas == false){
              explode(jugador2[0].position.x, jugador2[0].position.z);
              yahuboparticulas = true;
            }
            hayColision1 = true;
          }
        }

        //checa colision de jugador1 a los vagones de jugador1
        for (let i = 0; i < vagones1.length; i++) {
          if (jugador1[0].position.distanceTo(vagones1[i].position) < 3) {
            if (!vagones1.length < 5) {
              if(yahuboparticulas == false){
                explode(jugador1[0].position.x, jugador1[0].position.z);
                yahuboparticulas = true;
              }
              hayColision2 = true;
            }
          }
        }

        //checa colision de jugador2 a los vagones de jugador2
        for (let i = 0; i < vagones2.length; i++) {
          if (jugador2[0].position.distanceTo(vagones2[i].position) < 3) {
            if (!vagones2.length < 5) {
              if(yahuboparticulas == false){
              explode(jugador2[0].position.x, jugador2[0].position.z);
              yahuboparticulas = true;
              }
              hayColision1 = true;
            }
          }
        }

        if (
          jugador1[0].position.x > 50 ||
          jugador1[0].position.x < -50 ||
          jugador1[0].position.z > 50 ||
          jugador1[0].position.z < -50
        ) {
          if(yahuboparticulas == false){
            explode(jugador1[0].position.x, jugador1[0].position.z);
            yahuboparticulas = true;
          }
          hayColision2 = true;

          /*if (jugador1[0].position.x > 50) {
            jugador1[0].position.x = -49;
          } else if (jugador1[0].position.x < -50) {
            jugador1[0].position.x = 49;
          } else if (jugador1[0].position.z > 50) {
            jugador1[0].position.z = -49;
          } else if (jugador1[0].position.z < -50) {
            jugador1[0].position.z = 49;
          }*/
        }

        if (
          jugador2[0].position.x > 50 ||
          jugador2[0].position.x < -50 ||
          jugador2[0].position.z > 50 ||
          jugador2[0].position.z < -50
        ) {
          if(yahuboparticulas == false){
            explode(jugador2[0].position.x, jugador2[0].position.z);
            yahuboparticulas = true;
          }
          hayColision1 = true;

          /*if (jugador2[0].position.x > 50) {
            jugador2[0].position.x = -49;
          } else if (jugador2[0].position.x < -50) {
            jugador2[0].position.x = 49;
          } else if (jugador2[0].position.z > 50) {
            jugador2[0].position.z = -49;
          } else if (jugador2[0].position.z <script -50) {
            jugador2[0].position.z = 49;
          }*/
        }

        ///particles
        var pCount = parts.length;
        while (pCount--) {
          parts[pCount].update();
        }
        ///

        renderer.render(scene, camera);
      }

      function setupScene() {
        var visibleSize = {
          width: window.innerWidth,
          height: window.innerHeight,
        };
        clock = new THREE.Clock();
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(
          75,
          visibleSize.width / visibleSize.height,
          0.1,
          100
        );
        //camera.position.z = 2;
        camera.position.y = 80;
        camera.rotation.x = THREE.Math.degToRad(-90);

        renderer = new THREE.WebGLRenderer({ precision: "mediump" });
        renderer.setClearColor(new THREE.Color(0, 0, 0));
        renderer.setPixelRatio(visibleSize.width / visibleSize.height);
        renderer.setSize(visibleSize.width, visibleSize.height);

        var ambientLight;

        if (queNivel == 1) {
          ambientLight = new THREE.AmbientLight(new THREE.Color(1, 1, 1), 1.0);
        } else if (queNivel == 2) {
          ambientLight = new THREE.AmbientLight(
            new THREE.Color(0.9, 0.9, 1),
            1.0
          );
        } else if (queNivel == 3) {
          ambientLight = new THREE.AmbientLight(new THREE.Color(1, 1, 1), 1.0);
        }
        scene.add(ambientLight);

        var directionalLight = new THREE.DirectionalLight(
          new THREE.Color(1, 1, 0),
          0.4
        );
        directionalLight.position.set(0, 0, 1);
        directionalLight.castShadow = true;
        scene.add(directionalLight);

        var grid = new THREE.GridHelper(50, 10, 0xffffff, 0xffffff);
        grid.position.y = 1;
        scene.add(grid);

        loadOBJWithMTL(
          "assets/obj/",
          "SM_Veh_Metro_01.obj",
          "main.mtl",
          (jugador) => {
            //izquierda
            transform(jugador, -30, 0, 0, 0, 0, 0, 1);
            scene.add(jugador);
            jugador2.push(jugador);
            jugador2.name = "jugador2";
          }
        );
        loadOBJWithMTL(
          "assets/obj/",
          "SM_Veh_Metro_01.obj",
          "main.mtl",
          (jugador) => {
            //derecha
            transform(jugador, 30, 0, 0, 0, 0, 0, 1);
            scene.add(jugador);
            jugador1.push(jugador);
            jugador1.name = "jugador1";
          }
        );

        // carga de vagones cuadrados

        loadOBJWithMTL("assets/obj/", "vagon02.obj", "vagon02.mtl", (vagon) => {
          //izquierda
          transform(vagon, 0, 0, 70, 90, 0, 0, 1);
          scene.add(vagon);
          vagones1.push(vagon);
        });

        loadOBJWithMTL("assets/obj/", "vagon02.obj", "vagon02.mtl", (vagon) => {
          //izquierda
          transform(vagon, 0, 0, 70, 0, 0, 0, 1);
          scene.add(vagon);
          vagones2.push(vagon);
        });

        ////////////////////////////////CARGA DE ESCENARIOS/////////////////////////////////////////
        if (queNivel == 1) {
          nivel1();
        } else if (queNivel == 2) {
          nivel2();
        } else if (queNivel == 3) {
          nivel3();
        } else {
          alert("No ha seleccionado ningun nivel.");
        }
        ///////////////////////////////////////////////////////////////////////////////////////////

        $("#scene-section").append(renderer.domElement);
      }

      function transform(model, posX, posY, posZ, rotX, rotY, rotZ, esc) {
        model.position.x = posX;
        model.position.y = posY;
        model.position.z = posZ;
        model.rotation.set(
          THREE.Math.degToRad(rotX),
          THREE.Math.degToRad(rotY),
          THREE.Math.degToRad(rotZ)
        );
        model.scale.set(0.3 * esc, 0.3 * esc, 0.3 * esc);
      }

      function cambiaPausa(){
        esPausa = true;
      }

      function cambiaPausa1(){
        esPausa = false;
      }



      

      
    </script>
  </head>

  <body>

<!-- Main content -->
<main class="main-container">
	<article class="content">
		<div class="sketch-container" id="sketch-container">
			<div class="sketch-gui" id="sketch-gui"></div>
			<div class="sketch-stats" id="sketch-stats"></div>
		</div>

		<script type="x-shader/x-vertex" id="vertexShader">
#define GLSLIFY 1
// Common uniforms
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform float u_frame;

// Common varyings
varying vec3 v_position;
varying vec3 v_normal;

/*
 * GLSL textureless classic 2D noise "cnoise",
 * with an RSL-style periodic variant "pnoise".
 * Author:  Stefan Gustavson (stefan.gustavson@liu.se)
 * Version: 2011-08-22
 *
 * Many thanks to Ian McEwan of Ashima Arts for the
 * ideas for permutation and gradient selection.
 *
 * Copyright (c) 2011 Stefan Gustavson. All rights reserved.
 * Distributed under the MIT license. See LICENSE file.
 * https://github.com/stegu/webgl-noise
 */

vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
    return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

vec2 fade(vec2 t) {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float cnoise(vec2 P) {
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod289(Pi);
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;

    vec4 i = permute(permute(ix) + iy);

    vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0;
    vec4 gy = abs(gx) - 0.5;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;

    vec2 g00 = vec2(gx.x, gy.x);
    vec2 g10 = vec2(gx.y, gy.y);
    vec2 g01 = vec2(gx.z, gy.z);
    vec2 g11 = vec2(gx.w, gy.w);

    vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;

    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));

    vec2 fade_xy = fade(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
}

// The plane tile size, the flying speed and the maximum mountain height
uniform float u_tileSize;
uniform float u_speed;
uniform float u_maxHeight;

// Varying containing the terrain elevation
varying float v_elevation;

// Calculates the vertex displaced position
vec3 getDisplacedPosition(vec3 position) {
	// Calculate the total flying distance
	float distance = u_speed * u_time;

	// Calculate the vertex horizontal shift
	float h_shift = mod(distance, u_tileSize);

	// Calculate the vertex vertical shift
	float v_shift = u_maxHeight * cnoise(0.4 * floor(vec2(position.x, position.z - distance) / u_tileSize));

	// Flatten the bottom to simulate the lakes
	v_shift = max(-0.8 * u_maxHeight, v_shift);

	return position + vec3(0.0, v_shift, h_shift);
}

/*
 * The main program
 */
void main() {
	// Calculate the new vertex position
	vec3 new_position = getDisplacedPosition(position);

	// Calculate the modelview position
	vec4 mv_position = modelViewMatrix * vec4(new_position, 1.0);

	// Save the varyings
	v_position = mv_position.xyz;
	v_elevation = 0.5 * (u_maxHeight + new_position.y);

	// Vertex shader output
	gl_Position = projectionMatrix * mv_position;
}

		</script>

		<script type="x-shader/x-fragment" id="fragmentShader">
#define GLSLIFY 1
// Common uniforms
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform float u_frame;

// Common varyings
varying vec3 v_position;
varying vec3 v_normal;

/*
 *  Calculates the normal vector at the given position
 *
 *  Uses this fix for some mobiles:
 *  https://stackoverflow.com/questions/20272272/standard-derivatives-from-fragment-shader-dfdx-dfdy-dont-run-correctly-in-a
 */
vec3 calculateNormal(vec3 position) {
    vec3 fdx = vec3(dFdx(position.x), dFdx(position.y), dFdx(position.z));
    vec3 fdy = vec3(dFdy(position.x), dFdy(position.y), dFdy(position.z));
    vec3 normal = normalize(cross(fdx, fdy));

    if (!gl_FrontFacing) {
        normal = -normal;
    }

    return normal;
}

/*
 *  Calculates the diffuse factor produced by the light illumination
 */
float diffuseFactor(vec3 normal, vec3 light_direction) {
    float df = dot(normalize(normal), normalize(light_direction));

    if (gl_FrontFacing) {
        df = -df;
    }

    return max(0.0, df);
}

// The plane tile size, the maximum mountain height and the sky color
uniform float u_tileSize;
uniform float u_maxHeight;
uniform vec3 u_skyColor;

// Varying containing the terrain elevation
varying float v_elevation;

/*
 * The main program
 */
void main() {
	// Calculate the new normal vector
	vec3 new_normal = calculateNormal(v_position);

	// Use the mouse position to define the light direction
	float min_resolution = min(u_resolution.x, u_resolution.y);
	vec3 light_direction = -vec3((u_mouse - 0.5 * u_resolution) / min_resolution, 0.25);

	// Set the default surface color
	vec3 surface_color = vec3(0.3, 0.65, 0.0);

	// Change the color for the snow peaks and the lakes
	if (v_elevation > 0.85 * u_maxHeight) {
		surface_color = vec3(1.0, 1.0, 1.0);
	} else if (v_elevation < 0.2 * u_maxHeight) {
		surface_color = vec3(0.3, 0.7, 0.9);
	}

	// Apply the light diffusion factor
	surface_color *= diffuseFactor(new_normal, light_direction);

	// Add a fog effect
	float fog_factor = clamp(0.0, 1.0, -(1.0 - u_mouse.y / u_resolution.y) * v_position.z / (15.0 * u_tileSize));
	surface_color = mix(surface_color, u_skyColor, fog_factor);

	// Fragment shader output
	gl_FragColor = vec4(surface_color, 1.0);
}

		</script>

		<script type="text/javascript" src="/js/shader-example-mountains.js"></script>
	</article>
	</main>

    <div id="scene-section">

      <div class="boton-pausa">
        <button
          type="hidden"
          class="pause"
          data-bs-toggle="modal"
          data-bs-target="#modalPausa"
          onclick="cambiaPausa()";
        >
          <span class="material-icons md-xx md-light" :hover> pause </span>
        </button>
      </div>
      <!-- IMAGENES DE LOS JUGADPRES-->
      <div class="JugadoreLeft">
        <!--<img
          class="image-fit profileLeft"
          src=   
          alt="no se cargo :("
        />
        <label class="JugadoreLeftName">Diego</label>-->
      </div>
      <div class="JugadorRight">
        <!--<img
          class="image-fit profileRight"
          src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
          alt="no se cargo :("
        />
        <label class="JugadorRightName">Gonzalo</label>-->
      </div>

     <!-- <div class="juegoTerminado" id="juegoTerminado">
      <div>
        <h1>GAME OVER</h1>
      </div>
      <div>
        <h4>Gano el jugador 1</h4>
      </div>
      <div>
        <a href="game.php">
          <button>
            Play again
          </button>
        </a>
        <a href="principal.php">
          <button>
            Quit
          </button>
        </a>
      </div>
    </div>-->
    </div>
    

    <div
      class="modal fade"
      id="modalPausa"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <img
              id="juegoEnPausa"
              src="images/rail_road_paused.png"
              alt="PAUSE"
            />
          </div>
          <div class="animacion_pausa">
            <img class="tren_pausa" src="images/tren1.png" alt="tren" />
            <img
              class="rails_road"
              src="images/rails_road.png"
              alt="rails_road"
            />
            <img
              class="rails_road"
              src="images/rails_road.png"
              alt="rails_road"
            />
            <img
              class="rails_road"
              src="images/rails_road.png"
              alt="rails_road"
            />
            <img
              class="rails_road"
              src="images/rails_road.png"
              alt="rails_road"
            />
            <img
              class="rails_road"
              src="images/rails_road.png"
              alt="rails_road"
            />
          </div>
          <br />
          <div class="elFooter">
            <button
              id="btnResume"
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              onclick="cambiaPausa1()"
            >
              Resume
            </button>
            <a href="principal.php">
              <button id="btnQuit" type="button" class="btn btn-primary">
                Quit
              </button>
            </a>
            <br /><br />
          </div>
        </div>
      </div>
    </div>

    

    <!--<script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>-->
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>


      

  </body>
</html>
