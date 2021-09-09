const express = require('express');
const passport = require('passport');
const debug = require('debug')('app:auth_router');
const { MongoClient, ObjectID } = require('mongodb');

const auth_router = express.Router();


// SANITY CHECK 
// auth_router.route('/signUp').post((req, res) => {
//     res.json(req.body);
// });

auth_router.route('/signUp').post((req, res) => {

    const { username, password } = req.body;
    // debug(req.body);
    
    const url = '';
    const dbName = 'globomantics';

    (async function addUser() {
        let client;
        try {
            client = await MongoClient.connect(url);

            const db = client.db(dbName);
            const user = {username, password};
            const results = await db.collection('users').insertOne(user);

            req.login(results.ops[0], () => {
                res.redirect('/auth/profile');
            })

        } catch (error) {
            debug(error);
        }
        client.close();
    })();
});

auth_router
    .route('/signIn')
    .get((req, res) => {
        res.render('signin');
    })
    .post(
        passport.authenticate('local', {
            successRedirect: '/auth/profile',
            failureMessage: '/',
        })
    );

auth_router.route('/profile').get((req, res) => {
    res.json(req.user);
});

module.exports = auth_router;

