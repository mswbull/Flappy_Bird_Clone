var level = 4;

function setLevel(levelNumber) {
  level = levelNumber;
}

function Pipe() {
  var spacing = random(30, height / 2);
  var centre = random(spacing, height - spacing);

  this.top =  centre - spacing / 2;
  this.bottom = height - (centre + spacing / 2);
  this.x = width;
  this.w = 35;
  this.speed = level;

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}
