  var scene = new THREE.Scene();

      //Add light
      var light = new THREE.AmbientLight(0xffffff);
      scene.add(light); 
      // axe helper
      // const axesHelper = new THREE.AxesHelper(5);
      // scene.add(axesHelper);

      // Create a camera
      var camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.set(2, 5, -10);
     camera.lookAt(2,3,10);
      
      // Create a renderer
      // var renderer = new THREE.WebGLRenderer( );
      var renderer = new THREE.WebGLRenderer({canvas: document.getElementById("myCanvas")});
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0xffffff);
      renderer.autoClearColor = true;
      document.body.appendChild(renderer.domElement);