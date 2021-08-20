// constructor function - must use the new keyword!
function User(name, score) {
  this.name = name;
  this.score = score;
}

User.prototype.increment = function() {
  this.score++;
}

const user7 = new User('Georgette', 6);
const user8 = new User('Carmelo', 6);