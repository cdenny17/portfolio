var floorShape = new THREE.PlaneBufferGeometry(150, 150, 1);
var floorColor = new THREE.MeshLambertMaterial({
    color: 0x9FB4C7
});

floor = new THREE.Mesh (floorShape, floorColor);
floor.receiveShadow = true;
// scene.add(floor);
floor.rotation.x = -1.5708;
floor.position.y = -8.6;
floor.position.z = -15;