const express = require("express");
const app = express();
const mongoose = require('mongoose');
const supplierController = require('./src/controller/supplierController.js'); 
const routes = require('./src/routes'); 
require('./src/database/index.js');
const cors = require('cors');

const port = 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});