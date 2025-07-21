

      
      // add plane sol
var currentTexture = localStorage.getItem('textureSol'); 

console.log(currentTexture);
//var texture = new THREE.TextureLoader().load("https://cdn.glitch.global/5bd793e6-3c08-44e5-bec2-8b45b68b56c7/parquet.jpg?v=1675152195035");      
var texture = new THREE.TextureLoader().load(currentTexture);
var geometry = new THREE.PlaneGeometry( 10, 15 );
geometry.rotateX(THREE.Math.degToRad(90));
     // geometry.position.set(0,0,-5);
var material = new THREE.MeshBasicMaterial({
  map: texture,
  side: THREE.DoubleSide,
  transparent: true,
  
});
var planeSol = new THREE.Mesh( geometry, material );
planeSol.name = "sol";
scene.add( planeSol );
      planeSol.position.set(0,0,-2.5);
     
    
     
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
   //add process Plane /////////////////////////////////////////////////////////////////
     var scriptTag = document.currentScript;

var url = scriptTag.getAttribute('src').split('?')[1]; // Get query string part of src

var photoParams = new URLSearchParams(url);
var photo = decodeURIComponent(photoParams.get('image')); 
      // var photo = "https://cdn.glitch.global/5bd793e6-3c08-44e5-bec2-8b45b68b56c7/disque_s3m.jpg?v=1675426903770"
      var processTexture = new THREE.TextureLoader().load(photo);
     
      
      var material = new THREE.MeshBasicMaterial( { map: processTexture, side: THREE.DoubledSide  }  );     
      var processPlane = new THREE.PlaneGeometry(4, 4);
     
      let processScreen = new THREE.Mesh(processPlane,material);
      //processScreen.position.set(-2.5,2.5,5);
      processScreen.position.set(2.5,2,-10);

      processScreen.rotateY((THREE.Math.degToRad(170)));
      scene.add(processScreen);
    
      

      
    //  add video///////////////////////////////////////////////////////////////////////////////////
// recup du parametre Url
var scriptTag = document.currentScript;

var url = scriptTag.getAttribute('src').split('?')[1]; // Get query string part of src

var urlParams = new URLSearchParams(url);
var urlVideo = decodeURIComponent(urlParams.get('url'));



// use the url parameter in your code
// ...

//var urlVideo = urlParams.get('url');

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
clip.loop = true;
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
      movieScreen.name = "videoPlane";
      scene.add(movieScreen);
    
     

      
      // changement de sol

 document.getElementById("sol").addEventListener("click", function() {
  switchTexture();
 });          

var lastClickedTextureIndex = 0;      
function switchTexture() { 
   
   console.log("switchTexture")
  // console.log(lastClickedTextureIndex)
 
  var textures = ["https://cdn.glitch.global/5bd793e6-3c08-44e5-bec2-8b45b68b56c7/parquet.jpg?v=1675152195035",
                  "https://cdn.glitch.global/5bd793e6-3c08-44e5-bec2-8b45b68b56c7/carrelage.jpg?v=1675268522240",
                  "https://cdn.glitch.global/5bd793e6-3c08-44e5-bec2-8b45b68b56c7/thermoplastique.jpg?v=1675343582559",
                 "https://cdn.glitch.global/5bd793e6-3c08-44e5-bec2-8b45b68b56c7/marbre.jpg?v=1675343654491",
                 "https://cdn.glitch.global/5bd793e6-3c08-44e5-bec2-8b45b68b56c7/wool.jpg?v=1675343763042"];
// //console.log(textures)
//   // Get the next texture
   var texture = textures[(lastClickedTextureIndex + 1) % textures.length]; 
//   console.log((lastClickedTextureIndex + 1) % textures.length)
  console.log(texture)
  var appliedTexture = new THREE.TextureLoader().load(texture);

  // Update the last clicked texture index
lastClickedTextureIndex = (lastClickedTextureIndex + 1) % textures.length;
  
   // Get the material of the object you want to change
 var materialSol = planeSol.material;    
 // console.log(materialSol)
  // Update the material's map property to switch to the new texture
   materialSol.map = appliedTexture
  // Update the material
  materialSol.needsUpdate = true;
  localStorage.setItem('textureSol',texture);
 // console.log(localstorage.texture)
}

          
//        // add webcam///////////////////////////////////////////////////////////////////
      
//       navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
//       var webcam = document.createElement('video');
//       webcam.id ="webcam";
//             document.getElementById('myCanvas').appendChild(webcam);
//             console.log(document.getElementById('webcam'));
//       webcam.width = 100;
//       webcam.height = 75;
//       webcam.autoplay = true;
      
