// Update animations and sprite movement
function update() {
  // Controls
  // Right
  if (game.cursors.right.isDown) {
    // Move right
    game.spy.setVelocityX(350);

    // Flip image
    game.spy.flipX = false;

    // Dir var
    game.spy.dir = "R";

    // Left
  } else if (game.cursors.left.isDown) {
    // Move left
    game.spy.setVelocityX(-350);
    // Flip image
    game.spy.flipX = true;

    // Dir var
    game.spy.dir = "L";

    // None
  } else {
    // Don't move
    game.spy.setVelocityX(0);

    // Stop anims
    game.spy.setTexture("spy0");
  }

  // Key function
  const keyPress = (key) => {
    if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(key))) {
      return true;
    } else {
      return false;
    }
  };

  // Jump
  if (game.cursors.up.isDown && game.spy.body.blocked.down) {
    // Jump
    game.spy.setVelocityY(-1000);
  }
}
