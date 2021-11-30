// The entire game world data
const world = {
  blocks: [
    // One block is 58x58
    // The floor
    [0, 974 + 500],
    [1, 974 + 500],
    [2, 974 + 500],
    [3, 974 + 500],
    [4, 974 + 500],
    [5, 974 + 500],
    [6, 974 + 500],
    [7, 974 + 500],
    [8, 974 + 500],
    [9, 974 + 500],
    [10, 974 + 500],
    [11, 974 + 500],
    [12, 974 + 500],
    [13, 974 + 500],
    [14, 974 + 500],
    [15, 974 + 500],
    [16, 974 + 500],
    [17, 974 + 500],
    [18, 974 + 500],
    [19, 974 + 500],
    [20, 974 + 500],
    [21, 974 + 500],
    [22, 974 + 500],

    // A platform
    [0, 800 + 500],
    [1, 800 + 500],
    [2, 800 + 500],
    [3, 800 + 500],
    [4, 800 + 500],
    [5, 800 + 500],
    [6, 800 + 500],
    [7, 800 + 500],
    [8, 800 + 500],
    [9, 800 + 500],
    [10, 800 + 500],
    [11, 800 + 500],
    [12, 800 + 500],
    [13, 800 + 500],
    [14, 800 + 500],
    [15, 800 + 500],
    [16, 800 + 500],
    [16, 800 + 500],
    [17, 800 + 500],
    [18, 800 + 500],
    [19, 800 + 500],
    [20, 800 + 500],
    [21, 800 + 500],

    // Another platform
    [2, 640 + 500],
    [3, 640 + 500],
    [4, 640 + 500],
    [5, 640 + 500],
    [6, 640 + 500],
    [7, 640 + 500],
    [8, 640 + 500],
    [9, 640 + 500],
    [10, 640 + 500],
    [11, 640 + 500],
    [12, 640 + 500],
    [13, 640 + 500],
    [14, 640 + 500],
    [15, 640 + 500],
    [16, 640 + 500],
    [17, 640 + 500],
    [18, 640 + 500],
    [19, 640 + 500],
    [20, 640 + 500],
    [21, 640 + 500],
    [22, 640 + 500],

    // A mini platform
    [0, 466 + 500],
    [1, 466 + 500],
    [2, 466 + 500],
    [3, 466 + 500],

    // An one-block platform
    [5, 300 + 500],

    // Another one-block platform
    [7, 200 + 500],

    // Yet another one-block platform
    [9, 100 + 500],

    // Mini box
    [20, 450 + 500],
    [21, 450 + 500],
    [22, 450 + 500],
    [20, 500 + 500]
  ],
  doors: [
    [300, 710 + 500, "DOGGY"],
    [140, 550 + 500, "CLEAN"],
  ],
  guards: [
    [700, 720 + 500, 1000, "Guard 1", [
      "Oh, by the way, the password for door 1 is DOGGY.",
      "Really?! I think Bowser would win.",
      "Hey, who do you think would win: Bowser or The Hulk?"
    ]],
    [400, 500 + 500, 700, "Guard 2", [
      "Anyway, the password for door 2 is CLEAN.",
      "You like it?!",
      "Have you heard that the Staples Center got renamed to the Crypto.com Arena? Do you like the name?"
    ]],
    [1220, 500 + 500, 1270, "Trap Guard", [
      "MWAHAHAHAHA!",
      "hehe...",
      "You got tricked!"
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
