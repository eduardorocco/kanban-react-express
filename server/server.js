import express from 'express'
const app = express()
const port = 3000




app.get('/', (req, res) => {
    console.log('cuai');
    res.send('hello motherfuckers')
})



app.listen(port, (req, res) => {
    console.log(`stacca ci stanno tracciando ${port}`);
})