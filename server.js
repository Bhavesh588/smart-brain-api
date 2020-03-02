const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Bh@99090',
        database: 'smart-brain'
    }
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => { res.send(database.users) })
app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })
app.post('/register', (req,res) => { register.handleRegister(req, res, db, bcrypt) })
app.post('/profile/:id', (req, res) => { profile.handleProfile(req, res, db) })
app.put('/image', (req, res) => { image.handleImage(req, res, db) })
app.post('/imageURL', (req, res) => { image.handleApiCall(req, res) })

app.listen(3000, () => {
    console.log('app is running smoothly');
})

/*
/ --> res = this is working
/signin --> POST  success/fail
/register --> POST = user
/profile/:userd --> GET = user
/image --> PUT --> user

*/