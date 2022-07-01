const express = require("express"),
  router = express.Router();


router.route('/home')
.get((req,res)=> {
    res.status(200).type('text/plaid')
    res.send('hello')
})
.post((req,res)=> {
    res.status(200).type('text/plaid')
    res.send('create home request')
})
.delete((req,res)=> {
    res.status(200).type('text/plaid')
    res.send('delete home request')
})
.put((req,res)=> {
    res.status(200).type('text/plaid')
    res.send('update home request')
})

module.exports = router