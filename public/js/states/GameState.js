var SnakeGame = SnakeGame || {};

SnakeGame.GameState = {
  init: function() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.NUM_ROWS = 17;
    this.NUM_COLS = 32;
    this.BLOCK_SIZE = this.game.world.width / this.NUM_COLS;
  },
  //load the game assets before the game starts
  preload: function() {
    this.load.image('background', 'assets/images/background.png');
    this.load.image('head', 'assets/images/head.png');
    this.load.image('body', 'assets/images/body.png');
  },
  //executed after everything is loaded
  create: function() {
    this.background = this.game.add.sprite(0, 0, 'background');

    this.board = new SnakeGame.Board(this, this.NUM_ROWS, this.NUM_COLS);

    // group for the blocks that make up the body of the snake
    var snakeBody = this.add.group();
    var i;
    for (i = 5; i < 11; i++) {
      snakeBody.add(new SnakeGame.SnakeBody(this, 100, 50 + i * this.BLOCK_SIZE, {
        asset: 'body',
        row: i,
        col: 16
      }));
    }

    this.player1 = {
      snake: new SnakeGame.Snake(this, 100, 50 + 8 * this.BLOCK_SIZE, {
        asset: 'head',
        row: 4,
        col: 16,
        body: snakeBody
      })
    };

    this.board.addSnakeToBoard(this.player1.snake);

    this.board.consoleLog();
  },
  //this is executed multiple times per second
  update: function() {
  }
};
