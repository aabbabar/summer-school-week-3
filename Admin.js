class Admin extends User {
  constructor(name, score, accessLevel) {
    super(name, score);
    this.accessLevel = accessLevel;
  }

  nukeDatabase() {
    console.log('nuking database...');
  }
}

const admin1 = new Admin('Patty', 9999, 1);
