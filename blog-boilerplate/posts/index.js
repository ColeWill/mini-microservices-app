const express = require('express');
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
console.log('Posts service started!');

const posts = {}

app.get('/post', (req,res) => {
 res.send(posts);
})

app.post('/post',(req,res) => {
    console.log('post request:',req.body);
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;

    posts[id] = {
        id,title
    };

    res.status(201).send(posts[id])
})

app.listen(4000, ()=>{
    console.log('listening on port 4000');
})