const express = require('express');
const response = require('../../config/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', function (req, res) { 
    const filterMessages = req.query.user || null;

    controller.getMessage(filterMessages)
        .then((messageList)=> {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error inesperado', 400, "error [ControllerGetMessage]");
        });
});

router.post('/', function (req, res) { 
    controller.addMessage(req.body.user, req.body.chat, req.body.message)
        .then((fullMessage)=> {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, "error [ControllerAddMessage]");
        });
});

router.patch('/:id', function(req, res) {
    controller.updateMessage(req.params.id, req.body.message)
        .then((data)=> {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, "error [ControllerUpdateMessage]");
        });
})

router.delete('/:id', function(req, res) {
    controller.deleteMessage(req.params.id)
        .then(()=> {
            response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 500, "error [ControllerDeleteMessage]");
        });
})

module.exports = router