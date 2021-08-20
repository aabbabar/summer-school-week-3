// factory functions: Generate objects using a function

// function createUser(name, score) {
//   const newUser = {};
//   newUser.name = name;
//   newUser.score = score;
//   newUser.increment = userFunctions.increment;
// 	 newUser.login = userFunctions.login;
//   return newUser;
// }

// this approach leads to duplicating the methods on every instance
// we can avoid this by using prototypes


function createUser(name, score) {
  const newUser = {};
  Object.setPrototypeOf(newUser, userFunctions);

	// we can do the same as the previous two lines with Object.create
	// const newUser = Object.create(userFunctions);

  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctions = {
  increment: function() {
    this.score++;
  },
  login: function() {
    console.log(`${this.name} has logged in.`);
  }
};

const user5 = createUser('Concepcion', 8);
const user6 = createUser('Bobby', 5);