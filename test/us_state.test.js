const postalAbbreviations = require('../us_state.js');

test('postalAbbreviations', () => {
  expect(postalAbbreviations.length).toBe(61);
});
