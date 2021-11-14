// Load all the assets
function preload() {
  // Load player sprite
  this.load.image("spy0", "assets/imgs/spy0.png");
  this.load.image("spy1", "assets/imgs/spy1.png");
  this.load.image("spy2", "assets/imgs/spy2.png");

  // Load block sprite
  this.load.image("block", "assets/imgs/block.png");

  // Load bug sprite
  this.load.image("bug", "assets/imgs/bug.png");

  // Load music
  this.load.audio("music", "assets/sfx/mainTheme.mp3");

  // Load SFX
  this.load.audio("shootBug", "assets/sfx/shootBug.mp3");
}
