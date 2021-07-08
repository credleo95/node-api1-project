// BUILD YOUR SERVER HERE
const express = require('express'); 
const app = express(); 
module.exports = app // EXPORT YOUR SERVER instead of {}


const User = require('./users/model');



app.use(express.json()); 

app.post('/api/users', async (req, res) => {
const newUser = req.body; 
await User.insert(newUser);
res.status(201).json(newUser)
});

app.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.json(users)
});

app.get('/api/users/:id', async (req, res) =>{
    const {id} = req.params 

    const user = await User.findById(id); 
    res.json(user); 
})

app.delete('/api/users/:id', async (req, res) => {
    const {id} = req.params
    const user = await User.remove(id)
    res.json(user); 
});

app.put('/api/users/:id', async (req, res) => {
    const newUser = req.body; 
    const {id} = req.params
         await User.update(id, newUser); 
    res.json(newUser); 
})