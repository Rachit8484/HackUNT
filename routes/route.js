const express = require('express');
const router = express.Router();

//retrieving data
router.get('/users', (req, res, next)=>{
    res.send('Retrieving the user list');
});

// add user
router.post('/contact', (req, res, next)=>{
    //logic to add contact
});

//deleting user
router.delete('/contact/:id', (req, res, next)=>{
    //logic to remove contact
});

module.exports = router;