// Create animations, sprites, and colliders
function create() {
  const phaser = this;

  // Keyboard input
  game.cursors = this.input.keyboard.createCursorKeys();
  game.keyPress = (key) => {
    if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(key))) {
      return true;
    } else {
      return false;
    }
  };
  game.possibleKeys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // SFX
  game.sfx.openDoor = this.sound.add("openDoor");

  // SFX
  game.sfx.music = this.sound.add("music");
  game.sfx.shootBug = this.sound.add("shootBug");
  game.sfx.jump = this.sound.add("jump");
  game.sfx.attachBug = this.sound.add("attachBug");
  game.sfx.passwordEnter = this.sound.add("passwordEnter");
  game.sfx.removeBug = this.sound.add("removeBug");

  // Loop background music
  game.sfx.music.setLoop(true);

  // Play music
  game.sfx.music.play({
    volume: 0.3
  });

  // Create player sprite
  game.spy = this.physics.add.sprite(100, 900, "spy0").setScale(3).setSize(17, 24).setOffset(25, 20);

  // Camera and bounds
  this.cameras.main.setBounds(0, 0, 1300, 1000);
  this.physics.world.setBounds(0, 0, 1300, 1000);
  this.cameras.main.startFollow(game.spy, true, 0.1, 0.1);

  // Blocks
  game.blocks = this.physics.add.staticGroup();

  // Bugs
  game.bugs = this.physics.add.group();

  // Guards
  game.guards = this.physics.add.group();

  // Player bounds
  game.spy.setCollideWorldBounds(true);

  // Doors
  game.doors = this.physics.add.staticGroup();

  // Blocks
  game.blocks = this.physics.add.staticGroup();

  // Flashlight beams
  game.flashlightBeams = this.physics.add.group();

  // Create doors
  for (var x = 0; x < world.doors.length; x++) {
    let door = game.doors.create(world.doors[x][0], world.doors[x][1], "door").setScale(2).setSize(5, 115).setOffset(29, -25);
    door.try = "";
    door.password = world.doors[x][2];
    door.tryText = this.add.text(door.x, door.y, "", {
      fontSize: 60,
      fontFamily: "Didact Gothic",
      color: "#000000"
    });
  }

  // Create blocks
  for (var x = 0; x < world.blocks.length; x++) {
    game.blocks.create(world.blocks[x][0] * 58, world.blocks[x][1], "block").setScale(2).setOffset(-1, 0).setSize(58, 58);
  }

  // Create guards
  for (var x = 0; x < world.guards.length; x++) {
    // Create guard
    let guard = game.guards.create(world.guards[x][0], world.guards[x][1], "guard0").setScale(3).setSize(18, 33).setOffset(22, 15);
    guard.startX = world.guards[x][0];
    guard.endX = world.guards[x][2];
    guard.bugged = false;
    guard.setVelocityX(100);

    // Create flashlight beam
    let flashlightBeam = game.flashlightBeams.create(guard.x, guard.y + 80, "flashlightBeam").setScale(3).setGravityY(-config.physics.arcade.gravity.y).setSize(20, 50).setOffset(22, 8);
    guard.beam = flashlightBeam;
  }

  // Folders and files
  game.files = this.physics.add.sprite(world.files[0], world.files[1], "folder").setScale(3).setSize(75, 55).setOffset(-10, 0).setGravityY(-config.physics.arcade.gravity.y);

  // Wind effect
  game.wind = this.physics.add.group();

  // Colliders
  this.physics.add.collider(game.spy, game.blocks);
  this.physics.add.collider(game.spy, game.doors, function(spy, door) {
    game.possibleKeys.forEach(key => {
      if (game.keyPress(Phaser.Input.Keyboard.KeyCodes[key])) {
        game.sfx.passwordEnter.play();
        door.try += key;
        if (door.try === door.password) {
          console.log("Correct");
          game.sfx.openDoor.play();
          door.visible = false;
          door.body.enable = false;
          door.try = "";
        }
        door.tryText.text = door.try;
      }
      if (game.keyPress(Phaser.Input.Keyboard.KeyCodes.BACKSPACE)) {
        game.sfx.passwordEnter.play();
        door.try = door.try.slice(0, -1);
        door.tryText.text = door.try;
      }
    });
    console.log(door.try);
  });
  this.physics.add.collider(game.bugs, game.blocks);
  this.physics.add.collider(game.guards, game.blocks);
  this.physics.add.overlap(game.bugs, game.guards, function(bug, guard) {
    game.sfx.attachBug.play();
    guard.bugged = true;
    bug.destroy();
  });
  this.physics.add.overlap(game.spy, game.guards, function(spy, guard) {
    if (game.keyPress(Phaser.Input.Keyboard.KeyCodes.X) && guard.bugged === true) {
      game.sfx.removeBug.play();
      guard.bugged = false;
      game.bugDeployed = false;
    }
  });
  this.physics.add.overlap(game.spy, game.bugs, function(spy, bug) {
    if (game.keyPress(Phaser.Input.Keyboard.KeyCodes.X)) {
      game.sfx.removeBug.play();
      game.bugDeployed = false;
      bug.destroy();
    }
  });
  this.physics.add.overlap(game.spy, game.flashlightBeams, function(spy, beam) {
    console.log("Game Over");
  });
  this.physics.add.overlap(game.spy, game.files, function(spy, files) {
    if (game.keyPress(Phaser.Input.Keyboard.KeyCodes.C)) {
      game.win = true;
      game.spy.setVelocityX(0);
      game.spy.anims.stop();
      files.setTexture("files");
      setTimeout(function() {
        game.wind.create(0, files.y, "wind0").setScale(3).setGravityY(-config.physics.arcade.gravity.y).setVelocityX(1000);
        setTimeout(function() {
          files.setVelocityX(1000);
        }, 500);
      }, 1000);
      setTimeout(function() {
        phaser.cameras.main.fadeOut(2000, 0, 0, 0);
      }, 2000);
    }
  });

  // Create instructions
  for (var x = 0; x < world.instructions.length; x++) {
    this.add.text(world.instructions[x][0], world.instructions[x][1], world.instructions[x][2], {
      fontSize: 40,
      fontFamily: "Didact Gothic",
      color: "#000000"
    });
  }

  // Animations
  // Spy run
  this.anims.create({
    // Animation key
    key: "run",

    // Frames
    frames: [{
      key: "spy2"
    },
    {
      key: "spy1"
    },
    {
      key: "spy0"
    }],

    // Options
    frameRate: 8,
    repeat: -1
  });

  // Guard walk
  this.anims.create({
    // Animation key
    key: "guardWalk",

    // Frames
    frames: [{
      key: "guard2"
    },
    {
      key: "guard1"
    },
    {
      key: "guard0"
    }],

    // Options
    frameRate: 8,
    repeat: -1
  });

  // Bugged guard walk
  this.anims.create({
    // Animation key
    key: "buggedGuardWalk",

    // Frames
    frames: [{
      key: "buggedGuard2"
    },
    {
      key: "buggedGuard1"
    },
    {
      key: "buggedGuard0"
    }],

    // Options
    frameRate: 8,
    repeat: -1
  });

  // Wind animation
  this.anims.create({
    // Animation key
    key: "wind",

    // Frames
    frames: [{
      key: "wind2"
    },
    {
      key: "wind1"
    },
    {
      key: "wind0"
    }],

    // Options
    frameRate: 8,
    repeat: -1
  });
}
