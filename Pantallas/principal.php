<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles/style.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <script type="text/javascript" src="js/jquery/jquery-2.1.4.min.js"></script>
  
  <script type="text/javascript" src="models/usuario.js"></script>
  <script type="text/javascript" src="js/three/three.js"></script>
  <script type="text/javascript" src="js/singUp.js"></script>
  <script type="text/javascript" src="js/logIn.js"></script>

  <script type="text/javascript" src="usuario.js"></script>
  <script type="text/javascript" src="principal.js"></script>


  <title>Main</title>

  <script type="text/javascript">
    //var userName;
    //var email;
    //var password;
    var jugadores = [];

    var currentPlayer;
    var currentKey;
    var currentName;
    var place;



    $(document).ready(function() {

      var sesion;

      const dbRefPlayers = firebase.database().ref().child('jugadores');

      dbRefPlayers.on("child_added", (snap) => {
        var player = snap.val();
        var key = snap.key;


        var newObject = creatObject(new THREE.Color(1, 1, 1));
        newObject.player = player;
        newObject.key = key;

        jugadores.push(newObject);
      });
    });

    function creatObject(color) {

      var material = new THREE.MeshLambertMaterial(new THREE.Color(1, 1, 1));
      var geometry = new THREE.BoxGeometry(1, 1, 1);
      var jugador = new THREE.Mesh(geometry, material);

      return jugador;
    }

    function PlaySong() {
      const music = document.querySelector('#music');


      music.play();


    }
    ////////////////////////////////////LIMPIAR INPUTS//////////////////////////////////////////////
    function clearData() {

      $('#nombre').val('');
      $('#exampleInputEmail2').val('');
      $('#exampleInputPassword2').val('');

    }
  </script>
</head>

<body>

  <div class="audioWrapper">
    <audio id='music' src='./assets/songs/Puzzle-Game-5_Looping.ogg' loop='true'></audio>

  </div>




  <video autoplay muted loop id="myVideo">
    <source src="Secuencia 01.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
  </video>
  <br>
  <div class="text-center">
    <img id="breathing-button" src="https://raw.githubusercontent.com/Daniel-Garcia-Mazatan/GCW/master/rail%20road%20playing.png" alt="">
  </div>
  <br>
  <section class="stage">
    <div id="play" class="div" data-toggle="modal" data-target="#exampleModalCenter">
      <p id="play" class="p">Play</p>
    </div>
    <div class="div" id="info">
      <p class="p"><a class="link" href="info.html"> Info</a></p>
    </div>
    <div class="div" id="scores">
      <p class="p"><a class="link" href="scores.php">Scores</a></p>
    </div>
    <div class="div" id="config">
      <p class="p"><a class="link" href="config.html"><span class="material-icons">settings</span></a></p>
    </div>
  </section>


  <div class="foot">
    <div class="text-center">

      <a id="audio" href="#" onclick="myFunction()"><span id="audioicon" class="material-icons">
          volume_up
        </span></a>
      <br>
      <small style="color: white;">Playing Rail RoadÂ®</small>
    </div>
  </div>


  <!-- Modal -->
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Sign in</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Register</a>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <form name="myForm" action="game.php">


                <div class="form-group">
                  <div class="text-center">
                    <small id="emailHelp" class="form-text text-muted">Sign in quickly using</small>
                    <button type="button" class="btn btn-light"><span class="material-icons" style="font-size: 18px; color: #3b5998;">facebook</span> Facebook</button>
                    <br><br>
                    <small id="emailHelp" class="form-text text-muted">Or use your email</small>
                  </div>
                </div>
                <div>
                  <div>
                    <label class="labelJugador" for="">First Player</label><br>
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="email1_1" aria-describedby="emailHelp" placeholder="Enter email" required>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                      else.</small>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="password1_1" placeholder="Password" required>
                  </div>
                </div>
                <!--<div class="form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Remember me</label>
                </div>-->
                <div>
                  <div>
                    <label class="labelJugador" for="">Second Player</label><br>
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="email1_2" aria-describedby="emailHelp" placeholder="Enter email" required>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                      else.</small>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="password1_2" placeholder="Password" required>
                  </div>
                </div>
                <br>
                <div class="text-center">
                  <button id="btnSubmit" class="btn btn-success">Play</button>
                </div>
              </form>
              <br>
              <!--<div class="text-center">
                <button id="play" class="btn btn-light"><a class="link" href="game.php">Play</a></button>
              </div>-->
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            

              <form action="upload.php" method="POST" enctype="multipart/form-data">

                

                <div class="form-group">
                  <label for="nombre">User</label>
                  <input type="text" class="form-control" id="nombre" placeholder="Name" required>
                </div>
                <div class="form-group">
                  <label for="email2">Email address</label>
                  <input type="email" class="form-control" id="email2" aria-describedby="emailHelp" placeholder="Enter email" required>
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                    else.</small>
                </div>
                <div class="form-group">
                  <label for="password2">Password</label>
                  <input type="password" class="form-control" id="password2" placeholder="Password" required>
                </div>
                <div class="form-group">
                  <label for="foto2">Profile photo</label>
                  <input type="file" class="form-control" name="image" id="image" required>
                </div>
                <br>
                <div class="text-center">
                  <button id="btnSubmit2" type="submit" class="btn btn-success">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>


  <script>
    function myFunction() {

      const music = document.querySelector('#music');

      music.play()

      var x = document.getElementById("myAudio");
      var y = document.getElementById("audioicon");
      if (music.muted == true) {
        music.muted = false;
        y.textContent = "volume_up";
      } else {
        music.muted = true;
        y.textContent = "volume_off";
      }
    }
  </script>

  <!-- The core Firebase JS SDK is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js"></script>

  <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
  <script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-database.js"></script>





  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</body>

</html>