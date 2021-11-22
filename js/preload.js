// Load all the assets
function preload() {
  // Load player sprite
  this.load.image("spy0", "assets/imgs/spy0.png");
  this.load.image("spy1", "assets/imgs/spy1.png");
  this.load.image("spy2", "assets/imgs/spy2.png");

  // Load door sprite
  this.load.image("door", "assets/imgs/door.png");

  // Load block sprite
  this.load.image("block", "assets/imgs/block.png");

  // Load open door sound
  this.load.audio("openDoor", "assets/sfx/openDoor.ogg");
}
