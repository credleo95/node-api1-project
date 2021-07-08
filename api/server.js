// BUILD YOUR SERVER HERE
const express = require('express'); 
const app = express(); 
module.exports = app // EXPORT YOUR SERVER instead of {}


const User = require('./users/model');



app.use(express.json()); 

app.post('/api/users', async (req, res) => {
const newUser = req.body; 
await User.create(newUser); 

res.status(201).json(newUser)
});

app.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.json(users)
});