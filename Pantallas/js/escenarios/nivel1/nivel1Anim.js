function nivel1Anim() {
  if (anim[2].position.z < 100) {
    anim[2].translateZ(direction.z * deltaTime * 10);
    anim[1].translateZ(direction.z * deltaTime * 10);
    anim[0].translateZ(direction.z * deltaTime * 10);
  } else {
    transform(anim[2], -60, 0, -80, 0, 0, 0, 1);
    transform(anim[1], -60, 0, -84, 0, 0, 0, 1);
    transform(anim[0], -60, 0, -89, 0, 0, 0, 1);
  }

  if (anim2[1].position.z > -100) {
    anim2[1].translateZ(direction.z * deltaTime * 12);
  } else {
    transform(anim2[1], 63, 1, 80, 0, 180, 0, 1);
  }

  if (anim2[0].position.z < 100) {
    anim2[0].translateZ(direction.z * deltaTime * 12);
  } else {
    transform(anim2[0], 61, 1, -80, 0, 0, 0, 1);
  }
}
