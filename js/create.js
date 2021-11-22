// Create animations, sprites, and colliders
function create() {
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

  // Create player sprite
  game.spy = this.physics.add.sprite(500, 500, "spy0").setScale(3).setSize(17, 24).setOffset(25, 20);

  // Camera and bounds
  this.cameras.main.setBounds(0, 0, 1300, 1000);
  this.physics.world.setBounds(0, 0, 1300, 1000);
  this.cameras.main.startFollow(game.spy, true, 0.1, 0.1);

  // Player bounds
  game.spy.setCollideWorldBounds(true);

  // Doors
  game.doors = this.physics.add.staticGroup();

  // Blocks
  game.blocks = this.physics.add.staticGroup();

  // Create doors
  for (var x = 0; x < world.doors.length; x++) {
    let door = game.doors.create(world.doors[x][0], world.doors[x][1], "door").setScale(2).setSize(5, 115).setOffset(29, -25);
    door.try = "";
    door.password = world.doors[x][2];
    door.tryText = this.add.text(door.x, door.y, "", {
      fontSize: 60,
      color: "#000000"
    });
  }

  // Create blocks
  for (var x = 0; x < world.blocks.length; x++) {
    game.blocks.create(world.blocks[x][0] * 58, world.blocks[x][1], "block").setScale(2).setOffset(-1, 0).setSize(58, 58);
  }

  // Colliders
  this.physics.add.collider(game.spy, game.blocks);
  this.physics.add.collider(game.spy, game.doors, function(spy, door) {
    game.possibleKeys.forEach(key => {
      if (game.keyPress(Phaser.Input.Keyboard.KeyCodes[key])) {
        door.try += key;
        if (door.try === door.password) {
          console.log("Correct");
          door.visible = false;
          door.body.enable = false;
          door.try = "";
        }
        door.tryText.text = door.try;
      }
      if (game.keyPress(Phaser.Input.Keyboard.KeyCodes.BACKSPACE)) {
        door.try = door.try.slice(0, -1);
        door.tryText.text = door.try;
      }
    });
    console.log(door.try);
  });

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
}
