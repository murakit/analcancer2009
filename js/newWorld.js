  
  var scene, renderer;
  var stereoEffect;
  var camera;
  var controls;
  var clock = new THREE.Clock();
  
 /* var raycaster = new THREE.Raycaster();
  var mouse = new THREE.Vector2();
  mouse.x = 10000;
  mouse.y = 10000;*/

  setUp();

  function setUp () {
    setupWorld();
    lightSetup();
    //loadCubeMap ('js/Earth/dark-s_' , '.jpg');
    //document.addEventListener('onTouchDown', onTouchDown, false);

  }
  
  function setupWorld() {
    $container = $('#main-container');

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, 1, 0.001, 10000);
    camera.target = new THREE.Vector3(0, 0, 0);
    camera.position.set(50, 100, 0);
    //450
    scene.add(camera);

    renderer = new THREE.WebGLRenderer();
    /*renderer.setSize(window.innerHeight,window.innerWidth);
    document.body.appendChild(renderer.domElement);*/
    renderer.setPixelRatio(window.devicePixelRatio);
    element = renderer.domElement;
    $container.append(element);

    var width  = $container.width();
    var height = $container.height();

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    //stereoEffect.setSize(width, height);

    /*renderer = new THREE.WebGLRenderer({
      antialias : true,
      alpha     : true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    element = renderer.domElement;
    $container.append(element);*/


    /*var width  = $container.width();
    var height = $container.height();

    camera.aspect = width / height;
    camera.updateProjectionMatrix();*/

    /*renderer.setSize(width, height);
    stereoEffect.setSize(width, height);*/


    var loader = new THREE.TextureLoader();
    loader.load( 'img/h5BEkjJNqKL3Djry6jNrxrvd.jpg', function ( texture ) {
    var geometry = new THREE.SphereGeometry( 160, 160, 160 );
    var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5  } );
    material.side = THREE.DoubleSide;
    var mesh = new THREE.Mesh( geometry, material );
    mesh.userData = { URL: "index2.html"};
    scene.add( mesh );
    

} );

