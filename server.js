const express = require('express');
const app = express();

const routes = require('./src/router');

app.use(express.json());
app.use(routes);

app.listen(3000);