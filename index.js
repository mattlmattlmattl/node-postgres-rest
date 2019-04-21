// use express as a simple server
const express = require('express')
// use bodyParser so input from the client is easy to parse etc.
const bodyParser = require('body-parser')

const db = require('./item')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
)

// routes
app.get('/', (request, response) => {
	response.json({ info: 'Node.js, Express, and Postgres API' })
})

// these routes implement the REST API
app.get('/items', db.getItems)
app.get('/items/:id', db.getItemById)
app.post('/items', db.createItem)
app.put('/items/:id', db.updateItem)
app.delete('/items/:id', db.deleteItem)

app.listen(port, () => {
	console.log(`App running on port ${port}.`)
})
