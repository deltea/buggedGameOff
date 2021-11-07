// Update animations and sprite movement
function update() {
  // Controls
  // Right
  if (game.cursors.right.isDown) {
    // Move right
    game.spy.setVelocityX(350);

    // Move animation
    game.spy.anims.play("run", true);

    // Flip image
    game.spy.flipX = false;
    game.spy.setOffset(25, 20);

    // Left
  } else if (game.cursors.left.isDown) {
    // Move left
    game.spy.setVelocityX(-350);

    // Move animation
    game.spy.anims.play("run", true);

    // Flip image
    game.spy.flipX = true;
    game.spy.setOffset(22, 20);

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
    game.spy.setVelocityY(-800);
  }
}
