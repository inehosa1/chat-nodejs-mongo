const mongoos = require('mongoose');

const Schema = mongoos.Schema;

const mySchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat'
    },
    message: {
        type: String,
        required: true
    },
    date: Date
});

const model = mongoos.model('Message', mySchema);

module.exports = model;