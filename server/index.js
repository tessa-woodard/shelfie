require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')

const app = express()
const { SERVER_PORT, CONNECTION_STRING } = process.env


massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log('Database is connected')
    app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
}).catch(error => console.log(error))

app.use(express.json())

app.post('/api/product', ctrl.create)
app.get('/api/inventory', ctrl.getInventory)
app.put('/api/products/:id', ctrl.updateProduct)
app.delete('/api/inventory/:id', ctrl.deleteProduct)