const model = require("./model");

async function addChat(message) {
    const myChat = new model(message);
    return await myChat.save();
}

async function getChats() {
    return new Promise((resolve, reject) => {
        model.find()
            .populate('users')
            .exec((error, populate) => {
                if (error) {
                    reject(error);
                    return false;
                }
                resolve(populate);
            })
    })
}

async function updateChat(id, users) {
    const foundChat = await model.findOne({
        _id: id
    });
    foundChat.users = users;
    return await foundChat.save();
}

function removeChat(id) {
    return model.deleteOne({
        _id: id 
    });
}   

module.exports = {
    add: addChat,
    list: getChats,
    path: updateChat,
    remove: removeChat
}