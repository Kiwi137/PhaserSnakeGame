var SnakeGame = SnakeGame || {};

SnakeGame.GameState = {
  init: function() {
    this.NUM_ROWS = 17;
    this.NUM_COLS = 32;
    this.BLOCK_SIZE = this.game.world.width / this.NUM_COLS;

    this.NORTH = {
      x: 0,
      y: -1,
      symbol: 'n'
    };

    this.SOUTH = {
      x: 0,
      y: 1,
      symbol: 's'
    };

    this.EAST = {
      x: 1,
      y: 0,
      symbol: 'e'
    };

    this.WEST = {
      x: -1,
      y: 0,
      symbol: 'w'
    };

    this.cursors = this.game.input.keyboard.createCursorKeys();
  },
  //executed after everything is loaded
  create: function() {
    //this.background = this.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'grass');
    this.board = new SnakeGame.Board(this, this.NUM_ROWS, this.NUM_COLS);

    // group for the blocks that make up the body of the snake
    var snakeBody = this.add.group();
    var i;
    for (i = 5; i < 11; i++) {
      snakeBody.add(new SnakeGame.SnakeBody(this, 16 * this.BLOCK_SIZE, i * this.BLOCK_SIZE, {
        asset: 'body',
        row: i,
        col: 16
      }));
    }

    this.player = {
      snake: new SnakeGame.Snake(this, 16 * this.BLOCK_SIZE, 4 * this.BLOCK_SIZE, {
        asset: 'head',
        row: 4,
        col: 16,
        body: snakeBody
      })
    };

    this.game.add.existing(this.player.snake);
    this.board.redraw(this.player.snake);
    this.board.consoleLog();
  },
  //this is executed multiple times per second
  update: function() {
    // check to see if any arrow key is pressed and change
    //   direction if possible
    if(this.cursors.left.isDown) {
      this.player.snake.changeDirection(this.WEST);
    } else if(this.cursors.right.isDown) {
      this.player.snake.changeDirection(this.EAST);
    } else if(this.cursors.up.isDown) {
      this.player.snake.changeDirection(this.NORTH);
    } else if(this.cursors.down.isDown) {
      this.player.snake.changeDirection(this.SOUTH);
    }

    var isDead = this.player.snake.moveForward();
    if (!isDead) {
      this.board.redraw(this.player.snake);
    }
  },
  gameOver: function() {
    this.state.start('GameOverState', true, false, 'GAME OVER!');
  }
};
