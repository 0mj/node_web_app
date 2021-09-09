const express = require('express');
const sessions_Router = express.Router();
const debug = require('debug')('app:sessions_Router');
const { MongoClient, ObjectID } = require('mongodb');
const sessions = require('../data/sessions.json'); // DUMMY DATA SENT TO MONGO

sessions_Router.use((req, res, next) => {
    if(req.user){
        next();
    } else {
        res.redirect('/auth/signIn');
    }
})


sessions_Router.route('/').get((req, res) => {
    const url = 'mongodb+srv://dbuser:BXdKmBa2B00W@cluster0.yg2yx.mongodb.net?retryWrites=true&w=majority';
    const dbName = 'globomantics';

    (async function mongo() {
        let client;
        try {
            client = await MongoClient.connect(url);
            debug('Connected to mongo db');

            const db = client.db(dbName);

            const sessions = await db.collection('sessions').find().toArray();
            res.render('sessions', { sessions });
        } catch (error) {
            debug(error.stack);
        }
        client.close();
    }());
});

sessions_Router.route('/:id').get((req, res) => {
    const id = req.params.id;
    const url = 'mongodb+srv://dbuser:BXdKmBa2B00W@cluster0.yg2yx.mongodb.net?retryWrites=true&w=majority';
    const dbName = 'globomantics';

    (async function mongo() {
        let client;
        try {
            client = await MongoClient.connect(url);
            debug('Connected to mongo db');

            const db = client.db(dbName);

            const session = await db.collection('sessions').findOne({_id: new ObjectID(id)});
            res.render('session', { session });
        } catch (error) {
            debug(error.stack);
        }
        client.close();
    }());
}); 


module.exports = sessions_Router;