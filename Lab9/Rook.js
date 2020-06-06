var glCanvas = document.getElementById("glcanvas");
var scene = new THREE.Scene({color: 0xffffff});
var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000);
var material = new THREE.MeshPhongMaterial({color: 0x090909});
var controls;

// Base
lowerBottom = new THREE.CylinderGeometry(1, 1, 0.3, 100);
upperBottom = new THREE.CylinderGeometry(0.95, 1, 0.2, 100);
lowerBottomMesh = new THREE.Mesh(lowerBottom, material);
upperBottomMesh = new THREE.Mesh(upperBottom, material);
lowerBottomMesh.position.y = -0.2;

base = new THREE.Group();
base.add(lowerBottomMesh);
base.add(upperBottomMesh);

base.position.set(0, -3.75, 0);
base.scale.set(3,2,2);

// Body
middle1 = new THREE.CylinderGeometry(1.2, 1.4, 1, 100);
middle2 = new THREE.CylinderGeometry(1.05, 1.2, 1, 100);
middle3 = new THREE.CylinderGeometry(1, 1.05, 1, 100);
middle4 = new THREE.CylinderGeometry(0.95, 1, 2, 100);
middle1Mesh = new THREE.Mesh(middle1, material);
middle2Mesh = new THREE.Mesh(middle2, material);
middle3Mesh = new THREE.Mesh(middle3, material);
middle4Mesh = new THREE.Mesh(middle4, material);
middle1Mesh.position.set(0, -2.5, 0);
middle2Mesh.position.set(0, -1.5, 0);
middle3Mesh.position.set(0, -0.5, 0);
middle4Mesh.position.set(0, 1, 0);

body = new THREE.Group();
body.add(middle1Mesh);
body.add(middle2Mesh);
body.add(middle3Mesh);
body.add(middle4Mesh);


body.scale.set(2.1,1.25,1.25);

// Head
lowerTop = new THREE.CylinderGeometry(1.1, 1, 0.5, 100);
upperTop = new THREE.CylinderGeometry(1.4, 1.4, 1.5, 100);
lowerTopMesh = new THREE.Mesh(lowerTop, material);
upperTopMesh = new THREE.Mesh(upperTop, material);
lowerTopMesh.position.set(0, 0, 0);
upperTopMesh.position.set(0, 1, 0);


head = new THREE.Group();
head.add(lowerTopMesh);
head.add(upperTopMesh);

head.position.set(0, 3, 0);
head.scale.set(2.1,1.25,1.25);

// Render objects
var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function render() {
	requestAnimationFrame(render);
    renderer.render(scene, camera);
}

var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-15, 10, 9);
camera.add(light);


// Add to scene
scene.add(camera);
scene.add(base);
scene.add(body);
scene.add(head);
camera.position.z = 8;
render();