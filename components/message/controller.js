const store = require('./store');

function addMessage(user, chat, message) {    
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.log('[messageController] el mensaje es requerido');
            reject('datos incorrectos')
            return false;
        }
        const fullMessage = {
            user,
            chat,
            message,
            'date': new Date()
        };
        resolve(store.add(fullMessage));
    })
}

function getMessage(filterUser) {    
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    })
}

function updateMessage(id, message) {    
    return new Promise(async (resolve, reject) => {
        if(!id || !message) {
            reject('[messageController] el mensaje y id son requeridos');
            return false;
        } 
        resolve(await store.path(id, message));
    })
}

function deleteMessage(id) {    
    return new Promise((resolve, reject) => {      
        if (!id) {
            reject('[messageController] el id es requerido');
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
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage
}