const mongoos = require('mongoose');

const Schema = mongoos.Schema;

const mySchema = new Schema({
    users: [{
        type: Schema.ObjectId,
        ref: 'User'
    }]
});

const model = mongoos.model('Chat', mySchema);

module.exports = model;