//const domEvents	= new THREEx.DomEvents(camera, renderer.domElement)


    var box;
    var boxTexture = new THREE.ImageUtils.loadTexture( 'img/img3.png' );
    boxTexture.wrapS = boxTexture.wrapT = THREE.RepeatWrapping; 
    var boxMaterial = new THREE.MeshBasicMaterial( { map: boxTexture, side: THREE.DoubleSide, transparent:true } );
    var boxGeometry = new THREE.PlaneGeometry( 60, 120);
    box = new THREE.Mesh( boxGeometry, boxMaterial );
    box.position.z=70;
    box.position.y=100;
    box.position.x = -90;
    box.rotation.y = -10;
    box.rotation.x = -70;
    box.userData = { URL: "index2.html"};
    scene.add(box);

    var box;
    var boxTexture = new THREE.ImageUtils.loadTexture( 'img/img2more.png' );
    boxTexture.wrapS = boxTexture.wrapT = THREE.RepeatWrapping; 
    var boxMaterial = new THREE.MeshBasicMaterial( { map: boxTexture, side: THREE.DoubleSide, transparent:true } );
    var boxGeometry = new THREE.PlaneGeometry( 100, 90);
    box = new THREE.Mesh( boxGeometry, boxMaterial );
    box.position.z=90;
    box.position.y=60;
    box.position.x = 65;
    box.rotation.x = 50;
    box.rotation.y = Math.PI / 6;
    box.userData = { URL: "index2.html"};
    scene.add(box);

    var box;
    var boxTexture = new THREE.ImageUtils.loadTexture( 'img/img222.png' );
    boxTexture.wrapS = boxTexture.wrapT = THREE.RepeatWrapping; 
    var boxMaterial = new THREE.MeshBasicMaterial( { map: boxTexture, side: THREE.DoubleSide, transparent:true } );
    var boxGeometry = new THREE.PlaneGeometry( 100, 110);
    box = new THREE.Mesh( boxGeometry, boxMaterial );
    box.position.z=70;
    box.position.y=120;
    box.position.x = -20;
   box.rotation.x = 30.5;
    box.userData = { URL: "index2.html"};
    scene.add(box);

    var box_two;
    var box_twoTexture = new THREE.ImageUtils.loadTexture( 'img/img4.png' );
    //box_twoTexture.wrapS = box_twoTexture.wrapT = THREE.RepeatWrapping; 
    var box_twoMaterial = new THREE.MeshBasicMaterial( { map: box_twoTexture, side: THREE.DoubleSide, transparent: true } );
    var box_twoGeometry = new THREE.PlaneGeometry( 60, 90 );
    box_two = new THREE.Mesh( box_twoGeometry, box_twoMaterial );
    box_two.position.z=75;
    box_two.position.y=-110;
    box_two.position.x = 65;
    box_two.rotation.x = 34;
    
    //box_two.userData = { URL: "index2.html"};
    scene.add(box_two);


    var alana;
    var alanaTexture = new THREE.ImageUtils.loadTexture( 'img/img8.png' );
    alanaTexture.wrapS = alanaTexture.wrapT = THREE.RepeatWrapping; 
    var alanaMaterial = new THREE.MeshBasicMaterial( { map: alanaTexture, side: THREE.DoubleSide,transparent: true } );
    var alanaGeometry = new THREE.PlaneGeometry( 100, 180 );
    alana = new THREE.Mesh( alanaGeometry, alanaMaterial );
    alana.position.z=10;
    alana.position.y=-90;
    alana.position.x = -15;
    alana.rotation.x = 61.2;
    //61
    alana.userData = { URL: "index2.html"};
    scene.add(alana);

    var pa;
    var paTexture = new THREE.ImageUtils.loadTexture( 'img/img12more3.png' );
    paTexture.wrapS = paTexture.wrapT = THREE.RepeatWrapping; 
    var paMaterial = new THREE.MeshBasicMaterial( { map: paTexture, side: THREE.DoubleSide, transparent: true } );
    var paGeometry = new THREE.PlaneGeometry( 120, 100 );
    pa = new THREE.Mesh( paGeometry, paMaterial );
    pa.position.z=-128;
    pa.position.y=-15;
    pa.position.x = 5;
    pa.rotation.x = -25.1;
    pa.userData = { URL: "index2.html"};
    scene.add(pa);

    var anu2;
    var anu2Texture = new THREE.ImageUtils.loadTexture( 'img/rocks1.png' );
    //paTexture.wrapS = anu2Texture.wrapT = THREE.RepeatWrapping; 
    var anu2Material = new THREE.MeshBasicMaterial( { map: anu2Texture, side: THREE.DoubleSide, transparent: true } );
    var anu2Geometry = new THREE.PlaneGeometry( 90, 50 );
    anu2 = new THREE.Mesh( anu2Geometry, anu2Material );
    anu2.position.z=100;
    anu2.position.y=-57;
    anu2.position.x =-30;
    anu2.rotation.y = -3.2;
    anu2.rotation.x = 20;
    anu2.userData = { URL: "index2.html"};
    scene.add(anu2);

    var sphere;
    var sphereGeometry = new THREE.SphereGeometry( 700, 700, 700 );
    var sphereTexture = new THREE.ImageUtils.loadTexture( 'img/stars.png' );
    sphereTexture.wrapS = sphereTexture.wrapT = THREE.RepeatWrapping;
    sphereTexture.repeat.set( 15, 15 );
    var sphereMaterial = new THREE.MeshBasicMaterial( { map: sphereTexture, side: THREE.DoubleSide, transparent:true } );
    sphere= new THREE.Mesh( sphereGeometry, sphereMaterial );
    scene.add( sphere );
    sphere.position.y = 0;
    sphere.position.x = 0;


    var pa;
    var paTexture = new THREE.ImageUtils.loadTexture( 'img/img13.png' );
    paTexture.wrapS = paTexture.wrapT = THREE.RepeatWrapping; 
    var paMaterial = new THREE.MeshBasicMaterial( { map: paTexture, side: THREE.DoubleSide, transparent: true } );
    var paGeometry = new THREE.PlaneGeometry( 110, 60 );
    pa = new THREE.Mesh( paGeometry, paMaterial );
    pa.position.z=-70;
    pa.position.y=100;
    pa.position.x = 20;
    pa.rotation.y = -35;
    pa.rotation.x = -5;
    pa.userData = { URL: "index2.html"};
    scene.add(pa);

    var pa;
    var paTexture = new THREE.ImageUtils.loadTexture( 'img/aaa.png' );
    paTexture.wrapS = paTexture.wrapT = THREE.RepeatWrapping; 
    var paMaterial = new THREE.MeshBasicMaterial( { map: paTexture, side: THREE.DoubleSide, transparent: true } );
    var paGeometry = new THREE.PlaneGeometry( 80, 120 );
    pa = new THREE.Mesh( paGeometry, paMaterial );
    pa.position.z=110;
    pa.position.y=-40;
    pa.position.x = 50;
    pa.rotation.y = 0.8;
    pa.rotation.x = -31;
    //pa.rotation.y = 20.8;
    pa.userData = { URL: "index2.html"};
    scene.add(pa);

    var pa;
    var paTexture = new THREE.ImageUtils.loadTexture( 'img/alana.png' );
    paTexture.wrapS = paTexture.wrapT = THREE.RepeatWrapping; 
    var paMaterial = new THREE.MeshBasicMaterial( { map: paTexture, side: THREE.DoubleSide, transparent: true } );
    var paGeometry = new THREE.PlaneGeometry( 100, 160 );
    pa = new THREE.Mesh( paGeometry, paMaterial );
    pa.position.z=-40;
    pa.position.y=-20;
    pa.position.x = 120;
    pa.rotation.y = -45;
    pa.userData = { URL: "index2.html"};
    scene.add(pa);

    var pa;
    var paTexture = new THREE.ImageUtils.loadTexture( 'img/img7.png' );
    paTexture.wrapS = paTexture.wrapT = THREE.RepeatWrapping; 
    var paMaterial = new THREE.MeshBasicMaterial( { map: paTexture, side: THREE.DoubleSide, transparent: true } );
    var paGeometry = new THREE.PlaneGeometry( 60, 110 );
    pa = new THREE.Mesh( paGeometry, paMaterial );
    pa.position.z=20;
    pa.position.y=-70;
    pa.position.x = -70;
   // pa.rotation.x = 6.8;
    pa.rotation.x = -30.9;
    pa.rotation.y = 20.8;
    pa.userData = { URL: "index2.html"};
    scene.add(pa);

    var pa;
    var paTexture = new THREE.ImageUtils.loadTexture( 'img/img10 copy.png' );
    paTexture.wrapS = paTexture.wrapT = THREE.RepeatWrapping; 
    var paMaterial = new THREE.MeshBasicMaterial( { map: paTexture, side: THREE.DoubleSide, transparent: true } );
    var paGeometry = new THREE.PlaneGeometry( 110, 60 );
    pa = new THREE.Mesh( paGeometry, paMaterial );
    pa.position.z=20;
    pa.position.y=-80;
    pa.position.x = -80;
   // pa.rotation.x = 6.8;
    //pa.rotation.x = 60.5;
    //pa.rotation.y = 25;
    pa.rotation.Z = 20;
    pa.rotation.y = -10.2
    pa.userData = { URL: "index2.html"};
    scene.add(pa);

