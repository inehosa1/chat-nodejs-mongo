const store = require('./store');

function addUser(name) {    
    return new Promise((resolve, reject) => {
        if (!name) {
            console.log('[userController] el nombre es requerido');
            reject('invalid name')
            return false;
        }
        const user = {
            name
        };
        resolve(store.add(user));
    })
}

function getUser(filterName) {    
    return new Promise((resolve, reject) => {
        resolve(store.list(filterName));
    })
}

function updateUser(id, name) {    
    return new Promise(async (resolve, reject) => {
        if(!id || !name) {
            reject('[userController] el nombre y id son requeridos');
            return false;
        } 
        resolve(await store.path(id, name));
    })
}

function deleteUser(id) {    
    return new Promise((resolve, reject) => {      
        if (!id) {
            reject('[userController] el id es requerido');
            return false;
        }  

        store.remove(id)
            .then(()=>
                resolve()
            ).catch(e=> 
                reject(e)
            )        
    })
}

module.exports = {
    addUser,
    getUser,
    updateUser,
    deleteUser
}