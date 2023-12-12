const mongoose = require("mongoose");

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect('mongodb://localhost:27017/supplier')
      .then(() => {
        console.log('MongoDB connected successfully');
      })
      .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
      });
  }
}

module.exports = new Database();
