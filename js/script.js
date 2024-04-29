import * as THREE from 'three';
const canvas = document.querySelector(".scene");
let style = getComputedStyle(canvas);
// init
const scene = new THREE.Scene();

const axesHelper = new THREE.AxesHelper(3);

scene.add(axesHelper)

// Создаение объекта
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial({ wireframe: true });
const mesh = new THREE.Mesh(geometry, material);



scene.add(mesh);
const width = window.innerWidth, height = window.innerHeight;
// создание камеры
const camera = new THREE.PerspectiveCamera(75, width / height);
camera.position.z = 3;
console.log(mesh.position.distanceTo(camera.position));

scene.add(camera);

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(width, height);
renderer.render(scene, camera)


