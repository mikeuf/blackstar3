$(document).ready (function( ){

  var game = new Phaser.Game(1280, 800, Phaser.AUTO, 'main9', { preload: preload, create: create, update: update });

  function preload() {
    game.load.image('starfield', 'assets/starfield.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('cabbage', 'assets/cabbage.png');
    game.load.spritesheet('manatee', 'assets/manatee_250.png', 250, 140);    
    game.load.audio('underwaterMusic', 'assets/underwaterMusic.mp3');
    game.load.audio('crunch', 'assets/crunch.mp3');
    game.load.audio('youWinSound', 'assets/youWinSound.mp3');
  }

  var muteFlag = 0;
  var player;
  var platforms;
  var cursors;
  var cabbageSprite = new Array();
  var cabbages;
  var score = 0;
  var scoreText;
  var music;
  var starfieldSprite;
  var NUM_OF_CABBAGES = 12;
  var prevDate = new Date();
  var prevMs = prevDate.getMilliseconds();

  function create() {
    game.scale.scaleMode = Phaser.ScaleManager.aspectRatio;
    game.scale.pageAlignVertically = true;
    game.scale.pageAlignHorizontally = true;
    game.scale.setShowAll();
    game.scale.refresh();

    music = game.add.audio('underwaterMusic',1,true);
    music.play('',0,.7,true);
    crunchSound = game.add.audio('crunch');
    youWinSound = game.add.audio('youWinSound');
    music.play();
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'starfield');

    platforms = game.add.group();
    platforms.enableBody = true;
    player = game.add.sprite(128, game.world.height - 150, 'manatee');
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.5;
    player.body.bounce.x = 0.3;
    player.body.gravity.y = 0;
    player.body.collideWorldBounds = true;
    player.animations.add('left', [2, 1], 5, true);
    player.animations.add('right', [3, 4], 5, true);
    player.inputEnabled = true;      
    player.input.enableDrag(true);

    cabbages = game.add.group();
    cabbages.enableBody = true;

    for (var i = 0; i < NUM_OF_CABBAGES; i++) {
      cabbageSprite[i] = cabbages.create(i * 100, 10, 'cabbage');
      cabbageSprite[i].body.gravity.y = Math.random() * 10;
      cabbageSprite[i].body.bounce.y = 0.7 + Math.random() * 0.2;
      cabbageSprite[i].body.collideWorldBounds = true;
    }

    scoreText = game.add.text(16, 16, 'Feeding time! Click or tap to move', { fontSize: '32px', fill: '#FFF' });

    cursors = game.input.keyboard.createCursorKeys();
    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    muteButton = game.input.keyboard.addKey(Phaser.Keyboard.M);
  }


  function update() {
    game.scale.setShowAll();
    game.scale.refresh();

    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(cabbages, platforms);
    game.physics.arcade.overlap(player, cabbages, collectCabbage, null, this);

    var activePointer = game.input.activePointer;
    var previousDirection = "none";

    if (game.input.activePointer.isDown) {
      game.physics.arcade.moveToPointer(player, 200);

      if (activePointer.x > player.body.x) {
        player.animations.play('right');
      }

      else if (activePointer.x < player.body.x) {
        player.animations.play('left');
      }  

      if (Phaser.Rectangle.contains(player.body, game.input.x, game.input.y)) {
        player.body.velocity.setTo(0, 0);
      } 
      else if (previousDirection == "right") {
        player.body.velocity.setTo(100, 0);
      } 
      else if (previousDirection == "left") {

        player.body.velocity.setTo(-100, 0);
      }
    }
  }

  function collectCabbage (player, cabbage) {
    cabbage.kill();
    crunchSound.play();

    score += 1;
    remaining = NUM_OF_CABBAGES - score;
    scoreText.text = 'Cabbages remaining: ' + remaining;

    if (remaining < 1) {
      game.add.text(520, 400, 'YOU WIN', { fontSize: '64px', fill: '#FFF' });
      youWinSound.play();
    }
  }
}

);
