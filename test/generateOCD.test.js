const generateOcdId = require('../models/Ocd');

const stateOCD = 'ocd-division/country:us/state:fl';
const placeOCD = 'ocd-division/country:us/state:fl/place:havana';


test('generateOcdId', (state, place) => {
  expect(generateOcdId(stateOCD, placeOCD)).toMatch('ocd-division/country:us/state:fl/place:havana');
});
