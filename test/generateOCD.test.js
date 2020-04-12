const generateOcdId = require('../models/Ocd');

const stateOCD = 'FL';
const placeOCD =  'Havana';

test('generateOcdId', () => {
  const ocdId = generateOcdId(stateOCD,placeOCD);
  
  expect(ocdId).toBe('ocd-division/country:us/state:fl/place:havana');
});
