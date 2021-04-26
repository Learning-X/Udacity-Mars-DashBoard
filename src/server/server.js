require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const path = require('path');
const cors = require('cors');

const port = process.env.PORT || 3000;
const { API_KEY } = process.env;
const baseAPI = 'https://api.nasa.gov/mars-photos/api/v1/rovers';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '/src/public/')));

app.get('/rovers', async (req, res) => {
  const { name } = req.query;
  const data = await fetch(
    `${baseAPI}/${name}/latest_photos?page=1&api_key=${API_KEY}`
  );
  const jsonData = await data.json();

  res.send(jsonData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
