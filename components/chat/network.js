const express = require('express');
const response = require('../../config/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', function (req, res) { 
    controller.getChat()
        .then((chatList)=> {
            response.success(req, res, chatList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error inesperado', 400, "error [ControllerGetMessage]");
        });
});

router.post('/', function (req, res) { 
    controller.addChat(req.body.users)
        .then((fullMessage)=> {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, "error [ControllerAddMessage]");
        });
});

router.patch('/:id', function(req, res) {
    controller.updateChat(req.params.users)
        .then((data)=> {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, "error [ControllerUpdateMessage]");
        });
})

router.delete('/:id', function(req, res) {
    controller.deleteChat(req.params.id)
        .then(()=> {
            response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 500, "error [ControllerDeleteMessage]");
        });
})

module.exports = router