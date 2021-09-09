const express = require('express');
const debug = require('debug')('app:admin_router');
const {MongoClient} = require('mongodb');
const sessions = require('../data/sessions.json');
const admin_router =express.Router();

admin_router.route('/').get((req, res) => {
    const url = '';
    const dbName = 'globomantics';

    (async function mongo(){
        let client;
        try {
            client = await MongoClient.connect(url);
            debug('Connected to mongo db');

            const db = client.db(dbName);

            const response = await db.collection('sessions').insertMany(sessions);
            res.json(response);
        } catch (error) {
            debug(error.stack);
        }
        client.close();
    }());

});


module.exports = admin_router;