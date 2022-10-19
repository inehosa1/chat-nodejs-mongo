const model = require("./model");

async function addUser(user) {
    const myUser = new model(user);
    return await myUser.save();
}

async function getUsers(filterName) {
    let filter = {}
    if (filterName !== null) {
        filter = { name: filterName };
    }
    return await model.find(filter);
}

async function updateUser(id, name) {
    const foundUser = await model.findOne({
        _id: id
    });
    foundUser.name = name;
    return await foundUser.save();
}

function removeUser(id) {
    return model.deleteOne({
         _id: id 
    });
}   

module.exports = {
    add: addUser,
    list: getUsers,
    path: updateUser,
    remove: removeUser
}