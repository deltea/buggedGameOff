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

  // Load bug sprite
  this.load.image("bug", "assets/imgs/bug.png");

  // Load guard sprites
  this.load.image("guard0", "assets/imgs/guard0.png");
  this.load.image("guard1", "assets/imgs/guard1.png");
  this.load.image("guard2", "assets/imgs/guard2.png");

  // Load bugged guard sprites
  this.load.image("buggedGuard0", "assets/imgs/buggedGuard0.png");
  this.load.image("buggedGuard1", "assets/imgs/buggedGuard1.png");
  this.load.image("buggedGuard2", "assets/imgs/buggedGuard2.png");

  // Load flashlight beam
  this.load.image("flashlightBeam", "assets/imgs/flashlightBeam.png");

  // Load exclamation effect
  this.load.image("exclamation", "assets/imgs/exclamation.png");

  // Load music
  this.load.audio("music", "assets/sfx/mainTheme.mp3");

  // Load SFX
  this.load.audio("shootBug", "assets/sfx/shootBug.mp3");
  this.load.audio("jump", "assets/sfx/jump.wav");
  this.load.audio("attachBug", "assets/sfx/bugAttach.mp3");
  this.load.audio("passwordEnter", "assets/sfx/passwordEnter.ogg");
  this.load.audio("removeBug", "assets/sfx/removeBug.mp3");
}
