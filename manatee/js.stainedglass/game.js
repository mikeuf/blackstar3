
var game = new Phaser.Game(1280, 800, Phaser.AUTO, 'main9', { preload: preload, create: create, update: update });

function preload() {

 game.load.image('starfield', 'assets/starfield.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('cabbage', 'assets/cabbage.png');
    game.load.spritesheet('manatee', 'assets/manatee_250.png', 250, 140);    
    game.load.spritesheet('manateeStainedGlass', 'assets/manatee_stainedGlass.png', 250, 140);    

}

var music;
var cursors;

function create() 
{
/*
music = game.add.audio('underwaterMusic',1,true);
      music.play('',0,.7,true);
      //      music = game.add.audio('underwaterMusic');
      crunchSound = game.add.audio('crunch');
      youWinSound = game.add.audio('youWinSound');

      music.play();
*/

      cursors = game.input.keyboard.createCursorKeys();
      fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

game.add.sprite(0, 0, 'starfield');


// player2
 player2 = game.add.sprite(128, game.world.height - 350, 'manateeStainedGlass');

    //  Input Enable the sprites
    player2.inputEnabled = true;

    //  Allow dragging - the 'true' parameter will make the sprite snap to the center

    player2.input.enableDrag(true);
/*
      player2.body.bounce.y = 0.2;
      player2.body.gravity.y = 40;
      player2.body.collideWorldBounds = true;
*/

      player2.animations.add('left', [2, 1], 5, true);
      player2.animations.add('right', [3, 4], 5, true);

// player 1
 player = game.add.sprite(128, game.world.height - 150, 'manatee');
    player.inputEnabled = true;
    player.input.enableDrag(true);


      player.body.bounce.y = 0.2;
      player.body.gravity.y = 40;
      player.body.collideWorldBounds = true;

      player.animations.add('left', [2, 1], 5, true);
      player.animations.add('right', [3, 4], 5, true);

      player.body.velocity.x = 0;

}

function update()
{

/*
     game.physics.arcade.collide(player, platforms);
      game.physics.arcade.collide(cabbages, platforms);

      game.physics.arcade.overlap(player, cabbages, collectCabbage, null, this);

*/

}
