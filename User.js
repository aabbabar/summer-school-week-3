class User {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment() {
    this.score++;
  }

  login() {
    `${this.name} has logged in.`;
  }
}

const user1 = new User('Wilma', 3);