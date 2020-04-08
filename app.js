const express = require('express');

const bodyParser = require('body-parser');

const port = 8080;

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('address');
});

app.post('/', (req, res) => {
  const {
    street, city, state, zipcode,
  } = req.body;
  console.log(street, city, state, zipcode);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
