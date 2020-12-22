const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls( camera, renderer.domElement );

const geometry = new THREE.ConeGeometry(3.1, 5, 3);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const pyramid = new THREE.Mesh(geometry, material);
scene.add(pyramid);

const edges = new THREE.EdgesGeometry(geometry);
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0xffffff}));
scene.add(line);

camera.position.z = 10;

function getMouseXMovement() {
    let initialX;

    document.addEventListener("click", (event) => {
        console.log(event);
    });
}

// getMouseXMovement();

function animate() {

    requestAnimationFrame(animate);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
