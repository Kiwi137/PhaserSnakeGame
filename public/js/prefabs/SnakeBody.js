var SnakeGame = SnakeGame || {};

SnakeGame.SnakeBody = function(state, x, y, data) {
  Phaser.Sprite.call(this, state.game, x, y, data.asset);

  this.game = state.game;
  this.row = data.row;
  this.col = data.col;
};

SnakeGame.SnakeBody.prototype = Object.create(Phaser.Sprite.prototype);
SnakeGame.SnakeBody.prototype.constructor = SnakeGame.SnakeBody;

SnakeGame.SnakeBody.prototype.swap = function(other) {
  var tempRow = this.row;
  var tempCol = this.col;
  this.row = other.row;
  this.col = other.col;
  other.row = tempRow;
  other.col = tempCol;
}
