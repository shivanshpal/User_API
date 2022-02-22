const mongoose = require('mongoose');

const db_link = "";
mongoose.connect(db_link);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to db'));

db.once('open', function () {
    console.log('Successfully connected to database');
});