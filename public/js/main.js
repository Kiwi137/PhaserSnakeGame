var SnakeGame = SnakeGame || {};

SnakeGame.game = new Phaser.Game(640, 360, Phaser.AUTO);

SnakeGame.game.state.add('BootState', BootState);
SnakeGame.game.state.add('PreloadState', PreloadState);
SnakeGame.game.state.add('HomeState', HomeState);
SnakeGame.game.state.add('GameState', SnakeGame.GameState);
SnakeGame.game.state.add('GameOverState', SnakeGame.GameOverState);
SnakeGame.game.state.start('BootState');
