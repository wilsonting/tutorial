//Type Aliases
type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

function add(a: number, b: number) {
  var result = a + b;
  return result;
}

//interface being used to define object types
interface Credentials {
  password: string;
  email: string;
}
/**
 * interface - declaration merging
 * useful in common library, to let developer to redefine the interface
 */
interface Credentials {
  mode: string;
}

let creds: Credentials;
creds = {
  password: "abc",
  email: "a@gmail.com",
  mode: "handphone",
};

// interface can be inherited by class component
class AuthCredentials implements Credentials {
  password: string;
  email: string;
  mode: string;
}

// interface can be used as type as well
function login(credentials: Credentials) {}

//interface can be passed with defined object
login(creds);
//child class that inherits interface is allowed to pass as parameter as well
login(new AuthCredentials());

// type Admin = {
//   permissions: string[];
// };

// type AppUser = {
//   userName: string;
// };

// //merge types
// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;
// admin = {
//   permissions: ["Login"],
//   userName: "Wilson",
// };

interface Admin {
  permissions: string[];
}

interface AppUser {
  userName: string;
}
// extend interface - copy the properties and methods of one interface to another
interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;
admin = {
  permissions: ["Login"],
  userName: "Wilson",
};

//literal types
type Role = "admin" | "user" | "editor";

let role: Role;

function performAction(action: string | number, role: Role) {
  //type guards
  if (role === "admin" && typeof action === "string") {
  }
}

//Array<T> : build in generic types
let roles: Array<Role>;

//Custom generic types
type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<Role> = {
  storage: [],
  add(role) {},
};

//generic function - merge two properties
function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const user = merge({ name: "Wilson" }, { age: 24 });
