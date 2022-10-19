const model = require("./model");

async function addMessage(message) {
    const myMessage = new model(message);
    return await myMessage.save();
}

async function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        let filter = {}
        
        if (filterUser !== null) {
            filter = { user: filterUser };
        }

        model.find(filter)
            .populate('user')
            .exec((error, populate) => {
                if (error) {
                    reject(error);
                    return false;
                }
                resolve(populate);
            })
    })
}

async function updateMessage(id, message) {
    const foundMessage = await model.findOne({
        _id: id
    });
    foundMessage.message = message;
    return await foundMessage.save();
}

function removeMessage(id) {
    return model.deleteOne({
         _id: id 
    });
}   

module.exports = {
    add: addMessage,
    list: getMessages,
    path: updateMessage,
    remove: removeMessage
}