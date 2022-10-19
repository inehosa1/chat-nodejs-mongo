const express = require('express');
const response = require('../../config/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', function (req, res) { 
    const filterName = req.query.name || null;

    controller.getUser(filterName)
        .then((userList)=> {
            response.success(req, res, userList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error inesperado', 400, "error [ControllerGetUser]");
        });
});

router.post('/', function (req, res) { 
    controller.addUser(req.body.name)
        .then((fullMessage)=> {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, "error [ControllerAddUser]");
        });
});

router.patch('/:id', function(req, res) {
    controller.updateUser(req.params.id, req.body.name)
        .then((data)=> {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, "error [ControllerUpdateUser]");
        });
})

router.delete('/:id', function(req, res) {
    controller.deleteUser(req.params.id)
        .then(()=> {
            response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 500, "error [ControllerDeleteUser]");
        });
})

module.exports = router