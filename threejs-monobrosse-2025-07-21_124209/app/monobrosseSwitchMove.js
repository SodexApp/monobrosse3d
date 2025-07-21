    //add disque mono cylindrique
      // create a circle with radius of 50 double face
      // const circleGeometry = new THREE.CircleBufferGeometry(1, 32, 0, Math.PI * 2);
      const circleGeometry = new THREE.CylinderGeometry(0.8, 0.8,0.2, 15);
     // circleGeometry .rotateX(THREE.Math.degToRad(90));
      const circleMaterial = new THREE.MeshBasicMaterial({ color:  localStorage.colorDisc, side: THREE.DoubleSide  });
      const circle = new THREE.Mesh(circleGeometry, circleMaterial);   
      scene.add(circle);
      circle.position.set(0,0.1,0);
         
          window.onload = function(){    
            loadObject();
            loadReservoir();
            animateOrbitControls();
          
          }; 
      
 
  var monobrosse; // créer l'objet monobrosse pour l'utiliser apres dans animate et change texture
  var reservoir;
  const groupMono = new THREE.Group();
      
      groupMono.add(circle);
      
        // add imported object  monobrosse 
      
  function handleLoadedObject(gltf) {
  var gltfMat = gltf.material;
  if (Array.isArray(gltfMat)) {
    console.log("The object has multiple materials.");
  } else {
    console.log("The object has a single material.");
  }
}
      // wrap the loader code in a separate function
      function loadObject(){
      var loader = new THREE.GLTFLoader();
      loader.load(
      "https://cdn.glitch.global/75b2ee89-061d-43b5-9e9f-59fd1a843032/monoPaintDisc.glb?v=1673883984689",
       
        function (gltf) {
          monobrosse= gltf;
          console.log("gltf loaded successfully");
          // console.log(gltf.scene.scale);
         //scene.add(monobrosse.scene);
          var gltfObject = monobrosse.scene.children[0]; 
          console.log(gltfObject);    
          gltfObject.position.set(-0.2,-0.2,-0.7);
            // Position the camera  
          // renderer.render(scene, camera);
          //   camera.position.z = -5;  
            groupMono.add(gltfObject);
     
            
         handleLoadedObject(monobrosse);
          console.log(monobrosse);
          return monobrosse;
        },
        undefined,
        function (error) {
          console.log("Error loading gltf:", error);
        }      
      );  
   }  
      // chargement reservoir
            // wrap the loader code in a separate function
      function loadReservoir(){
      var loader = new THREE.GLTFLoader();
      loader.load(
        "https://cdn.glitch.global/5bd793e6-3c08-44e5-bec2-8b45b68b56c7/reservoir.glb?v=1675413937994",
        function (gltf) {
          reservoir= gltf;
          console.log("gltf loaded successfully");
          // console.log(gltf.scene.scale);
         //scene.add(reservoir.scene);
          var gltfObject = reservoir.scene.children[0]; 
          console.log(gltfObject);    
          gltfObject.position.set(-0.2,2.7,-0.7);
          gltfObject.scale.set(0.01,0.01,0.01);
          gltfObject.rotateX(THREE.Math.degToRad(-10));
          
          groupMono.add(gltfObject);
            // Position the camera  
          // renderer.render(scene, camera);
          //   camera.position.z = -5;  
            
         handleLoadedObject(reservoir);
          console.log(reservoir);
          return reservoir;
        },
        undefined,
        function (error) {
          console.log("Error loading gltf:", error);
        }      
      );  
   }     
      scene.add(groupMono);
groupMono.name = "groupMono";
         
     // changement de couleur de la monobrosse
      document.getElementById("disc").addEventListener("click",changeColor);     
        var lastColorClickedIndex = 0
        function changeColor(color) {
        
        var colors =["green","red","blue","lightgreen","purple","white","black"]
      
        var color = colors[(lastColorClickedIndex + 1) % colors.length]; 
        lastColorClickedIndex = (lastColorClickedIndex + 1) % colors.length
        console.log("color")
        var disc = circle.material;
      // Update the material's color property
       disc.color.set(color);
      // Update the material
      material.needsUpdate = true;
      localStorage.setItem('colorDisc',color);
     }
      
      
