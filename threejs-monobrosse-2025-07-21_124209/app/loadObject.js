var myTool;
var scriptElement = document.currentScript;
var objUrl = decodeURIComponent(scriptElement.dataset.url);

console.log("urlde l'object'  "+objUrl);

function loadTool(callback){

var loader = new THREE.GLTFLoader();
loader.load(objUrl, function(gltf) {
    myTool = gltf;

  var gltfObject = myTool.scene.children[0];
  gltfObject.position.set(0, 0, -5);
 
  scene.add(gltfObject);

  console.log(gltfObject);
 

  
  
   // animate the scene
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();

  });
  


    }

loadTool();


  




//        // create control
//       controls = new THREE.OrbitControls(camera, renderer.domElement);
//       controls.update();
      
//        // recuperation du controle  
//        function animateOrbitControls() {
//         controls.update();
//          controls.target.set(0, 2.5, 5);
//         //camera.position.z += 0.001;
//         renderer.render(scene, camera);
//         requestAnimationFrame(animateOrbitControls);
         
//       }

//  window.onload = function(){    
//            loadTool();
         
//             animateOrbitControls();
          
//           }; 


// console.log(myTool);



// var balaiPlat =  "https://cdn.glitch.global/5bd793e6-3c08-44e5-bec2-8b45b68b56c7/balaiPlat.glb?v=1678443423999";
// var mono =  "https://cdn.glitch.global/75b2ee89-061d-43b5-9e9f-59fd1a843032/monoPaintDisc.glb?v=1673883984689";

// // wrap the loader code in a separate function



//       function loadTool(){
//       var balaiPlat =  "https://cdn.glitch.global/5bd793e6-3c08-44e5-bec2-8b45b68b56c7/balaiPlat.glb?v=1678443423999";  
     
//       var loader = new THREE.GLTFLoader();
//       loader.load(
//        "https://cdn.glitch.global/5bd793e6-3c08-44e5-bec2-8b45b68b56c7/balaiPlat.glb?v=1678443423999",
       
//         function (gltf) {
//           tool= gltf;
//           console.log("gltf loaded successfully");
//           // console.log(gltf.scene.scale);
//          //scene.add(monobrosse.scene);
//           var gltfObject = tool.scene.children[0]; 
//           console.log(gltfObject);
//           gltfObject.scale.set(0.01,0.01,0.01);
//           gltfObject.position.set(-0.2,0,-0.7);
//             // Position the camera  
//           // renderer.render(scene, camera);
//           //   camera.position.z = -5;  
//            scene.add(gltfObject);
     
            
//          handleLoadedObject(tool);
//           console.log("tool  "+tool);
//           return tool;
//         },
//         undefined,
//         function (error) {
//           console.log("Error loading gltf:", error);
//         }      
//       );  
//    } 

//   function handleLoadedObject(gltf) {
//   var gltfMat = gltf.material;
//   if (Array.isArray(gltfMat)) {
//     console.log("The object has multiple materials.");
//   } else {
//     console.log("The object has a single material.");
//   }
// }
//  window.onload = function(){    
//             loadTool();
         
//             animateOrbitControls();
          
//           }; 