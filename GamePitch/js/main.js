import * as THREE from '/GamePitch/js/three.module.js';
import { GLTFLoader } from '/GamePitch/loaders/GLTFLoader.js';
import { OrbitControls } from '/GamePitch/loaders/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
);
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Calling OrbitControls
controls.update();

// Initiates variables So I can reference it by calling its name 
let dusts, dustGeo, tire1, tire2, tCone, guitar, pc, laptop, boxes1, slippers, origami, bike,
pcCase, cpu, gpu, motherboard, storage, kitchen, counter, cake, skate;

// Calling the functions with 3D objects
tiresModel();
tires2Model();
tConeModel();
guitarModel();
PCModel();
laptopModel();
boxes1Model();
slippersModel();
origamiModel();
bikeModel();
caseModel();
cpuModel();
gpuModel();
motherboardModel();
storageModel();
kitchenModel();
counterModel();
cakeModel();
skateModel();
particles();

// Garage Lights
const light1 = new THREE.PointLight(0xffffff, 1.3, 200);
light1.position.set( 50, 20, 0 );
    scene.add(light1);

// Kitchen Lights
const light2 = new THREE.PointLight(0xffffff, 1, 300);
light2.position.set( -50, 50, 0 );
    scene.add(light2);

const light3 = new THREE.PointLight(0xffffff, 1, 300);
light3.position.set( -50, 50, -20 );
    scene.add(light3);

const light4 = new THREE.PointLight(0xffffff, 0.2, 300);
light4.position.set( -80, 50, -20 );
    scene.add(light4);

// Texture
const wall1Texture = new THREE.TextureLoader().load('assets/images/wall1.jpg');
const wall2Texture = new THREE.TextureLoader().load('assets/images/tiles.jpg');
const garageFloorTexture = new THREE.TextureLoader().load('assets/images/garagefloor.jpg');
const garagedoorTexture = new THREE.TextureLoader().load('assets/images/garagedoor.jpg');
const garagetableTexture = new THREE.TextureLoader().load('assets/images/garagetable.jpg');
const tools1Texture = new THREE.TextureLoader().load('assets/images/tools1.jpg');
const tools2Texture = new THREE.TextureLoader().load('assets/images/tools2.jpg');
const doorTexture = new THREE.TextureLoader().load('assets/images/door.jpg');
const floorTexture = new THREE.TextureLoader().load('assets/images/floor2.jpg');
const stairTexture = new THREE.TextureLoader().load('assets/images/stair.jpg');

// Materials
const floorMat= new THREE.MeshStandardMaterial({map:garageFloorTexture});
const floor2Mat= new THREE.MeshStandardMaterial({map:floorTexture});
const stairMat = new THREE.MeshLambertMaterial({map:stairTexture});
const wall1Mat = new THREE.MeshLambertMaterial({map:wall1Texture});
const wall2Mat = new THREE.MeshLambertMaterial({map:wall2Texture});
const doorGMat = new THREE.MeshLambertMaterial({map:garagedoorTexture});
const doorGFMat = new THREE.MeshLambertMaterial({color:0x333333});
const tools1Mat = new THREE.MeshLambertMaterial({map:tools1Texture});
const tools2Mat = new THREE.MeshLambertMaterial({map:tools2Texture});
const tableGMat = new THREE.MeshBasicMaterial({map:garagetableTexture});
const doorMat = new THREE.MeshLambertMaterial({map:doorTexture});

// Dust Particles

function particles() {
  const points = [];

  for (let i = 0; i < 15000; i++) {
    let dust = new THREE.Vector3(
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
      Math.random() * 600 - 300
    );
    dust.velocity = 20;
    dust.acceleration = 20
    points.push(dust);
  }

  dustGeo = new THREE.BufferGeometry().setFromPoints(points);

  let sprite = new THREE.TextureLoader().load("assets/images/dust.png");
  let dustMaterial = new THREE.PointsMaterial({
    color: 0x8c8c8c,
    size: 0.5,
    map: sprite,
  })
  let dustMaterial2 = new THREE.PointsMaterial({
    color: Math.random() * 0x8c8c8c,
    size: 0.5,
    map: sprite,
  });

  dusts = new THREE.Points(dustGeo, dustMaterial);
  scene.add(dusts);
}

