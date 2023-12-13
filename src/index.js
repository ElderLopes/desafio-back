import express from 'express';
import cors from 'cors';

import routes from './routes.js';
import './database/index.js'; 

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.use('/', routes);

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
