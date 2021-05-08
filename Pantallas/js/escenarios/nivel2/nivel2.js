function nivel2() {

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Env_Tile_Snow_02.obj",
    "SM_Env_Tile_Snow_02.mtl",
    (plane) => {
      plane.scale.set(100, 1, 100);
      plane.position.set(-200, 0, -200);
      scene.add(plane);
    }
  );

  loadOBJWithMTL("assets/obj/", "SM_Env_Hills_01.obj", "main.mtl", (hill01) => {
      var hill04 = hill01.clone();
    transform(hill01, -110, 0, 50, 0, 80, 0, 5);
    transform(hill04, -120, 0, -10, 0, 45, 0, 4);
    scene.add(hill01);
    scene.add(hill04);
  });

  loadOBJWithMTL("assets/obj/", "SM_Env_Hills_01_02.obj", "SM_Env_Hills_01_02.mtl", (hill01_02) => {
      var hill04_02 = hill01_02.clone();
    transform(hill01_02, -110, 6, 50, 0, 80, 0, 4.1);
    transform(hill04_02, -119, 6, -10, 0, 45, 0, 3.2);
    scene.add(hill01_02);
    scene.add(hill04_02);
  });

  loadOBJWithMTL("assets/obj/", "SM_Env_Hills_02.obj", "main.mtl", (hill02) => {
    transform(hill02, 100, 0, 0, 0, 50, 0, 10);
    scene.add(hill02);
  });

  loadOBJWithMTL("assets/obj/", "SM_Env_Hills_02_02.obj", "SM_Env_Hills_02_02.mtl", (hill02_02) => {
    transform(hill02_02, 98, 5, 0, 0, 50, 0, 8.4);
    scene.add(hill02_02);
  });

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Env_Track_Tunnel_01.obj",
    "main.mtl",
    (tunel) => {
      transform(tunel, -114, 0, 2.5, 0, 90, 0, 1);
      scene.add(tunel);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Env_Track_Tunnel_01_snow.obj",
    "SM_Env_Track_Tunnel_01_snow.mtl",
    (tunel) => {
      transform(tunel, -114, 0.1, 2.5, 0, 90, 0, 1);
      scene.add(tunel);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Env_Track_Corner_01.obj",
    "main.mtl",
    (corner01) => {
      var corner02 = corner01.clone();
      var corner03 = corner01.clone();
      transform(corner01, -72, 0, -30, 0, 0, 0, 1);
      transform(corner02, -84, 0, 3, 0, 270, 0, 1);
      transform(corner03, 62, 0, 35, 0, 180, 0, 1);
      scene.add(corner01);
      scene.add(corner02);
      scene.add(corner03);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Env_Station_Platform_01.obj",
    "main.mtl",
    (platform01) => {
      var platform02 = platform01.clone();
      var platform03 = platform01.clone();
      var platform04 = platform01.clone();
      var platform05 = platform01.clone();
      var platform06 = platform01.clone();
      var platform07 = platform01.clone();
      var platform08 = platform01.clone();
      var platform09 = platform01.clone();
      transform(platform01, -75, 0, -20, 0, 0, 0, 1);
      transform(platform02, -77, 0, -20, 0, 0, 0, 1);
      transform(platform03, -79, 0, -20, 0, 0, 0, 1);
      transform(platform04, -81, 0, -20, 0, 0, 0, 1);
      transform(platform05, -83, 0, -20, 0, 0, 0, 1);
      transform(platform06, -68, 0, -20, 0, 0, 0, 1);
      transform(platform07, -66, 0, -20, 0, 0, 0, 1);
      transform(platform08, 90, 0, 44, 0, 90, 0, 1);
      transform(platform09, 90, 0, 42, 0, 90, 0, 1);
      scene.add(platform01);
      scene.add(platform02);
      scene.add(platform03);
      scene.add(platform04);
      scene.add(platform05);
      scene.add(platform06);
      scene.add(platform07);
      scene.add(platform08);
      scene.add(platform09);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Env_Stair_Walkway_01.obj",
    "main.mtl",
    (stair) => {
      transform(stair, -71, 1, -15, 0, 0, 0, 1);
      scene.add(stair);
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
      transform(faro, -83, 1, -12, 0, 90, 0, 1);
      transform(faro2, -83, 1, -28, 0, 90, 0, 1);
      transform(faro3, -65, 1, -12, 0, 90, 0, 1);
      transform(faro4, -65, 1, -28, 0, 90, 0, 1);
      transform(faro5, 78, 1, 41, 0, 0, 0, 1);
      transform(faro6, 100, 1, 41, 0, 0, 0, 1);
      scene.add(faro);
      scene.add(faro2);
      scene.add(faro3);
      scene.add(faro4);
      scene.add(faro5);
      scene.add(faro6);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Prop_Container_01.obj",
    "main.mtl",
    (container1) => {
      transform(container1, 80, 1, 42, 0, 0, 0, 1);
      scene.add(container1);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Prop_Container_02.obj",
    "main.mtl",
    (container2) => {
      transform(container2, 82, 1, 42, 0, 0, 0, 1);
      scene.add(container2);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Prop_Container_03.obj",
    "main.mtl",
    (container3) => {
      transform(container3, 84, 1, 42, 0, 0, 0, 1);
      scene.add(container3);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Prop_CrossingLight_02.obj",
    "main.mtl",
    (crossingLight) => {
      var crossingLight2 = crossingLight.clone();
      transform(crossingLight, 58, 1, -50, 0, 90, 0, 1);
      transform(crossingLight2, 64, 1, -58, 0, -90, 0, 1);
      scene.add(crossingLight);
      scene.add(crossingLight2);
    }
  );


  loadOBJWithMTL(
    "assets/obj/",
    "SM_Env_Track_End_01.obj",
    "main.mtl",
    (endroad) => {
      transform(endroad, 109, 1, 46, 0, 90, 0, 1);
      scene.add(endroad);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_HandCar_01.obj",
    "main.mtl",
    (handCar) => {
      transform(handCar, 107, 1, 46, 0, 90, 0, 1);
      scene.add(handCar);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Bld_Warehouse_01.obj",
    "main.mtl",
    (warehouse) => {
      transform(warehouse, 106, 0, 41, 0, 0, 0, 1);
      scene.add(warehouse);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Bld_Warehouse_01_snow.obj",
    "SM_Bld_Warehouse_01_snow.mtl",
    (warehousesnow) => {
      transform(warehousesnow, 106, 0.1, 41, 0, 0, 0, 1);
      scene.add(warehousesnow);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Bld_Signal_Tower_01.obj",
    "main.mtl",
    (tower01) => {
      transform(tower01, -94, 0, -38, 0, 90, 0, 1);
      scene.add(tower01);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Bld_Signal_Tower_01_snow.obj",
    "SM_Bld_Signal_Tower_01_snow.mtl",
    (tower01snow) => {
      transform(tower01snow, -94, 0.1, -38, 0, 90, 0, 1);
      scene.add(tower01snow);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Prop_Logs_01.obj",
    "main.mtl",
    (logs) => {
      var logs2 = logs.clone();
      var logs3 = logs.clone();
      transform(logs, 89, 1, 41, 0, 90, 0, 1);
      transform(logs2, 89, 1, 43, 0, 90, 0, 1);
      transform(logs3, 96, 1, 42, 0, 00, 0, 1);
      scene.add(logs);
      scene.add(logs2);
      scene.add(logs3);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Bld_Station_01.obj",
    "main.mtl",
    (estacion) => {
      transform(estacion, -82, 1, -20, 0, 90, 0, 1);
      scene.add(estacion);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Bld_Station_01_snowroof.obj",
    "SM_Bld_Station_01_snowroof.mtl",
    (estacionsnow) => {
      transform(estacionsnow, -82, 1.1, -20, 0, 90, 0, 1);
      scene.add(estacionsnow);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Bld_Train_Cover_01.obj",
    "main.mtl",
    (traincover) => {
      transform(traincover, -71, 1, -20, 0, 0, 0, 1.7);
      scene.add(traincover);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Bld_Train_Cover_01_snow.obj",
    "SM_Bld_Train_Cover_01_snow.mtl",
    (traincoversnow) => {
      transform(traincoversnow, -71, 1.2, -20, 0, 0, 0, 1.7);
      scene.add(traincoversnow);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Env_Track_Straight_01.obj",
    "main.mtl",
    (Track01) => {
      var tracks = [];
      var aux = -9;
      for (let i = 0; i < 7; i++) {
        tracks[i] = Track01.clone();
        transform(tracks[i], -72, 0, aux, 0, 0, 0, 1);
        scene.add(tracks[i]);
        aux -= 3;
      }

     
      aux = -60;
      for (let i = 0; i < 44; i++) {
        tracks[i] = Track01.clone();
        transform(tracks[i], 62, 0, aux, 0, 0, 0, 1);
        scene.add(tracks[i]);
        aux += 3;
      }

      aux = -84;
      for (let i = 0; i < 15; i++) {
        tracks[i] = Track01.clone();
        transform(tracks[i], aux, 0, -42, 0, 90, 0, 1);
        scene.add(tracks[i]);
        aux -= 3;
      }

      aux = -84;
      for (let i = 0; i < 15; i++) {
        tracks[i] = Track01.clone();
        transform(tracks[i], aux, 0, 3, 0, 90, 0, 1);
        scene.add(tracks[i]);
        aux -= 3;
      }

      aux = 77;
      for (let i = 0; i < 12; i++) {
        tracks[i] = Track01.clone();
        transform(tracks[i], aux, 0, 47, 0, 90, 0, 1);
        scene.add(tracks[i]);
        aux += 3;
      }
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Env_Road_Straight_01.obj",
    "main.mtl",
    (Road01) => {
      var roads = [];
      var aux = 0;
      for (let i = 0; i < 100; i++) {
        roads[i] = Road01.clone();
        transform(roads[i], aux, 0.0, -55, 0, 0, 0, 1);
        scene.add(roads[i]);
        aux -= 1.4;
      }
      aux = 0;
      for (let i = 0; i < 100; i++) {
        roads[i] = Road01.clone();
        transform(roads[i], aux, 0.0, -55, 0, -180, 0, 1);
        scene.add(roads[i]);
        aux -= 1.4;
      }
      aux = 0;
      for (let i = 0; i < 100; i++) {
        roads[i] = Road01.clone();
        transform(roads[i], aux, 0.0, -55, 0, -180, 0, 1);
        scene.add(roads[i]);
        aux += 1.4;
      }
      aux = 0;
      for (let i = 0; i < 100; i++) {
        roads[i] = Road01.clone();
        transform(roads[i], aux, 0.0, -55, 0, 0, 0, 1);
        scene.add(roads[i]);
        aux += 1.4;
      }
    }
  );

  var trees = [];

  loadOBJWithMTL("assets/obj/", "SM_Env_Tree_02.obj", "main.mtl", (tree01) => {
    var auxX = 0;
    var auxZ = 0;
    var sicumple = true;
    for (let i = 0; i < 50; i++) {

      auxX = xRandom(auxX);
      auxZ = zRandom(auxZ);

      if(auxZ < -52 && auxZ > -58){
        sicumple = false;
      }
      if((auxX > -86 && auxX < -64) && (auxZ > -34 && auxZ < -6)){
        sicumple = false;
      }
      if((auxX < -84) && (auxZ > -44 && auxZ < -40)){
        sicumple = false;
      }
      if((auxX < -84) && (auxZ > 1 && auxZ < 5)){
        sicumple = false;
      }
      if((auxX < 110 && auxX > 80) && (auxZ < 48 && auxZ > 36)){
        sicumple = false;
      }
      if(auxX < 64 && auxX > 60){
        sicumple = false;
      }
      if((auxX < -90 && auxX > -98) && (auxZ < -34 && auxZ > -42)){
        sicumple = false;
      }

      if(sicumple == true){
        trees[i] = tree01.clone();
        transform(trees[i], auxX, 0, auxZ, 0, 0, 0, 1);
        scene.add(trees[i]);
      }
            
      sicumple = true;
      
    }
  });

  var treesSnow = [];

  loadOBJWithMTL("assets/obj/", "SM_Env_Tree_02_snow01.obj", "main.mtl", (treeSnow01) => {
    var auxX = 0;
    var auxZ = 0;
    for (let i = 0; i < trees.length; i++) {

      auxX = trees[i].position.x;
      auxZ = trees[i].position.z;

      treesSnow[i] = treeSnow01.clone();
      transform(treesSnow[i], auxX, 0.1, auxZ, 0, 0, 0, 1);
      scene.add(treesSnow[i]);
    }
  });

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_Freight_01_yellow.obj",
    "SM_Veh_Freight_01_yellow.mtl",
    (freight) => {
      transform(freight, -400, 0, -42, 0, 90, 0, 1);
      scene.add(freight);
      anim3.push(freight);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_Freight_01_red.obj",
    "SM_Veh_Freight_01_red.mtl",
    (freight2) => {

      transform(freight2, 62, 0, 78, 0, 180, 0, 1);
      scene.add(freight2);
      anim4.push(freight2);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_Carriage_Coal_01.obj",
    "main.mtl",
    (vagoncoal) => {
      transform(vagoncoal, 62, 0, 82, 0, 180, 0, 1);
      scene.add(vagoncoal);
      anim4.push(vagoncoal);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_Carriage_Container_01.obj",
    "main.mtl",
    (vagoncontainer1) => {
      transform(vagoncontainer1, 62, 0, 87, 0, 180, 0, 1);
      scene.add(vagoncontainer1);
      anim4.push(vagoncontainer1);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_Carriage_Container_02.obj",
    "main.mtl",
    (vagoncontainer2) => {
      transform(vagoncontainer2, 62, 0, 92, 0, 180, 0, 1);
      scene.add(vagoncontainer2);
      anim4.push(vagoncontainer2);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_Carriage_Dirt_01.obj",
    "main.mtl",
    (vagondirt) => {
      transform(vagondirt, 62, 0, 97, 0, 180, 0, 1);
      scene.add(vagondirt);
      anim4.push(vagondirt);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_Carriage_Cylinder_03.obj",
    "main.mtl",
    (vagoncylinder3) => {
      transform(vagoncylinder3, 62, 0, 102, 0, 180, 0, 1);
      scene.add(vagoncylinder3);
      anim4.push(vagoncylinder3);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_Carriage_Pipes_01.obj",
    "main.mtl",
    (vagonpipes) => {
      transform(vagonpipes, 62, 0, 107, 0, 180, 0, 1);
      scene.add(vagonpipes);
      anim4.push(vagonpipes);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_Carriage_Cylinder_01.obj",
    "main.mtl",
    (vagoncylinder1) => {
      transform(vagoncylinder1, 62, 0, 112, 0, 180, 0, 1);
      scene.add(vagoncylinder1);
      anim4.push(vagoncylinder1);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_Carriage_Container_03.obj",
    "main.mtl",
    (vagoncontainer3) => {
      transform(vagoncontainer3, 62, 0, 115, 0, 180, 0, 1);
      scene.add(vagoncontainer3);
      anim4.push(vagoncontainer3);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_Carriage_Logs_01.obj",
    "main.mtl",
    (vagonlogs) => {
      transform(vagonlogs, 62, 0, 120, 0, 180, 0, 1);
      scene.add(vagonlogs);
      anim4.push(vagonlogs);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_BigRig_01_orange.obj",
    "SM_Veh_BigRig_01_orange.mtl",
    (bigrig02) => {
      var bigrig04 = bigrig02.clone();

      transform(bigrig02, -140, 1, -53.5, 0, 90, 0, 1);
      transform(bigrig04, 400, 1, -55.5, 0, -90, 0, 1);

      scene.add(bigrig02);
      scene.add(bigrig04);
      anim5.push(bigrig02);
      anim5.push(bigrig04);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_BigRig_01_yellow.obj",
    "SM_Veh_BigRig_01_yellow.mtl",
    (bigrig03) => {
      transform(bigrig03, 200, 1, -55.5, 0, -90, 0, 1);
      scene.add(bigrig03);
      anim5.push(bigrig03);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Bld_VehicleBay_03.obj",
    "main.mtl",
    (vahiclebay) => {
      var vahiclebay2 = vahiclebay.clone();

      transform(vahiclebay, -70, 0, -35, 0, 0, 0, 1);
      transform(vahiclebay2, -70, 0, -40, 0, 0, 0, 1);
      scene.add(vahiclebay);
      scene.add(vahiclebay2);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Bld_VehicleBay_03_snow.obj",
    "SM_Bld_VehicleBay_03_snow.mtl",
    (vahiclebaysnow) => {
      var vehiclebaysnow2 = vahiclebaysnow.clone();

      transform(vahiclebaysnow, -70, 0.1, -35, 0, 0, 0, 1);
      transform(vehiclebaysnow2, -70, 0.1, -40, 0, 0, 0, 1);
      scene.add(vahiclebaysnow);
      scene.add(vehiclebaysnow2);
    }
  );

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
    auxX = randInRange(-60, 60);
    
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



}