//  mouvements de la monobrosse 
let animationId ;
//document.getElementById("animate").addEventListener("click",startAnimation);
     

 
function startAnimation() {
  
  
  animationId = requestAnimationFrame(goToStart);
  
}

  let circles = [];     
  function drawCircle(x, y) {
  const circleGeometry = new THREE.CircleBufferGeometry(1, 32, 0, Math.PI * 2);
  circleGeometry.rotateX(THREE.Math.degToRad(90));
  const circleMaterial = new THREE.MeshBasicMaterial({ color: 0xFFE1F5FE, side: THREE.DoubleSide, opacity:0.05, transparent:true});
  const circle = new THREE.Mesh(circleGeometry, circleMaterial);      
  circle.position.set(x, 0, y);      
 // circles.push(circle);
  scene.add(circle);
}
      var angle = 0;
      var tetha = 0;
      var r = 3; // decalage X
      var s = 3; //decalage z
      var g = 0;  // variable pour goToStart
      
      function basculeDown(){
      angle += 0.01;
      angle =  THREE.Math.clamp(angle, 0, Math.PI / 2);
      groupMono.rotation.x = angle; 
        requestAnomationFrame = (basculeDown);
        
      }
      
      function goToStart(){
         //rotation verticale basculement monobrosse pour roulage
  
      //groupMono.rotation.x -= 0.05;
      angle -= 0.01;
      angle =  THREE.Math.clamp(angle, -0.5, Math.PI / 2);
      groupMono.rotation.x = angle;     
        // mouvement vers le point de depart   
        if(groupMono.position.x<4){
          groupMono.position.x =g;
          groupMono.position.z = g;
          groupMono.position.y = g/10;
          //  circle.position.x = g;
          // circle.position.z = g;
          g = g+0.05;
          renderer.render(scene, camera);
          animationId = requestAnimationFrame(goToStart);        
        }
        else{
            basculeDown(); 
            animateGroup(); 
        } 
      }  
       function animateGroup() {
         if (groupMono.position.x >= -4) { 
       
          // move gltf
         groupMono.position.x =r + 0.5 * Math.cos(tetha);
          groupMono.position.z = s+ 0.5 * Math.sin(tetha);
           var abs=groupMono.position.x;
          var ord=groupMono.position.z;     
          var abs=groupMono.position.x;
          var ord=groupMono.position.z;
          drawCircle(abs,ord); 
          tetha += 0.05;
          r = r - 0.01;            
          // render the scene
           renderer.render(scene, camera);

           animationId= requestAnimationFrame(animateGroup);
                        
        }
        else{
        animate2Group()
        }
        controls.enabled = true; 
        
      }
       function animate2Group() {   
          if (s > 0.3) {          
            groupMono.position.z = s;
             var abs=groupMono.position.x;
             var ord=groupMono.position.z;
            
             drawCircle(abs,ord);
        //   circle.position.z = ord
           // console.log(s);        
            s = s - 0.05;
          animationId = requestAnimationFrame(animate2Group); 

           renderer.render(scene, camera);       
        }
        else{
          animate3Group();   
          }
       }
               function animate3Group() {
                // test sur x
                          if (groupMono.position.x <= 4) {
                            groupMono.position.x = r + 0.5 * Math.cos(tetha);
                            groupMono.position.z = s + 0.5 * Math.sin(tetha);
                            var abs=groupMono.position.x;
                            var ord=groupMono.position.z; 
                            // circle.position.x = abs;
                            // circle.position.z = ord;                                  
                            drawCircle(abs,ord);
                            tetha += 0.05;
                            r = r + 0.01;
                          animationId =requestAnimationFrame(animate3Group);
 
                   renderer.render(scene, camera);   
              }
           }
  