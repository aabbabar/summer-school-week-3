// using object literals to create objects
// works fine when creating a single object
// becomes very repetitive when creating multiple instances

const user2 = {
  name: 'Madeleine',
  score: 2,
  increment: function() {
    user2.score++;
  }
}

const user3 = {};
user3.name = 'Rocco';
user3.score = 5;
user3.increment = function() {
  user3.score++;
}

const user4 = Object.create(null);
user4.name = 'Sanford';
user4.score = 2;
user4.increment = function() {
  user4.score++;
}

