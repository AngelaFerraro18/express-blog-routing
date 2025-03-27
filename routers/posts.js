//importo express
const express = require('express');

//salvo in una variabile il valore della classe di oggetti di express
const router = express.Router();

//index
router.get('/', (req, res) =>{
    res.send('Lista dei post');
})

//show
router.get('/:slug', (req, res) =>{
    let element = req.params.slug;
    res.send(`Dettagli del post: ${element}.`);
})

//store
router.post('/', (req, res) =>{
    res.send('Creazione di un nuovo post');
})

//update
router.put('/:slug', (req, res) =>{
    let element = req.params.slug;
    res.send(`Modifica integrale del post: ${element}.`);
})

//modify
router.patch('/:slug', (req, res) =>{
    let element = req.params.slug;
    res.send(`Modifica parziale del post: ${element}.`);
})

//destroy
router.delete('/:slug', (req, res) =>{
    let element = req.params.slug;
    res.send(`Eliminazione del post: ${element}.`);
})


//esporto 
module.exports = router;