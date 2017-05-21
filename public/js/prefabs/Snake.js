var SnakeGame = SnakeGame || {};

SnakeGame.Snake = function(state, x, y, data) {
  Phaser.Sprite.call(this, state.game, x, y, data.asset);

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
  }
};

SnakeGame.Snake.prototype.canChangeDirection = function(direction) {
  // Snake can only change direction when one of directions is horizontal
  //   (x is 1 or -1) and the other direction is vertical (x is 0)
  return Boolean(this.direction.x) != Boolean(direction.x)
};

// 
SnakeGame.Snake.prototype.moveForward = function() {
  var i;
  for (i = this.snakeBody.children.length - 1; i > 0; i--) {
    this.snakeBody.children[i].swap(this.snakeBody.children[i - 1]);
  }
  this.snakeBody.children[0].row = this.row;
  this.snakeBody.children[0].col = this.col;

  this.row += this.direction.y;
  this.col += this.direction.x;

  if (this.state.board.isOccupied(this.row, this.col)) {
    SnakeGame.game.state.start('GameState');
    console.log('new game');
    return;
  }

  this.state.board.redraw(this);
  this.state.board.consoleLog();
};


