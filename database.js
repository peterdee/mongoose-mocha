const mongoose = require('mongoose');

const Item = new mongoose.Schema({
  name: String,
  price: Number,
});

class Database {
  constructor() {
    this.instance = null;
  }

  async connect(connectionString = '', options = {}) {
    if (!this.instance) {
      if (!connectionString) {
        throw new Error('MongoDB connection string was not provided!');
      }

      const connection = await mongoose.createConnection(
        connectionString,
        options,
      ).asPromise();

      if (connection.readyState === 1) {
        console.log('> database connected');
      }

      this.Item = connection.model('Item', Item);
      this.instance = connection;
      return this.instance;
    }
    return this.instance;
  }

  async disconnect(forced = false) {
    if (!this.instance) {
      return null;
    }
    return this.instance.close(forced);
  }

  async dropDatabase() {
    if (!this.instance) {
      return null;
    }
    return this.instance.dropDatabase();
  }
}

module.exports = new Database();
