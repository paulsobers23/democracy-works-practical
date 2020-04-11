const fetch = require('node-fetch');
const generateOcdId = require('./Ocd');

// Responsible for making more than one fetch request if needed
const requestMethod = (method, url, data) => fetch(url, {
  method,
  body: JSON.stringify(data),
  headers: { accept: 'application/json' },
  data: {},
}).then((response) => {
  if (response.status >= 400) {
    return response.json().catch((errResData) => {
      const error = new Error('Something went wrong!');
      error.data = errResData;
      throw error;
    });
  }
  return response;
});

// Query turbovote api correctly for results and clean data
const getElectionsByLocation = async (state, place) => {
  const ocdId = generateOcdId(state, place);

  const url = `https://api.turbovote.org/elections/upcoming?district-divisions=${ocdId}`;

  const response = await requestMethod('GET', url);
  const data = await response.json();

  const results = data.map((elections) => ({
    date: new Date(elections.date).toDateString(),
    type: elections.type,
    description: elections.description,
    url: elections['polling-place-url'],
  }));
  return results;
};

module.exports = getElectionsByLocation;
