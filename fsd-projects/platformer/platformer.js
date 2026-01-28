$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(400, 150, 20, 600, "purple")
createPlatform(300, 650, 100, 20, "grey")
createPlatform(150, 525, 100, 20, "grey")
createPlatform(150, 400, 100, 20, "grey")
createPlatform(150, 275, 100, 20, "grey")
createPlatform(300, 150, 100, 20, "grey")
createPlatform(600, 0, 20, 650, "purple")
createPlatform(600, 630, 250, 20, "grey")
createPlatform(1000, 650, 100, 20, "grey")
createPlatform(1250, 590, 100, 20, "grey")
createPlatform(1000, 500, 100, 20, "grey")
createPlatform(830, 300, 20, 330, "purple")
createPlatform(1100, 280, 300, 20, "grey")
createPlatform(950, 380, 100, 20, "grey")
createPlatform(675, 250, 100, 20, "grey")
createPlatform(1200, 150, 100, 20, "grey")
createBadPlatform(620, 610, 210, 20, "red")
createBadPlatform(0, 0, 20, 800, "red")
    // TODO 3 - Create Collectables
createCollectable("diamond", 1230, 100);
createCollectable("max", 330, 105)
createCollectable("max", 180, 230)
createCollectable("max", 180, 355)
createCollectable("max", 180, 480)
createCollectable("kennedi", 480, 200)
createCollectable("kennedi", 480, 300)
createCollectable("kennedi", 480, 400)
createCollectable("kennedi", 480, 500)
createCollectable("kennedi", 480, 600)
createCollectable("database", 700, 200)

    // TODO 4 - Create Cannons
createCannon("left", 560, 1500)
createCannon("top", 710, 1500)
createCannon("top", 860, 1500)
createCannon("right", 330, 2000)
  
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
