# Democracy-Works-Upcoming-Elections-Practical-Exercise

**Templates**: I decided to use ejs to build a single web app page for easy accessibility for the user, just in case they wanted to submit again.

**Testing**: I installed Jest for testing but because of time, I didn't finish. I will complete the tests for final production. ``npm run test`` if you would still like to see.

If you want to run it locally, clone this repository and run ``npm install``. Then, run ``npm start`` or ``node app.js``.

Also installed eslint if you like linting. ``npx eslint`` __name_of_file.js__

My helper functions:
  
  + **getElectionsByLocation** : takes two string data type parameters that represent the state and place. The responsibility of this function is to query turbovote api with the correctly formatted ocd-ids and format the data that is being return from the promise for the user.
  + **generateOcdIds** : takes two parameters representing string data type. If only a state is passed in as a value it return a correctly formatted state ocd-id. If both a state and place is passed it also return a correctly formatted state ocd-id with place appended to it.

This app is deployed [here](https://calm-meadow-72015.herokuapp.com/)