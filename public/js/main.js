var SnakeGame = SnakeGame || {};

SnakeGame.game = new Phaser.Game(640, 400, Phaser.AUTO);

SnakeGame.game.state.add('BootState', SnakeGame.BootState);
SnakeGame.game.state.add('PreloadState', SnakeGame.PreloadState);
SnakeGame.game.state.add('HomeState', SnakeGame.HomeState);
SnakeGame.game.state.add('GameState', SnakeGame.GameState);
SnakeGame.game.state.start('BootState');
