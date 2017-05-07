var SnakeGame = SnakeGame || {};

SnakeGame.Snake = function(state, x, y, data) {
  Phaser.Sprite.call(this, state.game, x, y, data.asset);

  this.game = state.game;
  this.state = state;

  this.direction = data.direction || 'n';
  this.row = data.row;
  this.col = data.col;
  this.body = data.body;
};

SnakeGame.Snake.prototype = Object.create(Phaser.Sprite.prototype);
SnakeGame.Snake.prototype.constructor = SnakeGame.Snake;

SnakeGame.Snake.prototype.getCoordinates = function() {
  var coordinates = [{row: this.row, col: this.col}];
  this.body.forEach(function(bodyBlock) {
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
    this.state.board.notifyChange({
      row: this.row,
      col: this.col,
      value: this.direction
    });
  }
};

SnakeGame.Snake.prototype.canChangeDirection = function(direction) {
  return ((this.direction == 'n' || this.direction == 's')
          && (direction == 'w' || direction == 'e'))
      || ((this.direction == 'w' || this.direction == 'e')
          && (direction == 'n' || direction == 's'))
}
