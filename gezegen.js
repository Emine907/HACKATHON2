// Dış görsel yerine:
const loader = new THREE.TextureLoader();
loader.load('siber_sembolu.jpg', (tex) => {
  const flagMat = new THREE.MeshBasicMaterial({ 
    map: tex, 
    side: THREE.DoubleSide, 
    transparent: true 
  });
  flag.material = flagMat;
});

const planetRadius = 1;
const poleHeight   = 1.4;
const flagHeight   = 0.6;
const offset       = 1.01;

// --- Pole ---
const poleGeo = new THREE.CylinderGeometry(0.02, 0.02, poleHeight, 8);
const poleMat = new THREE.MeshPhongMaterial({ color: 0x888888 });
const pole    = new THREE.Mesh(poleGeo, poleMat);
pole.position.set(0,
  planetRadius + poleHeight / 2,
  0
);
pole.translateZ(offset);
planet.add(pole);

// --- Flag ---
const flagGeo = new THREE.PlaneGeometry(1, flagHeight);
textureLoader.load(flagImageUrl, texture => {
  const flagMat = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
    transparent: true
  });
  const flag = new THREE.Mesh(flagGeo, flagMat);
  flag.position.set(0,
    planetRadius + poleHeight + flagHeight / 2,
    0
  );
  flag.rotation.y = 0;
  flag.translateZ(offset);
  planet.add(flag);
});
