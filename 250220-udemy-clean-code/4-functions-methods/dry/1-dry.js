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

//DRY
function inputIsValid(email, password) {
  return emailIsValid(email) && passwordIsValid(password);
}

//DRY
function emailIsValid(email) {
  return email && email.includes("@");
}

//DRY
function passwordIsValid(password) {
  return password && password.trim() !== "";
}

function showErrorMessage(message) {
  console.log(message);
}

function saveUser(email, password) {
  const user = buildUser(email, password);

  database.insert(user);
}

function buildUser(email, password) {
  return {
    email: email,
    password: password,
  };
}
