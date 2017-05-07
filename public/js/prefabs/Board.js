var SnakeGame = SnakeGame || {};

SnakeGame.Board = function(state, rows, cols) {
  this.state = state;
  this.rows = rows;
  this.cols = cols;

  //main grid
  this.grid = [];

  var i,j;
  for(i = 0; i < rows; i++) {
    this.grid.push([]);
    for(j = 0; j < cols; j++) {
      this.grid[i].push(0);
    }
  }

};

SnakeGame.Board.prototype.consoleLog = function() {
  var i,j;
  var prettyString = '';

  for(i = 0; i < this.rows; i++) {
    for(j = 0; j < this.cols; j++) {
      prettyString += ' ' + this.grid[i][j];
    }
    prettyString += '\n';
  }

  console.log(prettyString);
};

SnakeGame.Board.prototype.addSnakeToBoard = function(snake) {
  var coordinates = snake.getCoordinates();
  var head = coordinates[0];
  var direction = snake.getDirection();

  coordinates.forEach(function(coord) {
    this.grid[coord.row][coord.col] = 's';
  }, this);

  this.grid[head.row][head.col] = direction;
};
