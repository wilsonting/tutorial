function createUser(email, password) {
  if (!inputIsValid(email, password)) {
    showErrorMessage("Invalid input!");
    return;
  }

  saveUser(email, password);
}

function createSupportChannel(email) {
  if (!emailIsValid(email)) {
    showErrorMessage("Invalid email - could not create channel");
  }
  // ...
}

function inputIsValid(email, password) {
  return emailIsValid(email) && passwordIsValid(password);
}

function emailIsValid(email) {
  return email && email.includes("@");
}

function passwordIsValid(password) {
  return password && password.trim() !== "";
}

function showErrorMessage(message) {
  console.log(message);
}

//better way to manage user data
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  save() {
    database.insert(this);
  }
}

function saveUser(email, password) {
  //good practice - same level of abstraction
  const user = new User(email, password);

  user.save();
}

//redundent - same level of abstraction
//not improving readability
function buildUser(email, password) {
  return {
    email: email,
    password: password,
  };
}
