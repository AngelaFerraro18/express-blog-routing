//importo express
const express = require('express');

//importo l'array con i post
const posts = require('../data/posts.js');

//salvo in una variabile il valore della classe di oggetti di express
const router = express.Router();

//index
router.get('/', (req, res) => {
    //la risposta sarà la lista dei post in json 
    res.json(posts);
})

//show
router.get('/:slug', (req, res) => {
    let element = req.params.slug;
    //non essendo presente un id faccio riferimento allo slug presente
    let post = posts.find(post => {
        if (element === post.slug) {
            return post;
        }
    })
    //la risposta sarà il singolo oggetto (il post singolo che verrà visualizzato) convertito in json
    res.json(post);
})

//store
router.post('/', (req, res) => {
    res.send('Creazione di un nuovo post');
})

//update
router.put('/:slug', (req, res) => {
    let element = req.params.slug;
    res.send(`Modifica integrale del post: ${element}.`);
})

//modify
router.patch('/:slug', (req, res) => {
    let element = req.params.slug;
    res.send(`Modifica parziale del post: ${element}.`);
})

//destroy
router.delete('/:slug', (req, res) => {
    let element = req.params.slug;
    res.send(`Eliminazione del post: ${element}.`);
})


//esporto 
module.exports = router;