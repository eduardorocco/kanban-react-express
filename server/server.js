import dataCol from './data/column-array.js'
import express from 'express'
import cors from 'cors'


const app = express()
const port = 3000

app.use(cors())


app.get('/', (req, res) => {
    console.log('cuai');
    res.send(dataCol)
})



app.listen(port, (req, res) => {
    console.log(`stacca ci stanno tracciando ${port}`);
})