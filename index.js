require('dotenv').config();
const server = require('./api/server');

const port = process.env.PORT || 5000;

// START YOUR SERVER HERE
server.use('/', (req, res) => {
  const messageOfTheWeek =
    process.env.MOTW || 'Waiting on a message for the week!';
  res.send(`API Server is here to stay! ${messageOfTheWeek}`);
});
server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
