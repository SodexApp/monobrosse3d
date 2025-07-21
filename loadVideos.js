


// create the scene
//var scene = new THREE.Scene();

// create the camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = -10;
camera.position.x = 3;
camera.lookAt(0,2,10);

// create the renderer
// var renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

       // create control
      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.update();
      
       // recuperation du controle  
       function animateOrbitControls() {
        controls.update();
         controls.target.set(0, 2.5, 5);
        //camera.position.z += 0.001;
        renderer.render(scene, camera);
        requestAnimationFrame(animateOrbitControls);
         
      }


// recup du parametre Url
var scriptTag = document.currentScript;
//var urlVideo = decodeURIComponent(scriptElement.dataset);
var url = scriptTag.getAttribute('src').split('?')[1]; // Get query string part of src
var urlParams = new URLSearchParams(url);
// var urlVideo = decodeURIComponent(urlParams.get('url'));
var urlVideo = urlParams.get('url');

console.log("urlde la video  "+ urlVideo);
      //https://cdn.glitch.global/5bd793e6-3c08-44e5-bec2-8b45b68b56c7/Présentation matériel IMG_6548 (1).mov
      var clip = document.createElement('video');
      clip.id ="clipGlitch";

console.log(urlVideo)
    
      clip.src = urlVideo;
     // clip.src = "https://cdn.glitch.global/5bd793e6-3c08-44e5-bec2-8b45b68b56c7/Présentation matériel IMG_6548 (1).mov";
      clip.crossOrigin="anonymous";
      document.getElementById('myCanvas').appendChild(clip);
      //console.log(document.getElementById('clip'));
      clip.width = 320;
      clip.height = 240;
      clip.autoplay = true;
      //var clip = document.getElementById('clipGlitch');
      var clipTexture = new THREE.VideoTexture(clip);

      clipTexture.minfilter = THREE.linearFilter;
      clipTexture.magfilter = THREE.linearFilter;
    
      var movieMaterial = new THREE.MeshBasicMaterial({
        map:clipTexture,
        side:THREE.FrontSide,
        toneMapped:false,
        flipY:true
      });
      
      let movieGeometry = new THREE.PlaneGeometry(5,5);
      //let movieGeometry = new THREE.BoxGeometry(5,5,5)
      let movieScreen = new THREE.Mesh(movieGeometry,movieMaterial);
      movieScreen.position.set(2,2.5,5);
      movieScreen.rotateY((THREE.Math.degToRad(180)));
      movieScreen.name="movieScreen";
      scene.add(movieScreen);
    
     

// // animate the scene
// function animate() {
//   requestAnimationFrame(animate);
//    //comment out the following line to test if the video texture is displayed correctly
//   //animateOrbitControls();
//   renderer.render(scene, camera);
// }
//  animate();