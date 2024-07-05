const express = require ('express')
const router = express.Router()


router.get('/login', (req, res, next) => {
    res.send(`
        <form action="/login" method="POST" onsubmit="localStorage.setItem('username', document.getElementById('username').value)">
            <label>Enter UserName:
                <input type="text" name="username" id="username">
                  </label>
            <button type="submit">Submit</button>
        </form>
    `);
    // res.redirect('/')
});

router.post('/login', (req, res, next) => {
    res.redirect('/')
});


module.exports = router