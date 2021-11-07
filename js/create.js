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

  // Animations
  // Run
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
