import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(40, 40, 40);
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh(geometry, material);

export default mesh;