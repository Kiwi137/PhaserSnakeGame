var HomeState = {
  create: function() {
    var background = this.game.add.sprite(0,0,'background');
    background.inputEnabled = true;

    background.events.onInputDown.add(function(){
      this.state.start('GameState');
    }, this);

    var style = {font: '35px Arial', fill: '#000'};
    var text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'TOUCH TO START', style);
    text.anchor.set(0.5);
  }
};
