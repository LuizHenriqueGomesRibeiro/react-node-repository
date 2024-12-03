import { json } from '../middlewares/json.js';
import express from 'express';

const app = express();

let users = [];

app.get('/users', async (req, res) => {
    console.log(res);
    return res.end();
});

app.post('/users', async (req, res) => {
    console.log(req.body);
    console.log(req.params);
    const { name, email } = req.params;
    users.push({
        id: 1,
        name: name,
        email: email,
    });
    
    return res.writeHead(201).end();
});

app.listen(3333);