//           navigator.getUserMedia({
//               video: true
//           }, function (stream) {
//            // console.log(stream)
//               webcam.srcObject = stream;
//           }, function (error) {
//               console.log("Couldn't start video stream.");
//           });
// // installation d'un "moniteur" webcam
//       var planeGeometry = new THREE.PlaneGeometry(2, 1.5);

//       var texture = new THREE.VideoTexture( webcam );
//       texture.minFilter = THREE.LinearFilter;
//       texture.magFilter = THREE.LinearFilter;
//       texture.format = THREE.RGBFormat;

//       var material = new THREE.MeshBasicMaterial( { map: texture, side: THREE.FrontSide  }  );
//       var mesh = new THREE.Mesh( planeGeometry, material );
//       mesh.rotateY((THREE.Math.degToRad(150)));
//       mesh.rotateX((THREE.Math.degToRad(30)))
//       mesh.position.set(-3,6,4)
      
//       scene.add( mesh ); 
      
//       // add recorded video to the back pane/////////////////////////////////////////////////////////
//        // Create an array to hold the recorded chunks
//                 let recordedChunks = [];

//                     // Get the video element that will display the webcam feed
//               const video = document.getElementById("webcam");

//               // Create a MediaRecorder object to handle recording
//               let mediaRecorder;

//               // Get the webcam stream
//               navigator.mediaDevices.getUserMedia({ video: true, audio: false })
//                   .then(stream => {
//                       // Assign the stream to the video element
//                       video.srcObject = stream;
                     
//                   })
//                   .catch(err => {
//                       // Handle any errors
//                       console.error("Error accessing webcam:", err);
//                   });
// // recording indicator
// const recordIndicator = document.getElementById("recording-indicator");
//  let isRecording = false; 
 
//                     // To start recording
//               function startRecording() {
//                   isRecording = true;
//                   recordIndicator.style.display = "block";
//                   mediaRecorder = new MediaRecorder(video.srcObject);
//                   mediaRecorder.ondataavailable = handleDataAvailable;
//                   mediaRecorder.start();
//                 console.log(recordedChunks);
//               }

//               // To stop recording
//               function stopRecording() {
//                  isRecording = false;
//                  recordIndicator.style.display = "none";        
//                  mediaRecorder.stop();
//                  console.log("stop record"+ isRecording);
//               }
//                     // Get the start and stop recording buttons
//               const startButton = document.getElementById("start-recording");
//               const stopButton = document.getElementById("stop-recording");

//               // Add click event listeners to the buttons
//               startButton.addEventListener("click", startRecording);
//               stopButton.addEventListener("click", stopRecording);


// var camCall =0;
// function handleDataAvailable(event) {
  
//   if (camCall<4){
  
//   // Add the recorded chunk to the array
//   recordedChunks.push(event.data);
  
//   // create a blob
//   const recordedBlob = new Blob(recordedChunks);

//   // create url
//   const url = URL.createObjectURL(recordedBlob);
  
//       var clip = document.createElement('video');
//       //clip.id ="clipGlitch";
//       clip.src = url;//"https://cdn.glitch.global/5bd793e6-3c08-44e5-bec2-8b45b68b56c7/Vid%C3%A9o%20(1).mov?v=1674741746926";
//       //clip.src ="https://drive.google.com/file/d/1z75maR3JAGz-kl34ILJC3_pGYzh9TdN4/preview"
//       clip.crossOrigin="anonymous";
//       document.getElementById('myCanvas').appendChild(clip);
//       clip.width = 320;
//       clip.height = 240;
//       clip.autoplay = true;
//       var clipTexture = new THREE.VideoTexture(clip);

//       clipTexture.minfilter = THREE.linearFilter;
//       clipTexture.magfilter = THREE.linearFilter;
    
//       var movieMaterial = new THREE.MeshBasicMaterial({
//         map:clipTexture,
//         side:THREE.FrontSide,
//         toneMapped:false,
//         flipY:true
//       });
      
//       let movieGeometry = new THREE.PlaneGeometry(2.25,2);
//       //let movieGeometry = new THREE.BoxGeometry(5,5,5)
//       let movieScreen = new THREE.Mesh(movieGeometry,movieMaterial);
//       movieScreen.position.set(-5,2,-3*camCall);
//     movieScreen.rotateY((THREE.Math.degToRad(90)));
//       scene.add(movieScreen);
//     camCall++;
//   }
          
// }