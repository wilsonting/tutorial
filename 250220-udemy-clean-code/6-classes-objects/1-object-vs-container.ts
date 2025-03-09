let sqlEngine: any;

/** Object oriented */
class Database {
  private uri: string;
  private provider: any;
  public connection: any;

  constructor(uri: string, provider: any) {
    this.uri = uri;
    this.provider = provider;
  }

  connect() {
    try {
      this.connection = this.provider.establishConnection(this.uri);
    } catch (error) {
      throw new Error("Could not connect!");
    }
  }

  disconnect() {
    this.connection.close();
  }
}

const database = new Database("my-database:8100", sqlEngine);
database.connect();

database.connection.close();

/** Data Container - pass in as parameter of objects */
class UserCredentials {
  public email: string;
  public password: string;
}
