const postalAbbreviations = require('./us_state.js');

test('postalAbbreviations', () => {
  expect(postalAbbreviations.length).toEqual(61);
});