// To animate the dusts
function animateParticles() {
      dustGeo.verticesNeedUpdate = true;
      dusts.position.x -= 0.009;
}


// GARAGE
// Floor
const floorGeo = new THREE.BoxGeometry(200,1, 100);
const floor = new THREE.Mesh( floorGeo, floorMat );
floor.position.set(0,0,0);
scene.add(floor);

//Floor 2
const floor2Geo = new THREE.BoxGeometry(100,5, 100);
const floor2 = new THREE.Mesh( floor2Geo, floor2Mat );
floor2.position.set(-50,2.5,0);
scene.add(floor2);

// Garage Wall Front
const wall1Geo = new THREE.BoxGeometry(1, 45, 100);
const wall1 = new THREE.Mesh(wall1Geo, wall1Mat);
wall1.position.set(0,22.5,0);
scene.add(wall1);

// Garage Wall Left
const wall2Geo = new THREE.BoxGeometry(100, 40, 1);
const wall2 = new THREE.Mesh(wall2Geo, wall1Mat);
wall2.position.set(50,20,50);
scene.add(wall2);

// Garage Wall Right
const wall3Geo = new THREE.BoxGeometry(100, 40, 1);
const wall3 = new THREE.Mesh(wall3Geo, wall1Mat);
wall3.position.set(50,20,-50);
scene.add(wall3);

// Garage Wall Back
const wall4Geo = new THREE.BoxGeometry(1, 40, 100);
const wall4 = new THREE.Mesh(wall4Geo, wall1Mat);
wall4.position.set(100,20,0);
scene.add(wall4);

// Kitchen Wall Left
const wall5Geo = new THREE.BoxGeometry(100, 40, 1);
const wall5 = new THREE.Mesh(wall5Geo, wall2Mat);
wall5.position.set(-50,25,50);
scene.add(wall5);

// Kitchen Wall Right
const wall6Geo = new THREE.BoxGeometry(100, 40, 1);
const wall6 = new THREE.Mesh(wall6Geo, wall2Mat);
wall6.position.set(-50,25,-50);
scene.add(wall6);

// Garage Wall Back
const wall7Geo = new THREE.BoxGeometry(1, 40, 100);
const wall7 = new THREE.Mesh(wall7Geo, wall2Mat);
wall7.position.set(-100,25,0);
scene.add(wall7);

// Garage Door
const doorGGeo = new THREE.BoxGeometry(1, 35, 80);
const doorG = new THREE.Mesh(doorGGeo, doorGMat);
doorG.position.set(98,18,0);
scene.add(doorG);

// Garage Door Frame
const doorGFGeo = new THREE.BoxGeometry(2, 38, 83);
const doorGF = new THREE.Mesh(doorGFGeo, doorGFMat);
doorGF.position.set(99.7,18,0);
scene.add(doorGF);

// Stair
const stairGeo = new THREE.BoxGeometry(15,6,15);
const stair = new THREE.Mesh(stairGeo, stairMat);
stair.position.set(8,0,-35);
scene.add(stair);

// Door
const doorGeo = new THREE.BoxGeometry(2,30,15);
const door = new THREE.Mesh(doorGeo, doorMat);
door.position.set(0,16,-35);
scene.add(door);

// Garage Table
const tableG1Geo = new THREE.BoxGeometry(15,2,70);
const tableG1 = new THREE.Mesh(tableG1Geo, tableGMat);
tableG1.position.set(8,12,15);
scene.add(tableG1);

// Garage Table 2
const tableG2Geo = new THREE.BoxGeometry(70,2,15);
const tableG2 = new THREE.Mesh(tableG2Geo, tableGMat);
tableG2.position.set(50.5,12,42.5);
scene.add(tableG2);

// Tools 1
const tools1Geo = new THREE.BoxGeometry(0.5, 20, 40);
const tools1 = new THREE.Mesh(tools1Geo, tools1Mat);
tools1.position.set(0.5,25,15);
scene.add(tools1);

