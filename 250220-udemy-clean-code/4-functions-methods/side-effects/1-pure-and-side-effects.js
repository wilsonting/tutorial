function generateId(userName) {
  const id = "id_" + userName;
  return id;
}

function generateId(userName) {
  const id = userName + Math.random().toString();
  return id;
}

let lastAssignedId;

//Side effect - global state changed after the function.
function generateId(userName) {
  const id = "id_" + userName;
  lastAssignedId = id;
  return id;
}
