        
 // hypothèse 1
      // rotation verticale basculement monobrosse pour chgt disque

         var gltfObject = object.scene.children[0]//; // access the GLTF object
      gltfObject.rotation.x -= 0.05;
          angle += 0.01;
      angle =  THREE.Math.clamp(angle, 0, Math.PI / 2);
      gltfObject.rotation.x = angle; 

