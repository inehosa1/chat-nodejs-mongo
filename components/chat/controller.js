const store = require('./store');

function addChat(users) {    
    return new Promise((resolve, reject) => {
        if (!users) {
            console.log('[chatController] los usuarios son requeridos');
            reject('datos incorrectos')
            return false;
        }
        const chat = {
            users
        };
        resolve(store.add(chat));
    })
}

function getChat() {    
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

function updateChat(id, users) {    
    return new Promise(async (resolve, reject) => {
        if(!id || !users) {
            reject('[chatController] el id y usuario son requeridos');
            return false;
        } 
        resolve(await store.path(id, users));
    })
}

function deleteChat(id) {    
    return new Promise((resolve, reject) => {      
        if (!id) {
            reject('[chatController] el id es requerido');
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
    addChat,
    getChat,
    updateChat,
    deleteChat
}