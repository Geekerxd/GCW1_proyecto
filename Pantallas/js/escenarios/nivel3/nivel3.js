function nivel3(){

    loadOBJWithMTL(
        "assets/obj/",
        "SM_Env_Tile_Sand_01.obj",
        "SM_Env_Tile_Sand_01.mtl",
        (plane) => {
          plane.scale.set(100, 1, 100);
          plane.position.set(-200, 0, -200);
          scene.add(plane);
        }
    );


    loadOBJWithMTL(
        "assets/obj/",
        "SM_Env_Road_Straight_01.obj",
        "main.mtl",
        (Road01) => {
          var roads = [];
          var aux = 0;
          for (let i = 0; i < 50; i++) {
            roads[i] = Road01.clone();
            transform(roads[i], -90, 0.5, aux, 0, 90, 0, 1);
            scene.add(roads[i]);
            aux -= 1.4;
          }
          aux = 0;
          for (let i = 0; i < 50; i++) {
            roads[i] = Road01.clone();
            transform(roads[i], -90, 0.5, aux, 0, -90, 0, 1);
            scene.add(roads[i]);
            aux -= 1.4;
          }
          aux = 0;
          for (let i = 0; i < 50; i++) {
            roads[i] = Road01.clone();
            transform(roads[i], -90, 0.5, aux, 0, -90, 0, 1);
            scene.add(roads[i]);
            aux += 1.4;
          }
          aux = 0;
          for (let i = 0; i < 50; i++) {
            roads[i] = Road01.clone();
            transform(roads[i], -90, 0.5, aux, 0, 90, 0, 1);
            scene.add(roads[i]);
            aux += 1.4;
          }


          var aux = 0;
          for (let i = 0; i < 50; i++) {
            roads[i] = Road01.clone();
            transform(roads[i], -100, 0.5, aux, 0, 90, 0, 1);
            scene.add(roads[i]);
            aux -= 1.4;
          }
          aux = 0;
          for (let i = 0; i < 50; i++) {
            roads[i] = Road01.clone();
            transform(roads[i], -100, 0.5, aux, 0, -90, 0, 1);
            scene.add(roads[i]);
            aux -= 1.4;
          }
          aux = 0;
          for (let i = 0; i < 50; i++) {
            roads[i] = Road01.clone();
            transform(roads[i], -100, 0.5, aux, 0, -90, 0, 1);
            scene.add(roads[i]);
            aux += 1.4;
          }
          aux = 0;
          for (let i = 0; i < 50; i++) {
            roads[i] = Road01.clone();
            transform(roads[i], -100, 0.5, aux, 0, 90, 0, 1);
            scene.add(roads[i]);
            aux += 1.4;
          }
        }
    );

    loadOBJWithMTL(
        "assets/obj/",
        "SM_Env_Track_Straight_01.obj",
        "main.mtl",
        (Track01) => {
          var tracks = [];
     
          aux = -60;
          for (let i = 0; i < 44; i++) {
            tracks[i] = Track01.clone();
            transform(tracks[i], 85, 0, aux, 0, 0, 0, 1);
            scene.add(tracks[i]);
            aux += 3;
          }
    
          aux = 100;
          for (let i = 0; i < 10; i++) {
            tracks[i] = Track01.clone();
            transform(tracks[i], aux, 0, -25, 0, 90, 0, 1);
            scene.add(tracks[i]);
            aux += 3;
          }
        }
    );

    loadOBJWithMTL(
        "assets/obj/",
        "SM_Env_Track_Corner_01.obj",
        "main.mtl",
        (corner01) => {
          transform(corner01, 97, 0, -25, 0, 90, 0, 1);
          scene.add(corner01);
        }
    );

    loadOBJWithMTL(
        "assets/obj/",
        "SM_Env_Station_Platform_01.obj",
        "main.mtl",
        (platform01) => {
          var platform02 = platform01.clone();
          var platform03 = platform01.clone();
          var platform08 = platform01.clone();
          var platform09 = platform01.clone();
          transform(platform01, 110, 0, -22, 0, 90, 0, 1);
          transform(platform02, 110, 0, -20, 0, 90, 0, 1);
          transform(platform03, 110, 0, -18, 0, 90, 0, 1);
          transform(platform08, 88, 0, -44, 0, 0, 0, 1);
          transform(platform09, 90, 0, -44, 0, 0, 0, 1);
          scene.add(platform01);
          scene.add(platform02);
          scene.add(platform03);
          scene.add(platform08);
          scene.add(platform09);
        }
    );

    loadOBJWithMTL(
      "assets/obj/",
      "SM_Bld_Station_Small_01.obj",
      "main.mtl",
      (estacion) => {
        transform(estacion, 98, 1, -19, 0, 90, 0, 1);
        scene.add(estacion);
      }
    );

    loadOBJWithMTL(
      "assets/obj/",
      "SM_Bld_Signal_Tower_02.obj",
      "main.mtl",
      (tower) => {
        transform(tower, 120, 1, -19, 0, -90, 0, 1);
        scene.add(tower);
      }
    );

    loadOBJWithMTL(
      "assets/obj/",
      "SM_Bld_StationCover_01.obj",
      "main.mtl",
      (stationCover) => {
        var stationCover3 = stationCover.clone();
        var stationCover4 = stationCover.clone();
        var stationCover7 = stationCover.clone();
        transform(stationCover3, 104, 1, -20, 0, 0, 0, 1);
        transform(stationCover4, 114, 1, -20, 0, 0, 0, 1);
        transform(stationCover7, 100, 1, -19, 0, 90, 0, 1);
        scene.add(stationCover3);
        scene.add(stationCover4);
        scene.add(stationCover7);
      }
    );

    loadOBJWithMTL(
      "assets/obj/",
      "SM_Prop_Bench_01.obj",
      "main.mtl",
      (banca) => {
        var banca2 = banca.clone();
        var banca3 = banca.clone();
        var banca4 = banca.clone();
        transform(banca, 104, 1, -20, 0, 180, 0, 1);
        transform(banca2, 106, 1, -20, 0, 180, 0, 1);
        transform(banca3, 114, 1, -20, 0, 180, 0, 1);
        transform(banca4, 116, 1, -20, 0, 180, 0, 1);
        scene.add(banca);
        scene.add(banca2);
        scene.add(banca3);
        scene.add(banca4);
      }
    );

    loadOBJWithMTL(
      "assets/obj/",
      "SM_Prop_LightPole_01.obj",
      "main.mtl",
      (faro) => {
        var faro2 = faro.clone();
        var faro3 = faro.clone();
        var faro4 = faro.clone();
        var faro5 = faro.clone();
        var faro6 = faro.clone();
        var faro7 = faro.clone();
        transform(faro, 110, 1, -20, 0, 0, 0, 1);
        transform(faro2, 99, 1, -22, 0, 90, 0, 1);
        transform(faro3, 99, 1, -17, 0, 90, 0, 1);
        transform(faro4, 120, 1, -22, 0, 90, 0, 1);
        transform(faro5, 120, 1, -17, 0, 90, 0, 1);
        transform(faro6, 88, 1, -51, 0, 0, 0, 1);
        transform(faro7, 88, 1, -35, 0, 0, 0, 1);
        scene.add(faro);
        scene.add(faro2);
        scene.add(faro3);
        scene.add(faro4);
        scene.add(faro5);
        scene.add(faro6);
        scene.add(faro7);
      }
    );

    loadOBJWithMTL(
      "assets/obj/",
      "SM_Prop_Container_01.obj",
      "main.mtl",
      (container1) => {
        var container1_01 = container1.clone();
        transform(container1, 90, 1, -45, 0, 0, 0, 1);
        transform(container1_01, 90, 1, -38, 0, 0, 0, 1);
        scene.add(container1);
        scene.add(container1_01);
      }
    );
  
    loadOBJWithMTL(
      "assets/obj/",
      "SM_Prop_Container_02.obj",
      "main.mtl",
      (container2) => {
        var container2_01 = container2.clone();
        transform(container2, 90, 1, -49, 0, 0, 0, 1);
        transform(container2_01, 88, 1, -38, 0, 0, 0, 1);
        scene.add(container2);
        scene.add(container2_01);
      }
    );
  
    loadOBJWithMTL(
      "assets/obj/",
      "SM_Prop_Container_03.obj",
      "main.mtl",
      (container3) => {
        var container3_01 = container3.clone();
        transform(container3, 90, 1, -53, 0, 0, 0, 1);
        transform(container3_01, 88, 1, -45, 0, 0, 0, 1);
        scene.add(container3);
        scene.add(container3_01);
      }
    );

    loadOBJWithMTL("assets/obj/", "SM_Env_Hills_01.obj", "main.mtl", (hill01) => {
      var hill04 = hill01.clone();
      var hill06 = hill01.clone();
      var hill08 = hill01.clone();
      var hill11 = hill01.clone();
      var hill12 = hill01.clone();
    transform(hill01, -75, 0, -20, 0, -70, 0, 2);
    transform(hill04, -130, 0, -40, 0, 65, 0, 4);
    transform(hill06, -70, 0, 30, 0, 25, 0, 3);
    transform(hill08, 65, 0, 60, 0, 80, 0, 3);
    transform(hill11, 68, 0, 5, 0, 80, 0, 3.5);
    transform(hill12, 115, 0, 30, 0, 90, 0, 6);
    scene.add(hill01);
    scene.add(hill04);
    scene.add(hill06);
    scene.add(hill08);
    scene.add(hill11);
    scene.add(hill12);
  });

  loadOBJWithMTL("assets/obj/", "SM_Env_Hills_02.obj", "main.mtl", (hill02) => {
    var hill05 = hill02.clone();
    var hill07 = hill02.clone();
    var hill09 = hill02.clone();
    var hill10 = hill02.clone();
    transform(hill02, -130, 0, 40, 0, 50, 0, 9);
    transform(hill05, -130, 0, 0, 0, 120, 0, 6);
    transform(hill07, -75, 0, 5, 0, 70, 0, 4);
    transform(hill09, 70, 0, 40, 0, 70, 0, 2);
    transform(hill10, 64, 0, 32, 0, -12, 0, 3);
    scene.add(hill02);
    scene.add(hill05);
    scene.add(hill07);
    scene.add(hill09);
    scene.add(hill10);
  });

  loadOBJWithMTL("assets/obj/", "SM_Env_GroundMound_02.obj", "SM_Env_GroundMound_02.mtl", (ground) => {
    var ground02 = ground.clone();
    var ground03 = ground.clone();
    var ground04 = ground.clone();
    var ground05 = ground.clone();
    transform(ground, -70, -1, -50, 0, 50, 0, 4);
    transform(ground02, -65, -1, -35, 0, 0, 0, 4);
    transform(ground03, 65, -1, -35, 0, 170, 0, 4);
    transform(ground04, 72, -1, -25, 0, 20, 0, 3);
    transform(ground05, 62, -1, -20, 0, 70, 0, 3);
    scene.add(ground);
    scene.add(ground02);
    scene.add(ground03);
    scene.add(ground04);
    scene.add(ground05);
  });

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Bld_Warehouse_02.obj",
    "main.mtl",
    (warehouse) => {
      var warehouse2 = warehouse.clone();
      transform(warehouse, 75, 0.1, -52, 0, 90, 0, 1);
      transform(warehouse2, 75, 0.1, -47, 0, 90, 0, 1);
      scene.add(warehouse);
      scene.add(warehouse2);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_Freight_01_green.obj",
    "SM_Veh_Freight_01_green.mtl",
    (freight) => {
      transform(freight, 85, 0, -122, 0, 0, 0, 1);
      scene.add(freight);
      anim6.push(freight);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_Carriage_Container_01.obj",
    "main.mtl",
    (vagoncontainer1) => {
      transform(vagoncontainer1, 85, 0, -125, 0, 0, 0, 1);
      scene.add(vagoncontainer1);
      anim6.push(vagoncontainer1);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_Carriage_Container_02.obj",
    "main.mtl",
    (vagoncontainer2) => {
      transform(vagoncontainer2, 85, 0, -130, 0, 0, 0, 1);
      scene.add(vagoncontainer2);
      anim6.push(vagoncontainer2);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_Carriage_Container_03.obj",
    "main.mtl",
    (vagoncontainer3) => {
      transform(vagoncontainer3, 85, 0, -135, 0, 0, 0, 1);
      scene.add(vagoncontainer3);
      anim6.push(vagoncontainer3);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_Freight_01_aqua.obj",
    "SM_Veh_Freight_01_aqua.mtl",
    (freight2) => {
      transform(freight2, 140, 0, -25, 0, -90, 0, 1);
      scene.add(freight2);
      anim7.push(freight2);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_BigRig_01_yellow.obj",
    "SM_Veh_BigRig_01_yellow.mtl",
    (bigrig01) => {
      transform(bigrig01, -90.5, 1, 140, 0, 180, 0, 1);
      scene.add(bigrig01);
      anim8.push(bigrig01);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_BigRig_01_gray.obj",
    "SM_Veh_BigRig_01_gray.mtl",
    (bigrig02) => {
      transform(bigrig02, -88, 1, 70, 0, 180, 0, 1);
      scene.add(bigrig02);
      anim8.push(bigrig02);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_BigRig_01_blue.obj",
    "SM_Veh_BigRig_01_blue.mtl",
    (bigrig03) => {
      transform(bigrig03, -100.5, 1, -110, 0, 0, 0, 1);
      scene.add(bigrig03);
      anim8.push(bigrig03);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_Freight_01_white.obj",
    "SM_Veh_Freight_01_white.mtl",
    (bigrig04) => {
      transform(bigrig04, -98, 1, -70, 0, 0, 0, 1);
      scene.add(bigrig04);
      anim8.push(bigrig04);
    }
  );


  var cactus = [];
  loadOBJWithMTL("assets/obj/", "cactus_01.obj", "cactus_01.mtl", (cactus01) => {
    var auxX = 0;
    var auxZ = 0;
    var auxRotY = 0;
    var sicumple = true;
    for (let i = 0; i < 50; i++) {

      auxX = xRandom(auxX);
      auxZ = zRandom(auxZ);
      auxRotY = rotyRandom(auxRotY);

      if(auxX < -87 && auxX > -103){
        sicumple = false;
      }
      if(auxX > 83 && auxX < 87){
        sicumple = false;
      }
        if((auxZ > -27 && auxZ < -14) && (auxX > 105 && auxX < 115)){
          sicumple = false;
        }
          if((auxX > 86 && auxX < 92) && (auxZ > -56 && auxZ < -32)){
            sicumple = false;
          }
      if((auxZ > -60 && auxZ < -40) && (auxX < 80 && auxX > 70)){
        sicumple = false;
      }



      if(sicumple == true){
        cactus[i] = cactus01.clone();
        transform(cactus[i], auxX, 0, auxZ, 0, auxRotY, 0, 0.7);
        scene.add(cactus[i]);
      }
      
      sicumple = true;
      
    }
  });

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Prop_Fence_01.obj",
    "main.mtl",
    (fence) => {
      var valla = [];
      var aux = -50;
      for (let i = 0; i < 78; i++) {
        valla[i] = fence.clone();
        transform(valla[i], aux, 0.0, -50, 0, 0, 0, 1);
        scene.add(valla[i]);
        aux += 1.3;
      }
      aux = 50;
      for (let i = 0; i < 78; i++) {
        valla[i] = fence.clone();
        transform(valla[i], aux, 0.0, 50, 0, 0, 0, 1);
        scene.add(valla[i]);
        aux -= 1.3;
      }
      aux = -50;
      for (let i = 0; i < 78; i++) {
        valla[i] = fence.clone();
        transform(valla[i], -50, 0.0, aux, 0, 90, 0, 1);
        scene.add(valla[i]);
        aux += 1.3;
      }
      aux = 50;
      for (let i = 0; i < 78; i++) {
        valla[i] = fence.clone();
        transform(valla[i], 50, 0.0, aux, 0, 90, 0, 1);
        scene.add(valla[i]);
        aux -= 1.3;
      }
    }
  );

  function xRandom(auxX){
    auxX = randInRange(-120, 120);
    
    if(auxX <= 0){
      return auxX - 60;
    }
    else if(auxX > 0){
      return auxX + 60;
    }

  }

  function zRandom(auxZ){
    auxZ = randInRange(-60, 60);

    return auxZ;
    
  }

  function rotyRandom(auxRotY){
    auxRotY = randInRange(0, 360);

    return auxRotY;
  }
}