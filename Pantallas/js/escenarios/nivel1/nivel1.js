function nivel1() {
  loadOBJWithMTL(
    "assets/obj/",
    "SM_Env_Tile_Grass_01.obj",
    "main.mtl",
    (plane) => {
      plane.scale.set(100, 1, 100);
      plane.position.set(-200, 0, -200);
      scene.add(plane);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Env_GroundMound_01.obj",
    "main.mtl",
    (ground01) => {
      var ground02 = ground01.clone();
      transform(ground01, -100, 0, 30, 0, 0, 0, 5);
      scene.add(ground01);
      transform(ground02, 100, 0, -20, 0, 180, 0, 5);
      //scene.add(ground02);
    }
  );

  loadOBJWithMTL("assets/obj/", "SM_Env_Hills_01.obj", "main.mtl", (hill01) => {
    transform(hill01, 100, 0, -40, 0, 0, 0, 5);
    scene.add(hill01);
  });

  loadOBJWithMTL("assets/obj/", "SM_Env_Hills_02.obj", "main.mtl", (hill02) => {
    transform(hill02, -110, 0, 0, 0, 0, 0, 5);
    scene.add(hill02);
  });

  loadOBJWithMTL("assets/obj/", "SM_Env_Hills_03.obj", "main.mtl", (hill03) => {
    transform(hill03, -100, 0, -29, 0, 0, 0, 5);
    scene.add(hill03);
  });

  loadOBJWithMTL("assets/obj/", "SM_Env_Hills_03.obj", "main.mtl", (hill04) => {
    transform(hill04, 90, 0, 10, 0, 90, 0, 5);
    scene.add(hill04);
  });

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Bld_Station_Large_01.obj",
    "main.mtl",
    (station01) => {
      transform(station01, -70, 1, 0, 0, 90, 0, 1);
      scene.add(station01);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Env_Track_Tunnel_01.obj",
    "main.mtl",
    (tunel) => {
      transform(tunel, -60, 0, -53, 0, 0, 0, 1);
      scene.add(tunel);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Bld_Warehouse_01.obj",
    "main.mtl",
    (warehouse) => {
      transform(warehouse, -120, 0, -51, 0, 90, 0, 1);
      scene.add(warehouse);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_Carriage_Logs_01.obj",
    "main.mtl",
    (carriagelogs01) => {
      var carriagelogs02 = carriagelogs01.clone();
      transform(carriagelogs01, -100, 0, -51, 0, 90, 0, 1);
      scene.add(carriagelogs01);
      transform(carriagelogs02, -105, 0, -51, 0, 90, 0, 1);
      scene.add(carriagelogs02);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Bld_Signal_Tower_01.obj",
    "main.mtl",
    (tower01) => {
      transform(tower01, 85, 0, 35, 0, -90, 0, 1);
      scene.add(tower01);
    }
  );

  loadOBJWithMTL("assets/obj/", "SM_Prop_Logs_01.obj", "main.mtl", (logs) => {
    transform(logs, 85, 0, 38, 0, -90, 0, 1);
    scene.add(logs);
  });

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Prop_Container_01.obj",
    "main.mtl",
    (container01) => {
      transform(container01, -77, 0, -45, 0, 90, 0, 1);
      scene.add(container01);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Prop_Container_02.obj",
    "main.mtl",
    (container02) => {
      transform(container02, -77, 0, -43, 0, 90, 0, 1);
      scene.add(container02);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Prop_Container_03.obj",
    "main.mtl",
    (container03) => {
      transform(container03, -77, 0, -41, 0, 90, 0, 1);
      scene.add(container03);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Env_Track_Corner_01.obj",
    "main.mtl",
    (corner01) => {
      transform(corner01, -62, 0, -39, 0, 0, 0, 1);
      scene.add(corner01);
    }
  );

  loadOBJWithMTL("assets/obj/", "SM_Prop_Pole_01.obj", "main.mtl", (pole01) => {
    var pole02 = pole01.clone();
    transform(pole01, -60, 0, 30, 0, 0, 0, 1);
    scene.add(pole01);
    transform(pole02, -60, 0, -30, 0, 0, 0, 1);
    scene.add(pole02);
  });

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_Freight_01.obj",
    "main.mtl",
    (freight) => {
      transform(freight, -60, 0, -80, 0, 0, 0, 1);
      scene.add(freight);
      anim.push(freight);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Env_Track_Ridge_Bridge_01.obj",
    "main.mtl",
    (Bridge01) => {
      transform(Bridge01, 66.5, 0, -55, 0, 90, 0, 1);
      scene.add(Bridge01);
    }
  );
  

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Env_Track_Ridge_Corner_01.obj",
    "main.mtl",
    (Bridgecorner01) => {
      var Bridgecorner02 = Bridgecorner01.clone();
      transform(Bridgecorner01, 58, 0, -55, 0, 90, 0, 1);
      scene.add(Bridgecorner01);
      transform(Bridgecorner02, 78, 0, -67, 0, 180, 0, 1);
      scene.add(Bridgecorner02);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Env_Track_Ridge_Straight_01.obj",
    "main.mtl",
    (Bridgestraight01) => {
      var bridge = [];
      var aux = 68;
      for (let i = 0; i < 4; i++) {
        bridge[i] = Bridgestraight01.clone();
        transform(bridge[i], aux, 1, -54, 0, 90, 0, 1);
        //scene.add(bridge[i]);
        aux += 3;
      }
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_BigRig_01.obj",
    "main.mtl",
    (bigrig01) => {
      transform(bigrig01, 63, 1, 80, 0, 180, 0, 1);
      scene.add(bigrig01);
      anim2.push(bigrig01);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_BigRig_02.obj",
    "main.mtl",
    (bigrig02) => {
      transform(bigrig02, 61, 1, -80, 0, 0, 0, 1);
      scene.add(bigrig02);
      anim2.push(bigrig02);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Veh_Carriage_Pipes_01.obj",
    "main.mtl",
    (fuel01) => {
      var fuel02 = fuel01.clone();
      transform(fuel01, -60, 0, -84, 0, 0, 0, 1);
      scene.add(fuel01);
      anim.push(fuel01);
      transform(fuel02, -60, 0, -89, 0, 0, 0, 1);
      scene.add(fuel02);
      anim.push(fuel02);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Env_Track_Straight_01.obj",
    "main.mtl",
    (Track01) => {
      var tracks = [];
      var aux = 0;
      for (let i = 0; i < 24; i++) {
        tracks[i] = Track01.clone();
        transform(tracks[i], -60, 0, aux, 0, 0, 0, 1);
        scene.add(tracks[i]);
        aux -= 3;
      }
      aux = 3;
      for (let i = 0; i < 24; i++) {
        tracks[i] = Track01.clone();
        transform(tracks[i], -60, 0, aux, 0, 0, 0, 1);
        scene.add(tracks[i]);
        aux += 3;
      }
      aux = 0;
      for (let i = 0; i < 13; i++) {
        tracks[i] = Track01.clone();
        transform(tracks[i], -62, 0, aux, 0, 0, 0, 1);
        scene.add(tracks[i]);
        aux -= 3;
      }
      aux = 3;
      for (let i = 0; i < 24; i++) {
        tracks[i] = Track01.clone();
        transform(tracks[i], -62, 0, aux, 0, 0, 0, 1);
        scene.add(tracks[i]);
        aux += 3;
      }
      aux = -74;
      for (let i = 0; i < 30; i++) {
        tracks[i] = Track01.clone();
        transform(tracks[i], aux, 0, -51, 0, 90, 0, 1);
        scene.add(tracks[i]);
        aux -= 3;
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
      for (let i = 0; i < 50; i++) {
        roads[i] = Road01.clone();
        transform(roads[i], 62, 1, aux, 0, 90, 0, 1);
        scene.add(roads[i]);
        aux -= 1.4;
      }
      aux = 0;
      for (let i = 0; i < 50; i++) {
        roads[i] = Road01.clone();
        transform(roads[i], 62, 1, aux, 0, -90, 0, 1);
        scene.add(roads[i]);
        aux -= 1.4;
      }
      aux = 0;
      for (let i = 0; i < 50; i++) {
        roads[i] = Road01.clone();
        transform(roads[i], 62, 1, aux, 0, -90, 0, 1);
        scene.add(roads[i]);
        aux += 1.4;
      }
      aux = 0;
      for (let i = 0; i < 50; i++) {
        roads[i] = Road01.clone();
        transform(roads[i], 62, 1, aux, 0, 90, 0, 1);
        scene.add(roads[i]);
        aux += 1.4;
      }
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Env_Stair_Walkway_01.obj",
    "main.mtl",
    (stair) => {
      transform(stair, -60, 1, 0, 0, 0, 0, 1);
      scene.add(stair);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Prop_LightPole_01.obj",
    "main.mtl",
    (lightpole01) => {
      var lightpole02 = lightpole01.clone();
      var lightpole03 = lightpole01.clone();
      var lightpole04 = lightpole01.clone();
      transform(lightpole01, -63, 1, -8, 0, 0, 0, 1);
      scene.add(lightpole01);
      transform(lightpole02, -63, 1, 8, 0, 0, 0, 1);
      scene.add(lightpole02);
      transform(lightpole03, -56, 1, 8, 0, 0, 0, 1);
      scene.add(lightpole03);
      transform(lightpole04, -56, 1, -8, 0, 0, 0, 1);
      scene.add(lightpole04);
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
      transform(platform01, -64, 0, 0, 0, 0, 0, 1);
      scene.add(platform01);
      transform(platform02, -57, 0, 0, 0, 0, 0, 1);
      scene.add(platform02);
      transform(platform03, -66, 0, 0, 0, 0, 0, 1);
      scene.add(platform03);
      transform(platform04, -68, 0, 0, 0, 0, 0, 1);
      scene.add(platform04);
      transform(platform05, -70, 0, 0, 0, 0, 0, 1);
      scene.add(platform05);
      transform(platform06, -72, 0, 0, 0, 0, 0, 1);
      scene.add(platform06);
      transform(platform07, -74, 0, 0, 0, 0, 0, 1);
      scene.add(platform07);
    }
  );

  loadOBJWithMTL(
    "assets/obj/",
    "SM_Bld_StationCover_01.obj",
    "main.mtl",
    (stationcover01) => {
      var stationcover02 = stationcover01.clone();
      var stationcover03 = stationcover01.clone();
      var stationcover04 = stationcover01.clone();
      transform(stationcover01, -63, 1, -5, 0, 90, 0, 1);
      scene.add(stationcover01);
      transform(stationcover02, -56, 1, 5, 0, 90, 0, 1);
      scene.add(stationcover02);
      transform(stationcover03, -63, 1, 5, 0, 90, 0, 1);
      scene.add(stationcover03);
      transform(stationcover04, -56, 1, -5, 0, 90, 0, 1);
      scene.add(stationcover04);
    }
  );

  loadOBJWithMTL("assets/obj/", "SM_Env_Tree_01.obj", "main.mtl", (tree01) => {
    var trees = [];
    var aux = 0;
    var aux2 = 0;
    for (let i = 0; i < 20; i++) {
      aux = randInRange(-50, 70);
      aux2 = randInRange(-1, 1);
      trees[i] = tree01.clone();
      transform(trees[i], 58 + aux2, 0, aux, 0, 0, 0, 1);
      scene.add(trees[i]);
    }
    var aux = 0;
    var aux2 = 0;
    for (let i = 0; i < 20; i++) {
      aux = randInRange(-50, 70);
      trees[i] = tree01.clone();
      transform(trees[i], 67 + aux2, 0, aux, 0, 0, 0, 1);
      scene.add(trees[i]);
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
}
