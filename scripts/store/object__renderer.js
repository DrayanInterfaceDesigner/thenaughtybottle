// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js";
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

// const gltfLoader = new THREE.GLTFLoader();
const loader = new GLTFLoader();
const item_color = location.hash.replace(/#/, "");
let item_gltf

console.log(item_color)

loader.load(`../assets/models/${item_color}/scene.gltf`, function ( gltf ) {
    console.log(gltf.scene)
	scene.add( gltf.scene );
    item_gltf = gltf.scene

}, undefined, function ( error ) {

	console.error( error );

} );

var drawingSurface = document.querySelector( '.item__3D' );
var renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true} );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.outputEncoding = THREE.sRGBEncoding;
drawingSurface.appendChild(renderer.domElement).className = 'item__3D__canvas'
camera.updateProjectionMatrix()


var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.z = 10;
camera.position.y = 1.5;
camera.position.x = -.8;

const hlight = new THREE.AmbientLight(null);
scene.add(hlight);
const directionalLight = new THREE.DirectionalLight(null);
directionalLight.position.set(-5, 1.5, 15);
directionalLight.castShadow = true;

scene.add(directionalLight);
// item_gltf.rotation.y += 0.01;

var animate = function () {
	requestAnimationFrame( animate );
    renderer.setSize( window.innerWidth * 3, window.innerHeight * 3);
    camera.updateProjectionMatrix() 
    renderer.domElement.style.width = ''
    renderer.domElement.style.height = ''

	cube.rotation.x += 0.01;
    item_gltf.position.y = 1;
    item_gltf.position.x = -.1;
	item_gltf.rotation.y += 0.01;
    camera.updateProjectionMatrix()

	renderer.render( scene, camera );
};

animate();