/*
    var pa;
    var paTexture = new THREE.ImageUtils.loadTexture( 'img/img9.png' );
    paTexture.wrapS = paTexture.wrapT = THREE.RepeatWrapping; 
    var paMaterial = new THREE.MeshBasicMaterial( { map: paTexture, side: THREE.DoubleSide, transparent: true } );
    var paGeometry = new THREE.PlaneGeometry( 100, 80 );
    pa = new THREE.Mesh( paGeometry, paMaterial );
    pa.position.z=60;
    pa.position.y=80;
    pa.position.x = -60;
    pa.rotation.Z = 20;
    pa.rotation.y = -20;
    pa.userData = { URL: "index2.html"};
    scene.add(pa);*/


    var pa;
    var paTexture = new THREE.ImageUtils.loadTexture( 'img/imgcascada2.png' );
    paTexture.wrapS = paTexture.wrapT = THREE.RepeatWrapping; 
    var paMaterial = new THREE.MeshBasicMaterial( { map: paTexture, side: THREE.DoubleSide, transparent: true } );
    var paGeometry = new THREE.PlaneGeometry( 140, 80 );
    pa = new THREE.Mesh( paGeometry, paMaterial );
    pa.position.z=-85;
    pa.position.y=-108;
    pa.position.x = -10;
    pa.rotation.x = 30.5;
    pa.userData = { URL: "index2.html"};
    scene.add(pa);

    var pa;
    var paTexture = new THREE.ImageUtils.loadTexture( 'img/anu4.png' );
    paTexture.wrapS = paTexture.wrapT = THREE.RepeatWrapping; 
    var paMaterial = new THREE.MeshBasicMaterial( { map: paTexture, side: THREE.DoubleSide, transparent: true } );
    var paGeometry = new THREE.PlaneGeometry( 100, 200 );
    pa = new THREE.Mesh( paGeometry, paMaterial );
    pa.position.z=-30;
    pa.position.y=6;
    pa.position.x = -115;
    pa.rotation.y = 10.6;
    pa.userData = { URL: "index2.html"};
    scene.add(pa);



    
    
    //var url	= 'index2.html'
	//THREEx.Linkify(domEvents, box, url)


    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;
    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;
    controls.target.set(0, 5, 0);
    controls.tou
    controls.update();



 



  


   function animate() {
    //box.rotation.x += 0.005;
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    //controls.update();
  }
  animate();
  
  }

function lightSetup() {
    /*var light = new THREE.DirectionalLight( 0xffffff, 1, 100 );
    light.position.set( 0, 1, 0 ); 			
    light.castShadow = true;           
   // VRWorld.scene.add( light );
    light.shadow.mapSize.width = 512;  
    light.shadow.mapSize.height = 512; 
    light.shadow.camera.near = 0.5;    
    light.shadow.camera.far = 500;   */
    var light = new THREE.PointLight( 0xff0000, 1, 100 );
    light.position.set( 50, 50, 50 );
    scene.add( light );
}

function loadCubeMap (prefix, format) {
    var urls = [
      prefix + 'px' + format,
      prefix + 'nx' + format,
      prefix + 'py' + format,
      prefix + 'ny' + format,
      prefix + 'pz' + format,
      prefix + 'nz' + format
    ];
  
    var envCube = new THREE.CubeTextureLoader().load( urls );
    envCube.format = THREE.RGBFormat;
    scene.background = envCube;
    console.log("listo");
  }
/*
  function onTouchDown(event) {
        event.preventDefault();
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(scene.children, true);
        if(raycaster.intersectObjects) {
        //if (intersects.length > 0) {
          raycaster.intersectObjects(scene.children, true);
          console.log("click");
          window.open(intersects[0].object.userData.URL);
        }
    };*/






