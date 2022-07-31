import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './style.css';

function init() {
	const canvas = document.getElementById('canvas') as HTMLCanvasElement;
	const size = { width: window.innerWidth, height: window.innerHeight };
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(
		45,
		size.width / size.height,
		0.1,
		1000
	);
	const renderer = new THREE.WebGLRenderer({ canvas });
	renderer.setSize(size.width, size.height);
	const geometry = new THREE.BoxGeometry(1, 1, 1);
	const material = new THREE.MeshPhongMaterial({ color: 'aqua' });
	const cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
	camera.position.z = 5;
	const directionalLight = new THREE.DirectionalLight('gray');
	directionalLight.position.set(1, 1, 1);
	scene.add(directionalLight);
	const ambientLight = new THREE.AmbientLight('gray');
	scene.add(ambientLight);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.update();
	const animate = () => {
		requestAnimationFrame(animate);
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
    renderer.render(scene, camera);
	};
	animate();
}
init();
