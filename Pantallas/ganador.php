<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <link rel="stylesheet" href="styles/ganador.css" />

  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
  <!-- CSS only -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous" />

  <!-- JavaScript Bundle with Popper -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
  <script type="text/javascript" src="js/jquery/jquery-2.1.4.min.js"></script>
  <script type="text/javascript" src="js/three/three.js"></script>
  <script type="text/javascript" src="js/three/MTLLoader.js"></script>
  <script type="text/javascript" src="js/three/OBJLoader.js"></script>
  <script type="text/javascript" src="ganador.js"></script>




</head>

<body>

  <div class="pantallaGanador">
    <div class="algo">
      <div class="content">
        <div class="header">
          <center>
            <img id="juegoEnPausa" src="https://raw.githubusercontent.com/Daniel-Garcia-Mazatan/GCW/master/rail%20road%20playing.png" alt="Ganador" />

          </center>


        </div>
        <center>
        <div class="animacion_pausa">
          <img class="tren_pausa" src="images/tren1.png" alt="tren" />
          <img class="rails_road" src="images/rails_road.png" alt="rails_road" />
          <img class="rails_road" src="images/rails_road.png" alt="rails_road" />
          <img class="rails_road" src="images/rails_road.png" alt="rails_road" />
          <img class="rails_road" src="images/rails_road.png" alt="rails_road" />
          <img class="rails_road" src="images/rails_road.png" alt="rails_road" />
        </div>
        </center>
        <br />

        <div class="descripcion">
          <h1 id="gameover">GAME OVER</h1>
          <div class="masdatos">

          </div>
        </div>
        <center>
          <div class="elFooter">
            <a href="game.php">
              <button id="btnResume" type="button" class="btn btn-primary" data-bs-dismiss="modal">
                Play again
              </button>
            </a>
            <a href="principal.php">
              <button id="btnQuit" type="button" class="btn btn-primary">
                Quit
              </button>
            </a>
            <br /><br />


          </div>

        </center>




      </div>
    </div>
  </div>


  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>



</body>

</html>