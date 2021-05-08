function nivel3Anim(){

    //////////////////////////////////ANIMACION 7//////////////////////////////////////////////////
    if (nivel3Contador < 20) {
        if (anim7[0].position.x > 110) {
          anim7[0].translateZ(deltaTime * 10);
        }
    } else if (nivel3Contador >= 20 && anim7[0].position.z <= 200) {
        if (anim7[0].position.x > 97) {
            anim7[0].translateZ(deltaTime * 10);
        } else if (anim7[0].position.x > 85 || anim7[0].rotation.y < 0) {
            anim7[0].rotateY(deltaTime * 0.66);
            anim7[0].translateZ(deltaTime * 8.0);
        } else if (anim7[0].position.x == 85) {
            transform(anim7[0], 85.00000001, 0, -16, 0, 0, 0, 1);
        } else if (anim7[0].position.z <= 200) {
          anim7[0].translateZ(direction3.z * deltaTime * 10);
        }
      }
      
      if (anim7[0].position.z >= 200) {
        transform(anim7[0], 140, 0, -25, 0, -90, 0, 1);
        nivel3Contador = 0;
      }
    
      nivel3Contador += deltaTime;


    /////////////////////////////////////ANIMACION 6///////////////////////////////////////
    if (anim6[3].position.z < 322) {
        anim6[0].translateZ(direction3.z * deltaTime * 10);
        anim6[1].translateZ(direction3.z * deltaTime * 10);
        anim6[2].translateZ(direction3.z * deltaTime * 10);
        anim6[3].translateZ(direction3.z * deltaTime * 10);
      } else {
        transform(anim6[0], 85, 0, -122, 0, 0, 0, 1);
        transform(anim6[1], 85, 0, -125, 0, 0, 0, 1);
        transform(anim6[2], 85, 0, -130, 0, 0, 0, 1);
        transform(anim6[3], 85, 0, -135, 0, 0, 0, 1);
      }
    
    /////////////////////////////////////ANIMACION 8///////////////////////////////////////
    
    if(anim8[0].position.z > -400){
        anim8[0].translateZ(direction3.z * deltaTime * 15);
    } else{
        transform(anim8[0], -90.5, 1, 140, 0, 180, 0, 1);
    }

    if(anim8[1].position.z > -200){
        anim8[1].translateZ(direction3.z * deltaTime * 10);
    } else{
        transform(anim8[1], -88, 1, 70, 0, 180, 0, 1);
    }

    if(anim8[2].position.z < 400){
        anim8[2].translateZ(direction3.z * deltaTime * 10);
    } else{
        transform(anim8[2], -100.5, 1, -110, 0, 0, 0, 1);
    }

    if(anim8[3].position.z < 200){
        anim8[3].translateZ(direction3.z * deltaTime * 15);
    } else{
        transform(anim8[3], -98, 1, -70, 0, 0, 0, 1);
    }
    
}