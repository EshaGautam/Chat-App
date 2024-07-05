const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res, next) => {
    
    fs.readFile('chats.txt','utf8',(err,data)=>{
        if(err){
            console.log(err)
            data='no chats'
        }
        res.send(`
            <h1>${data}</h1>
            <form action="/" method="POST" onsubmit="document.getElementById('username').value = localStorage.getItem('username')">
                <label>Message:
                    <input type="text" name="message" id="message">
                </label>
                <input type="hidden" name="username" id="username">
                <button type="submit">Send</button>
            </form>
        `);
    })
   
});

router.post('/', (req, res, next) => {
    const { username, message } = req.body;

    fs.writeFile('chats.txt',`${username}: ${message}`,{flag:'a'},(err)=>{
        if(err){
            console.log(err)
        }
        res.redirect('/');
    })
  
});


module.exports = router;
