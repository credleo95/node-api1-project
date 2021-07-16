require('dotenv').config();
const server = require('./api/server');

const port = process.env.PORT || 5000;

// START YOUR SERVER HERE
server.use('/', (req, res) => {
  const messageOfTheWeek =
    process.env.MOTW || 'Waiting on a message for the week!';
  res.send(`API Server is here to stay! ${messageOfTheWeek}
  | Method | URL            | Description                                                                                            |
| ------ | -------------- | ------------------------------------------------------------------------------------------------------ |
| POST   | /api/users     | Creates a user using the information sent inside the request body.                                   |
| GET    | /api/users     | Returns an array users.                                                                                |
| GET    | /api/users/:id | Returns the user object with the specified id.                                                       |
| DELETE | /api/users/:id | Removes the user with the specified id and returns the deleted user.                                 |
| PUT    | /api/users/:id | Updates the user with the specified id using data from the request body. Returns the modified user |
  `);
});
server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
