// Create animations, sprites, and colliders
function create() {
  // Keyboard input
  game.cursors = this.input.keyboard.createCursorKeys();

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
    game.doors.create(world.doors[x][0], world.doors[x][1], "door").setScale(2).setSize(5, 115).setOffset(29, -25);
  }

  // Create blocks
  for (var x = 0; x < world.blocks.length; x++) {
    game.blocks.create(world.blocks[x][0] * 58, world.blocks[x][1], "block").setScale(2).setOffset(-1, 0).setSize(58, 58);
  }

  // Colliders
  this.physics.add.collider(game.spy, game.blocks);
  this.physics.add.collider(game.spy, game.doors, function(spy, door) {
    console.log("Touching door");
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
