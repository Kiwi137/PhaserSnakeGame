var SnakeGame = SnakeGame || {};

SnakeGame.SnakeBody = function(state, x, y, data) {
  Phaser.Sprite.call(this, state.game, x, y, data.asset);

  this.game = state.game;
  this.row = data.row;
  this.col = data.col;
};

SnakeGame.SnakeBody.prototype = Object.create(Phaser.Sprite.prototype);
SnakeGame.SnakeBody.prototype.constructor = SnakeGame.SnakeBody;
