const express = require('express');

const bodyParser = require('body-parser');

const postalAbbreviations = require('./us_state');

const getElectionsByLocation = require('./models/index.js');

const port = process.env.PORT || 8080;

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.set('view engine', 'ejs');


// Render the address ejs file with the states abbreviations from file us_state.js
app.get('/', (req, res) => {
  res.render('address', { states: postalAbbreviations, electionData:null });
});


// When the user submit, should just render the same page with the results if elections is coming up
app.post('/', async (req, res) => {
  try {
    const {
      city, state,
    } = req.body;

    const electionData = await getElectionsByLocation(state, city);

    res.render('address', { states: postalAbbreviations, electionData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => console.log(`Server listening on port ${port}`));
