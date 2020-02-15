const express = require('express');
const router = express.Router();

const User = require('../models/users');

//retrieving data
router.get('/users', (req, res, next)=>{
    User.find(function(err, users){
        res.json(users);
    })
});

// add user
router.post('/users', (req, res, next)=>{
    //logic to add user
    let newUser = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    PNR: req.body.PNR

    });

    newUser.save((err, user)=>{
        if(err)
        {
            res.json({msg: 'Failed to add user'});
        }
        else{
            res.json({msg: 'USer added successfully'});
        }
    });
});

//deleting user
router.delete('/users/:id', (req, res, next)=>{
    //logic to remove user
    User.remove({_id: req.params.id}), function(err, result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    }
});

module.exports = router;