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

SnakeGame.Board.prototype.redraw = function(snake) {
  for(i = 0; i < this.rows; i++) {
    for(j = 0; j < this.cols; j++) {
      this.grid[i][j] = 0;
    }
  }

  var coordinates = snake.getCoordinates();
  var head = coordinates[0];
  var direction = snake.getDirection();

  coordinates.forEach(function(coord) {
    this.grid[coord.row][coord.col] = 'x';
  }, this);

  this.grid[head.row][head.col] = direction.symbol;
};

SnakeGame.Board.prototype.notifyChange = function(data) {
  this.grid[data.row][data.col] = data.value;
};

SnakeGame.Board.prototype.isOccupied = function(row, col) {
  if (row < 0 || row >= this.rows || col < 0 || col >= this.cols) {
    return true;
  }

  return this.grid[row][col] !== 0;
}