// Tools 2
const tools2Geo = new THREE.BoxGeometry(17, 35, 0.5);
const tools2 = new THREE.Mesh(tools2Geo, tools2Mat);
tools2.position.set(50,20,-49);
scene.add(tools2);

// Tires 1  "Old Tires - Dirt (Low Poly)" (https://skfb.ly/6SWFD)
// by Berk Gedik is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
function tiresModel() {
  const gltfloader = new GLTFLoader();
  gltfloader.load('/GamePitch/assets/models/Tire.glb', function (gltf) {
      tire1 = gltf.scene;
      scene.add(gltf.scene);
  });
}
// Tire 1 Properties
function tire1Prop()  {
  tire1.position.x = 37;
  tire1.position.y = 6.5;
  tire1.position.z = -42;
  tire1.scale.set(13,13,13);
  tire1.rotation.set(0,1.5,0);
}

// Tire 2 "Tire" (https://skfb.ly/6xGxS)\
// by Janrei is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
function tires2Model()  {
  const gltfloader = new GLTFLoader();
  gltfloader.load('/GamePitch/assets/models/tire2.glb', function (gltf) {
      tire2 = gltf.scene;
      scene.add(gltf.scene);
  });
}
// Tire 2 Properties
function tire2Prop()  {
  tire2.position.x = 10;
  tire2.position.y = 3;
  tire2.position.z = 40;
  tire2.scale.set(5,5,5);
  tire2.rotation.set(1,2,0);
}
// Traffic Cone "Traffic cone (Game ready)" (https://skfb.ly/6SqHs)
// by PT34 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
function tConeModel()  {
  const gltfloader = new GLTFLoader();
  gltfloader.load('/GamePitch/assets/models/cone.glb', function (gltf) {
      tCone = gltf.scene;
      scene.add(gltf.scene);
  });
}
// Traffic Cone Properties
function tConeProp()  {
  tCone.position.x = 10;
  tCone.position.y = 3;
  tCone.position.z = 40;
  tCone.scale.set(0.2,0.2,0.2);
}

// Guitar "Fender Stratocaster Guitar"
// (https://skfb.ly/o9u8G) by Ryan_Nein is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
function guitarModel()  {
  const gltfloader = new GLTFLoader();
  gltfloader.load('/GamePitch/assets/models/guitar.glb', function (gltf) {
      guitar = gltf.scene;
      scene.add(gltf.scene);
  });
}
// Guitar Properties
function guitarProp()  {
  guitar.position.x = 19;
  guitar.position.y = 20;
  guitar.position.z = 40;

  guitar.rotateY(0.01);
  guitar.scale.set(5,5,5);
}

// Gaming PC "Custom Gaming PC" (https://skfb.ly/otsTr)
// by Yolala1232 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
function PCModel()  {
  const gltfloader = new GLTFLoader();
  gltfloader.load('/GamePitch/assets/models/pc.glb', function (gltf) {
      pc = gltf.scene;
      scene.add(gltf.scene);
  });
}
// PC Properties
function PCProp()  {
  pc.position.x = 25;
  pc.position.y = 20;
  pc.position.z = 40;

  pc.rotation.y += 0.01;
  pc.scale.set(0.5,0.5,0.5);
}

// Laptop "Gaming Laptop" (https://skfb.ly/6SuwL)
// by Blue Odym is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
function laptopModel()  {
  const gltfloader = new GLTFLoader();
  gltfloader.load('/GamePitch/assets/models/laptop.glb', function (gltf) {
      laptop = gltf.scene;
      scene.add(gltf.scene);
  });
}
// Laptop Properties
function laptopProp()  {
  laptop.position.x = 5;
  laptop.position.y = 13;
  laptop.position.z = 44;
  laptop.rotation.set(0,1.2,0);
  laptop.scale.set(2,2,2);
}

