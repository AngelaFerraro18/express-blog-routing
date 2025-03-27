//importo express
const express = require('express');

//importo router
const postsRouter = require('./routers/posts.js')

const app = express();
const port = 3000;

//home del blog
app.get('/', (req, res) =>{
    res.send('Server del mio blog con vari post');
})

//bacheca
app.use("/posts", postsRouter);

app.listen(port, () =>{
    console.log(`Server in ascolto alla porta: ${port}`);
})