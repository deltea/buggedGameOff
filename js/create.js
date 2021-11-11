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

  // Blocks
  game.blocks = this.physics.add.staticGroup();

  // Bugs
  game.bugs = this.physics.add.group();

  // Player bounds
  game.spy.setCollideWorldBounds(true);


  // Create blocks
  for (var x = 0; x < world.blocks.length; x++) {
    game.blocks.create(world.blocks[x][0] * 58, world.blocks[x][1], "block").setScale(2).setOffset(-1, 0).setSize(58, 58);
  }

  // Colliders
  this.physics.add.collider(game.spy, game.blocks);
  this.physics.add.collider(game.bugs, game.blocks);

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
