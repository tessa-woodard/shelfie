const express = require('express')
const massive = require('massive')
const cors = require('cors')
const ctrl = require('./controllers/controller')
require('dotenv').config()

const app = express()
const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(cors())
app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
})
    .then(db => {
        app.set('db', db)
        console.log('db connected')
        app.listen(SERVER_PORT, () => console.log(`server running on ${SERVER_PORT}`))
    })

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.create)
app.delete('/api/product/:id', ctrl.delete)
app.put('/api/product/:id', ctrl.editProduct)
app.get('/api/product/:id', ctrl.getProduct)