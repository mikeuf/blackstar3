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
    var NUM_OF_CABBAGES = 12;

    function create() {

      game.physics.startSystem(Phaser.Physics.ARCADE);

      game.add.sprite(0, 0, 'starfield');

      platforms = game.add.group();

      platforms.enableBody = true;


      player = game.add.sprite(128, game.world.height - 150, 'manatee');

      game.physics.arcade.enable(player);

      player.body.bounce.y = 0.2;
      player.body.gravity.y = 20;
      player.body.collideWorldBounds = true;

      player.animations.add('left', [2, 1], 5, true);
      player.animations.add('right', [3, 4], 5, true);

      cabbages = game.add.group();

      cabbages.enableBody = true;

      for (var i = 0; i < NUM_OF_CABBAGES; i++)
      {
        var cabbage = cabbages.create(i * 70, 0, 'cabbage');

        cabbage.body.gravity.y = Math.random() * 20;

        cabbage.body.bounce.y = 0.7 + Math.random() * 0.2;

        cabbage.body.collideWorldBounds = true;
      }

      scoreText = game.add.text(16, 16, 'Feeding time!', { fontSize: '32px', fill: '#FFF' });

      cursors = game.input.keyboard.createCursorKeys();
      fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

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

      game.physics.arcade.collide(player, platforms);
      game.physics.arcade.collide(cabbages, platforms);

      game.physics.arcade.overlap(player, cabbages, collectCabbage, null, this);

      player.body.velocity.x = 0;

      if (cursors.left.isDown)
      {
        player.body.velocity.x = -150;

        player.animations.play('left');
      }
      else if (cursors.right.isDown)
      {
        player.body.velocity.x = 150;

        player.animations.play('right');
      }
      else if (fireButton.isDown)
      {
        player.frame = 5;
      }
      else
      {
        player.animations.stop();

        player.frame = 3;
      }


      if (cursors.up.isDown)
      {
        player.body.velocity.y = -200;
      } 

      else if (cursors.down.isDown)
      {
        player.body.velocity.y = 200;
      } 
    }

    function collectCabbage (player, cabbage) {

      cabbage.kill();

      score += 1;
      remaining = NUM_OF_CABBAGES - score;
      scoreText.text = 'Cabbages remaining: ' + remaining;

if (remaining < 1)
{
  scoreText.text = "You win!";
}

    }
});
