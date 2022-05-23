function init() {
    scene = new THREE.Scene(); //створення сцени ("система")
    
    var WIDTH = window.innerWidth, HEIGHT = window.innerHeight;
    
    renderer = new THREE.WebGLRenderer({antialias: true}); //створення рендеру
    renderer.setSize(WIDTH, HEIGHT);  //масштабування холсту до розміру вікна
    
    document.body.appendChild(renderer.domElement);
    
    camera = new THREE.PerspectiveCamera(45, WIDTH/ HEIGHT, 0.1,20000); //кут огляду 45 гр., поле зору (0.1, 2000)
    camera.position.set(0, 6, 0); //підняти камеру
    scene.add(camera); //розміщення камери на сцені
    
    window.addEventListener('resize', function() { //обробник подій зміни розміру вікна
        var WIDTH = window.innerWidth, HEIGHT = window.innerHeight; //визначити розміру вікна
       // renderer.setSize(WIDTH, HEIGHT); //масштабування до нового розміру вікна
        camera.aspect = WIDTH / HEIGHT; //зміна співвідношення сторін
        camera.updateProjectMatrix(); 
    });
    
    renderer.setClearColor(0xffb6c1, 1); //встановити колір фону холсту
 
   /* var light = new THREE.PointLight(0xffffff); //створення точкового джерела світла білого кольору
        light.position.set(-100, 200, 100);
    scene.add(light); //розміщення точкового джерела світла на сцені*/
 
    const texture = new THREE.TextureLoader().load( 'coke.png' );
    // immediately use the texture for material creation
    const material = new THREE.MeshBasicMaterial( { map: texture } );


    var cylgeometry = new THREE.CylinderGeometry(3, 3, 7, 7);
    var cylmaterial = new THREE.MeshLambertMaterial();
    var cylmesh = new THREE.Mesh(cylgeometry, cylmaterial); //білий матеріал, що відбиває промені
    
    cylmesh.position.set(0.9, -5, -6);
    scene.add(cylmesh); // розміщення об'єкту на сцені'
    
    controls = new THREE.OrbitControls(camera,renderer.domElement);
}

function animate()
{
    controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
