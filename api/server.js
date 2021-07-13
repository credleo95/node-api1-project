// BUILD YOUR SERVER HERE
const express = require('express'); 
const User = require('./users/model');
const server = express(); 
module.exports = server // EXPORT YOUR SERVER instead of {}

server.use(express.json()); 


server.post('/api/users', (req, res) => {
const newUser = req.body; 
User.insert(newUser)
.then(user => {
if(!user.name || !user.bio){
    res.status(400).json({ message: "Please provide name and bio for the user" });
}else{
    res.status(201).json(user);
}
})
.catch(err => {
    console.log(err)
})
});

server.get('/api/users',  (req, res) => {
    User.find()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.status(500).json({message:"The users information could not be retrieved"})
        console.log(err);
    })
    
});

server.get('/api/users/:id', (req, res) =>{
    const {id} = req.params 
    User.findById(id) 
    .then( user => {
        if(user){
            res.json(user);
        } else{
            res.status(404).json({ message: "The user with the specified ID does not exist" });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message:"Error getting user"});
    })
     
})

server.delete('/api/users/:id', async (req, res) => {
    const {id} = req.params
    User.remove(id)
    .then(user => {
        if(!user){
            res.status(404).json({message:"The user with the specified ID does not exist"})
        }else{
            res.json(user);
        }
       
    })
    .catch(err => {
        console.log(err)
    })
     
});

server.put('/api/users/:id',  (req, res) => {
    const updatedUser = req.body; 
    const {id} = req.params
    User.update(id, updatedUser)
         .then(user => {
            if(!user){ /// if the user id is wrong, this will fire. 
                return  res.status(404).json({message:"The user with the specified ID does not exist"})
             }
            if (!user.name || !user.bio){
                return res.status(400).json({message:"Please provide name and bio for the user"})
                 } 
                
                 
                return res.status(200).json(user); 

            })
         .catch(err => {
             console.log(err);
             res.status(500).json({ message: "The user information could not be modified" });
         })
    
})