// Boxes 1 "Cardboard Boxes" (https://skfb.ly/osvwn)
// by Monke is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
function boxes1Model()  {
  const gltfloader = new GLTFLoader();
  gltfloader.load('/GamePitch/assets/models/boxes.glb', function (gltf) {
      boxes1 = gltf.scene;
      scene.add(gltf.scene);
  });
}
// Boxes 1 Properties
function boxes1Prop()  {
  boxes1.position.x = 84;
  boxes1.position.y = 0;
  boxes1.position.z = 28;
  boxes1.rotation.set(0,1.2,0);
  boxes1.scale.set(20,20,20);
}

// Slippers "Flip-flops Free" (https://skfb.ly/oAKwW)
// by Tijerín Art Studio is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
function slippersModel()  {
  const gltfloader = new GLTFLoader();
  gltfloader.load('/GamePitch/assets/models/slippers.glb', function (gltf) {
      slippers = gltf.scene;
      scene.add(gltf.scene);
  });
}
// Slippers Properties
function slippersProp()  {
  slippers.position.x = 35;
  slippers.position.y = 20;
  slippers.position.z = 42;

  slippers.rotation.y += 0.01;
  slippers.scale.set(0.2,0.2,0.2);
}

// Origami "Origami Crane" (https://skfb.ly/6RVVN)
// by gaoran0623 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
function origamiModel()  {
  const gltfloader = new GLTFLoader();
  gltfloader.load('/GamePitch/assets/models/origami.glb', function (gltf) {
      origami = gltf.scene;
      scene.add(gltf.scene);
  });
}
// Origami Properties
function origamiProp()  {
  origami.position.x = 45;
  origami.position.y = 20;
  origami.position.z = 42;

  origami.rotation.y += 0.01;
  origami.scale.set(10,10,10);
}

// Bike "Bicycle m." (https://skfb.ly/6Uvp7)
// by Milionna is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
function bikeModel()  {
  const gltfloader = new GLTFLoader();
  gltfloader.load('/GamePitch/assets/models/bike.glb', function (gltf) {
      bike = gltf.scene;
      scene.add(gltf.scene);
  });
}
// Bike Properties
function bikeProp()  {
  bike.position.x = 55;
  bike.position.y = 20;
  bike.position.z = 42;

  bike.rotation.y += 0.01;
  bike.scale.set(1,1,1);
}
// PC Case "Computer Case (Based off of NZXT 510B)" (https://skfb.ly/6VMHt)
// by Up1x is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
function caseModel()  {
  const gltfloader = new GLTFLoader();
  gltfloader.load('/GamePitch/assets/models/case.glb', function (gltf) {
      pcCase = gltf.scene;
      scene.add(gltf.scene);
  });
}
// PC case Properties
function caseProp()  {
  pcCase.position.x = 5;
  pcCase.position.y = 15;
  pcCase.position.z = 15;
  pcCase.rotation.set(0,1.2,0);
  pcCase.scale.set(2,2,2);
}

// CPU Model "Ryzen box" (https://skfb.ly/oq8SZ)
// by matousekfoto is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
function cpuModel()  {
  const gltfloader = new GLTFLoader();
  gltfloader.load('/GamePitch/assets/models/cpu.glb', function (gltf) {
      cpu = gltf.scene;
      scene.add(gltf.scene);
  });
}
// CPU Properties
function cpuProp()  {
  cpu.position.x = 5;
  cpu.position.y = 13;
  cpu.position.z = 20;
  cpu.rotation.set(0,2,0);
  cpu.scale.set(15,15,15);
}

// GPU Model "Rtx 2080 ti" (https://skfb.ly/o7pGT)
// by Temoor is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
function gpuModel()  {
  const gltfloader = new GLTFLoader();
  gltfloader.load('/GamePitch/assets/models/gpu.glb', function (gltf) {
      gpu = gltf.scene;
      scene.add(gltf.scene);
  });
}
// GPU Properties
function gpuProp()  {
  gpu.position.x = 5;
  gpu.position.y = 13;
  gpu.position.z = 30;
  gpu.rotation.set(0,1,0);
  gpu.scale.set(4,4,4);
}

