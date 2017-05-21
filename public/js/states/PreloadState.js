var PreloadState = {
  //load the game assets before the game starts
  preload: function() {
    this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 50, 'logo');
    this.logo.anchor.setTo(0.5);

    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 50, 'preloadBar');
    this.preloadBar.anchor.setTo(0.5);
    this.load.setPreloadSprite(this.preloadBar);

    this.load.image('background', 'assets/images/background.png');
    this.load.image('body', 'assets/images/body.png');
    this.load.image('food', 'assets/images/food.png');
    this.load.spritesheet('head', 'assets/images/head.png', 20, 20, 4); 
  },
  create: function() {
    this.state.start('HomeState');
  }
};
