var SnakeGame = SnakeGame || {};

SnakeGame.game = new Phaser.Game(640, 360, Phaser.AUTO);

SnakeGame.game.state.add('GameState', SnakeGame.GameState);
SnakeGame.game.state.start('GameState');
