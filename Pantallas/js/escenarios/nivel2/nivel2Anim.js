function nivel2Anim() {
  ///////////////////////////////////////ANIMACION 3///////////////////////////////////////////

  if (nivel2Contador < 50) {
    if (anim3[0].position.x < -84) {
      anim3[0].translateZ(deltaTime * 10);
    } else if (anim3[0].position.x < -72 && anim3[0].rotation.y > 0) {
      anim3[0].rotateY(deltaTime * -0.67);
      anim3[0].translateZ(deltaTime * 8.0);
    } else if (anim3[0].position.x == -72) {
      transform(anim3[0], -72.0001, 0, -26, 0, 0, 0, 1);
    }
  } else if (nivel2Contador >= 50 && nivel2Contador < 100) {
    if (anim3[0].position.x == -72.0001) {
      transform(anim3[0], -72, 0, -26, 0, 0, 0, 1);
    } else if (anim3[0].position.z < -10) {
      anim3[0].translateZ(deltaTime * 8.0);
    } else if (anim3[0].position.x > -84 && anim3[0].rotation.y > -90) {
      anim3[0].rotateY(deltaTime * -0.64);
      anim3[0].translateZ(deltaTime * 8.04);
    } else if (anim3[0].position.x == -84){
      transform(anim3[0], -84.00000001, 0, 2.99999999, 0, -90, 0, 1);
    } else if (anim3[0].position.x > -200) {
      anim3[0].translateZ(deltaTime * 10);
    }
  } else if (nivel2Contador > 100) {
    transform(anim3[0], -300, 0, -42, 0, 90, 0, 1);
    nivel2Contador = 0;
  }
  nivel2Contador += deltaTime;

  ///////////////////////////////////////ANIMACION 4//////////////////////////////////////

  if (anim4[9].position.z > -500) {
    anim4[0].translateZ(direction3.z * deltaTime * 10);
    anim4[1].translateZ(direction3.z * deltaTime * 10);
    anim4[2].translateZ(direction3.z * deltaTime * 10);
    anim4[3].translateZ(direction3.z * deltaTime * 10);
    anim4[4].translateZ(direction3.z * deltaTime * 10);
    anim4[5].translateZ(direction3.z * deltaTime * 10);
    anim4[6].translateZ(direction3.z * deltaTime * 10);
    anim4[7].translateZ(direction3.z * deltaTime * 10);
    anim4[8].translateZ(direction3.z * deltaTime * 10);
    anim4[9].translateZ(direction3.z * deltaTime * 10);
  } else {
    transform(anim4[9], 62, 0, 78, 0, 180, 0, 1);
    transform(anim4[0], 62, 0, 82, 0, 180, 0, 1);
    transform(anim4[1], 62, 0, 87, 0, 180, 0, 1);
    transform(anim4[2], 62, 0, 92, 0, 180, 0, 1);
    transform(anim4[3], 62, 0, 97, 0, 180, 0, 1);
    transform(anim4[4], 62, 0, 102, 0, 180, 0, 1);
    transform(anim4[5], 62, 0, 107, 0, 180, 0, 1);
    transform(anim4[6], 62, 0, 112, 0, 180, 0, 1);
    transform(anim4[7], 62, 0, 115, 0, 180, 0, 1);
    transform(anim4[8], 62, 0, 120, 0, 180, 0, 1);
  }

  //////////////////////////////////////////////ANIMACION 5//////////////////////////////////////

  if (nivel2Contador2 < 19) {
    if (anim5[0].position.x > 68) {
      anim5[0].translateZ(deltaTime * 10);
    }
  } else if (nivel2Contador2 >= 19 && nivel2Contador2 < 58) {
    if (anim5[0].position.x > -140) {
      anim5[0].translateZ(deltaTime * 10);
    }
  } else if (nivel2Contador2 > 58) {
    transform(anim5[0], 200, 1, -55.5, 0, -90, 0, 1);
    transform(anim5[1], -140, 1, -53.5, 0, 90, 0, 1);
    transform(anim5[2], 400, 1, -55.5, 0, -90, 0, 1);
    nivel2Contador2 = 0;
  }

  if (anim5[1].position.x < 140) {
    anim5[1].translateZ(deltaTime * 10);
  }

  if (anim5[2].position.x > -140) {
    anim5[2].translateZ(deltaTime * 10);
  }

  nivel2Contador2 += deltaTime;
}
