var SnakeGame = SnakeGame || {};

// Also serves as the game over state
SnakeGame.HomeState = {
  init: function(score) {
    this.score = score;
  },
  create: function() {
    var background = this.game.add.sprite(0, 0, 'background');
    background.inputEnabled = true;

    background.events.onInputDown.add(function(){
      this.state.start('GameState');
    }, this);

    if (this.score === undefined) {
      var startText = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'start-text');
      startText.anchor.set(0.5);
    } else {
      var style = {font: '35px Arial', fill: '#000'};
      var scoreText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'Your Score is: ' + this.score, style);
      scoreText.anchor.set(0.5);

      var gameoverText = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 100, 'gameover-text');
      gameoverText.anchor.set(0.5);
      var restartText = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 100, 'restart-text');
      restartText.anchor.set(0.5);
    }
  }
};
