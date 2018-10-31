$(document).ready (function( ){



    var game = new Phaser.Game(1280, 800, Phaser.AUTO, 'main9', { preload: preload, create: create, update: update });

    function preload() {

    game.load.image('starfield', 'assets/starfield.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('cabbage', 'assets/cabbage.png');
    game.load.spritesheet('manatee', 'assets/manatee.png', 128, 72);

    }

    var player;
    var platforms;
    var cursors;
    var bullets;
    var cabbages;
    var score = 0;
    var scoreText;

    function create() {

      //  We're going to be using physics, so enable the Arcade Physics system
      game.physics.startSystem(Phaser.Physics.ARCADE);

      //  A simple background for our game
      game.add.sprite(0, 0, 'starfield');

      //  The platforms group contains the ground and the 2 ledges we can jump on
      platforms = game.add.group();

      //  We will enable physics for any object that is created in this group
      platforms.enableBody = true;

/*
      // Here we create the ground.
      var ground = platforms.create(0, game.world.height - 64, 'ground');

      //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
      ground.scale.setTo(2, 2);    

      //  This stops it from falling away when you jump on it
      ground.body.immovable = true;

      //  Now let's create two ledges
      var ledge = platforms.create(400, 400, 'ground');
      ledge.body.immovable = true;

      ledge = platforms.create(-150, 250, 'ground');
      ledge.body.immovable = true;
*/

      // The player and its settings
      player = game.add.sprite(128, game.world.height - 150, 'manatee');

      //  We need to enable physics on the player
      game.physics.arcade.enable(player);

      //  Player physics properties. Give the little guy a slight bounce.
      player.body.bounce.y = 0.2;
      player.body.gravity.y = 20;
      player.body.collideWorldBounds = true;

      //  Our two animations, walking left and right.
      player.animations.add('left', [2, 1], 5, true);
      player.animations.add('right', [3, 4], 5, true);

      //  Finally some stars to collect
      cabbages = game.add.group();

      //  We will enable physics for any star that is created in this group
      cabbages.enableBody = true;

      //  Here we'll create 12 of them evenly spaced apart
      for (var i = 0; i < 12; i++)
      {
        //  Create a star inside of the 'stars' group
        var cabbage = cabbages.create(i * 70, 0, 'cabbage');

        //  Let gravity do its thing
        cabbage.body.gravity.y = Math.random() * 20;


        //  This just gives each star a slightly random bounce value
        cabbage.body.bounce.y = 0.7 + Math.random() * 0.2;

      cabbage.body.collideWorldBounds = true;
      }

      //  The score
      scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#FFF' });

      //  Our controls.
      cursors = game.input.keyboard.createCursorKeys();
      fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    //  Our bullet group
    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(30, 'bullet');
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 1);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('checkWorldBounds', true);


    }

    function update() {

      //  Collide the player and the stars with the platforms
      game.physics.arcade.collide(player, platforms);
      game.physics.arcade.collide(cabbages, platforms);

      //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
      game.physics.arcade.overlap(player, cabbages, collectCabbage, null, this);

      //  Reset the players velocity (movement)
      player.body.velocity.x = 0;

      if (cursors.left.isDown)
      {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
      }
      else if (cursors.right.isDown)
      {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
      }
      else if (fireButton.isDown)
      {
        player.frame = 5;
      }
      else
      {
        //  Stand still
        player.animations.stop();

        player.frame = 3;
      }

      //  Allow the player to jump if they are touching the ground.

      if (cursors.up.isDown)
//      if (cursors.up.isDown && player.body.touching.down)
      {
        player.body.velocity.y = -200;
      } 
     
      else if (cursors.down.isDown)
      {
        player.body.velocity.y = 200;
      } 
    }

    function collectCabbage (player, cabbage) {

      // Removes the star from the screen
      cabbage.kill();

      //  Add and update the score
      score += 10;
      scoreText.text = 'Score: ' + score;

    }
});
