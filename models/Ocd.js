// Responsible for generating correctly formatted ocd-ids
const generateOcdIds = (state, place) => {
  const stateOcdId = `ocd-division/country:us/state:${state.toLowerCase()}`;

  if (state && place) {
    const stateOcdPlace = place.replace(/\s+/g, '_').toLowerCase();
    return `${stateOcdId}/place:${stateOcdPlace}`;
  }

  return stateOcdId;
};

module.exports = generateOcdIds;