// Motherboard Model "Motherboard - ASUS AMD B550 Ryzen AM4 Gaming ATX" (https://skfb.ly/ovxEx)
// by Lopllll is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
function motherboardModel()  {
  const gltfloader = new GLTFLoader();
  gltfloader.load('/GamePitch/assets/models/motherboard.glb', function (gltf) {
      motherboard = gltf.scene;
      scene.add(gltf.scene);
  });
}
// Motherboard Properties
function motherboardProp()  {
  motherboard.position.x = 5;
  motherboard.position.y = 13;
  motherboard.position.z = 3;
  motherboard.rotation.set(0,1,0);
  motherboard.scale.set(25,25,25);
}

// Storage Model
function storageModel()  {
  const gltfloader = new GLTFLoader();
  gltfloader.load('/GamePitch/assets/models/storage.glb', function (gltf) {
      storage = gltf.scene;
      scene.add(gltf.scene);
  });
}
// Storage Properties
function storageProp()  {
  storage.position.x = 10;
  storage.position.y = 13;
  storage.position.z = -12;
  storage.rotation.set(0,1,0);
  storage.scale.set(0.5,0.5,0.5);
}

// Kitchen Cabinets "Kitchen cabinet 1" (https://skfb.ly/6RzBQ)
// by ms_Butor is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
function kitchenModel()  {
const gltfloader = new GLTFLoader();
  gltfloader.load('/GamePitch/assets/models/kitchen.glb', function (gltf) {
      kitchen = gltf.scene;
      scene.add(gltf.scene);
  });
}
// Kitchen Cabinet Properties
function kitchenProp()  {
  kitchen.position.x = 0;
  kitchen.position.y = 4;
  kitchen.position.z = 48;
  kitchen.rotation.set(0,3.17,0);
  kitchen.scale.set(200,200,200);
}

// Kitchen Counter Model "Counter highpoly" (https://skfb.ly/onNZQ)
// by vapor_ is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
function counterModel()  {
const gltfloader = new GLTFLoader();
  gltfloader.load('/GamePitch/assets/models/counter.glb', function (gltf) {
      counter = gltf.scene;
      scene.add(gltf.scene);
  });
}
// Kitchen Counter Properties
function counterProp()  {
  counter.position.x = -29;
  counter.position.y = 4;
  counter.position.z = 10;
  counter.rotation.set(0,1.57,0);
  counter.scale.set(0.14,0.14,0.14);
}

// Cake Model
function cakeModel()  {
  const gltfloader = new GLTFLoader();
  gltfloader.load('/GamePitch/assets/models/cake.glb', function (gltf) {
      cake = gltf.scene;
      scene.add(gltf.scene);
  });
}
// Cake Properties
function cakeProp()  {
  cake.position.x = -29;
  cake.position.y = 20;
  cake.position.z = 15;

  cake.rotateY(0.01);
  cake.scale.set(5,5,5);
}

// Skateboard Model "Skateboard" (https://skfb.ly/BsFu)
// by Johnson Martin is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
function skateModel()  {
  const gltfloader = new GLTFLoader();
  gltfloader.load('/GamePitch/assets/models/skateboard.glb', function (gltf) {
      skate = gltf.scene;
      scene.add(gltf.scene);
  });
}
// Skateboard Properties
function skateProp()  {
  skate.position.x = 70;
  skate.position.y = 20;
  skate.position.z = 42;

  skate.rotation.y += 0.01;
  skate.scale.set(1,1,1);
}

////////////////////////////////////////////////////////////////////////////////////

camera.position.x = 90;
camera.position.y = 30;
camera.position.z = 0;
camera.lookAt(0,0,0);
controls.update();

function animate() {
    requestAnimationFrame(animate);

    tire1Prop();
    tire2Prop();
    tConeProp();
    guitarProp();
    PCProp();
    laptopProp();
    boxes1Prop();
    slippersProp();
    origamiProp();
    bikeProp();
    caseProp();
    cpuProp();
    gpuProp();
    motherboardProp();
    storageProp();
    kitchenProp();
    counterProp();
    cakeProp();
    skateProp();
    animateParticles();

    controls.update();
    renderer.render(scene, camera);
}

animate();