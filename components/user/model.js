const mongoos = require('mongoose');

const Schema = mongoos.Schema;

const mySchema = new Schema({
    name: String,
});

const model = mongoos.model('User', mySchema);

module.exports = model;