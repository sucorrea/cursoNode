const express = require('express');
const homeControllers = require('../controllers/homeControllers');
const userControllers = require('../controllers/userControllers');
const postController = require('../controllers/postController');


const router = express.Router();
router.get('/', homeControllers.index);
router.get('/users/login', userControllers.login);
router.get('/users/register', userControllers.register);
router.get('/post/add', postController.add);

router.post('/post/add', postController.addAction);

module.exports = router; 










/*
    res.json(req.query);
    //res.send('Ola ' + nome +"você tem "+ idade + "anos");
    //GET  req.query
    //POST req.body
    //PARAMENTROS DA URL req.params
});
router.get('/posts/:slug', (req, res) => {
    let slug = req.params.slug;
    res.send('SLUG do POST: ' + slug);
});


router.get('/sobre', (req, res) => {
    res.send('Pagina Sobre');
});*/

/*
M - MODEL
V - VIEW
C - CONTROLLER

3 tipo de pessoas
responsável pelos comemos e bebes - models
local da festa - view
junta o model e o view - controller



*/