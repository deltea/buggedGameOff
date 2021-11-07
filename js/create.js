// Create animations, sprites, and colliders
function create() {
  // Keyboard input
  game.cursors = this.input.keyboard.createCursorKeys();

  // Create player sprite
  game.spy = this.physics.add.sprite(500, 500, "spy0").setScale(3).setSize(25, 24).setOffset(21, 20);

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
    frameRate: 10,
    repeat: -1
  });
}
