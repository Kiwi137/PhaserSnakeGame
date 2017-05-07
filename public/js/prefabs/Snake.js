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
  var coordinates = [];
  this.body.forEach(function(bodyBlock) {
    coordinates.push({
      row: bodyBlock.row,
      col: bodyBlock.col
    });
  });

  return coordinates;
}

SnakeGame.Snake.prototype.getDirection = function() {
  return this.direction;
}
