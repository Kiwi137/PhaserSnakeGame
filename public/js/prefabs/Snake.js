var SnakeGame = SnakeGame || {};

SnakeGame.Snake = function(state, x, y, data) {
  Phaser.Sprite.call(this, state.game, x, y, data.asset, 3);

  this.state = state;
  this.direction = data.direction || this.state.NORTH;
  this.row = data.row;
  this.col = data.col;
  this.snakeBody = data.body;
};

SnakeGame.Snake.prototype = Object.create(Phaser.Sprite.prototype);
SnakeGame.Snake.prototype.constructor = SnakeGame.Snake;

SnakeGame.Snake.prototype.getCoordinates = function() {
  var coordinates = [{row: this.row, col: this.col}];
  this.snakeBody.forEach(function(bodyBlock) {
    coordinates.push({
      row: bodyBlock.row,
      col: bodyBlock.col
    });
  });

  return coordinates;
};

SnakeGame.Snake.prototype.getDirection = function() {
  return this.direction;
};

SnakeGame.Snake.prototype.changeDirection = function(direction) {
  if (this.canChangeDirection(direction)) {
    this.direction = direction;

    switch (this.direction.symbol) {
      case 'n':
        this.frame = 3;
        break;
      case 's':
        this.frame = 1;
        break;
      case 'e':
        this.frame = 2;
        break;
      case 'w':
        this.frame = 0;
        break;
    }
  }
};

SnakeGame.Snake.prototype.canChangeDirection = function(direction) {
  // Snake can only change direction when one of directions is horizontal
  //   (x is 1 or -1) and the other direction is vertical (x is 0)
  return Boolean(this.direction.x) != Boolean(direction.x)
};

// 
SnakeGame.Snake.prototype.moveForward = function(food) {
  if (this.isMoving) {
    return undefined;
  }

  this.isMoving = true;

  var i, snakeMovement, previousBlock;
  for (i = this.snakeBody.children.length - 1; i > 0; i--) {
    previousBlock = this.snakeBody.children[i - 1];
    snakeMovement = SnakeGame.game.add.tween(this.snakeBody.children[i]);
    snakeMovement.to({ x: previousBlock.x, y: previousBlock.y }, 200);
    this.snakeBody.children[i].swap(previousBlock);
    snakeMovement.start();
  }

  if (food && food.row === this.row + this.direction.y
      && food.col === this.col + this.direction.x) {
    var tailRow = this.snakeBody.children[0].row;
    var tailCol = this.snakeBody.children[0].col;
    this.snakeBody.add(new SnakeGame.SnakeBody(this.state, tailCol * this.state.BLOCK_SIZE, tailRow * this.state.BLOCK_SIZE, {
      asset: 'body',
      row: tailRow,
      col: tailCol
    }));

    this.state.placeFood();
  }

  snakeMovement = SnakeGame.game.add.tween(this.snakeBody.children[0]);
  snakeMovement.to({ x: this.x, y: this.y }, 200);
  this.snakeBody.children[0].row = this.row;
  this.snakeBody.children[0].col = this.col;
  snakeMovement.start();
  
  this.row += this.direction.y;
  this.col += this.direction.x;
  snakeMovement = SnakeGame.game.add.tween(this);
  snakeMovement.to({ x: this.col * this.state.BLOCK_SIZE, y: this.row * this.state.BLOCK_SIZE }, 200);
  snakeMovement.onComplete.add(function(){
    this.isMoving = false;
  }, this);
  snakeMovement.start();

  if (this.state.board.isOccupied(this.row, this.col)) {
    return true;
  }

  this.state.board.redraw(this);
  //this.state.board.consoleLog();
};
