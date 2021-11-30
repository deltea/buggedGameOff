// The entire game world data
const world = {
  blocks: [
    // One block is 58x58
    // The floor
    [0, 974],
    [1, 974],
    [2, 974],
    [3, 974],
    [4, 974],
    [5, 974],
    [6, 974],
    [7, 974],
    [8, 974],
    [9, 974],
    [10, 974],
    [11, 974],
    [12, 974],
    [13, 974],
    [14, 974],
    [15, 974],
    [16, 974],
    [17, 974],
    [18, 974],
    [19, 974],
    [20, 974],
    [21, 974],
    [22, 974],

    // A platform
    [0, 800],
    [1, 800],
    [2, 800],
    [3, 800],
    [4, 800],
    [5, 800],
    [6, 800],
    [7, 800],
    [8, 800],
    [9, 800],
    [10, 800],
    [11, 800],
    [12, 800],
    [13, 800],
    [14, 800],
    [15, 800],
    [16, 800],
    [16, 800],
    [17, 800],
    [18, 800],
    [19, 800],
    [20, 800],
    [21, 800],

    // Another platform
    [2, 640],
    [3, 640],
    [4, 640],
    [5, 640],
    [6, 640],
    [7, 640],
    [8, 640],
    [9, 640],
    [10, 640],
    [11, 640],
    [12, 640],
    [13, 640],
    [14, 640],
    [15, 640],
    [16, 640],
    [17, 640],
    [18, 640],
    [19, 640],
    [20, 640],
    [21, 640],
    [22, 640],

    // A mini platform
    [0, 466],
    [1, 466],
    [2, 466],
    [3, 466],
  ],
  doors: [
    [300, 710, "DOGGY"],
    [140, 550, "CLEAN"]
  ],
  guards: [
    [700, 720, 1000, "Guard 1", [
      "Oh, by the way, the password for door 1 is DOGGY.",
      "Really?! I think Bowser would win.",
      "Hey, who do you think would win: Bowser or The Hulk?"
    ]],
    [400, 500, 700, "Guard 2", [
      "Anyway, the password for door 2 is CLEAN.",
      "You like it?!",
      "Have you heard that the Staples Center got renamed to the Crypto.com Arena? Do you like the name?"
    ]],
  ],
  instructions: [
    // Add move instructions
    "Use the arrow keys to move.",

    // Add jump instructions
    "Use the up key to jump.",

    // Add deploy and take bug instructions
    "Press the C and X keys to deploy and take a bug.",

    // How to get passwords
    "Deploy the bug onto a guard to eavesdrop on it.",
    "The guards will tell you the password for a door.",

    // How to enter password
    "Type while leaning on a door to enter the password.",

    // The objective
    "Your mission is to retrieve the top-secret files.",
    "Good Luck!"
  ],
  files: [0, 0]
}
