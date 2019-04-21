// get the environment config info
var config = require('./config')['development'];

const Pool = require('pg').Pool
const pool = new Pool({
	user: config.database.user,
	host: config.database.host,
	database: config.database.db,
	password: config.database.password,
	port: config.database.port,
})

const getItems = (request, response) => {
	pool.query('SELECT * FROM item ORDER BY id ASC', (error, results) => {
		if (error) {
			throw error
		}
	response.status(200).json(results.rows)
	})
}

const getItemById = (request, response) => {
	const id = parseInt(request.params.id)

	pool.query('SELECT * FROM item WHERE id = $1', [id], (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).json(results.rows)
	})
}

const createItem = (request, response) => {
	const { name, notes } = request.body

	pool.query('INSERT INTO item (name, notes) VALUES ($1, $2) RETURNING id', [name, notes], (error, result) => {
	if (error) {
		throw error
	}
	response.status(201).send(`Item added with ID: ${result.rows[0].id}`)
})
}

const updateItem = (request, response) => {
	const id = parseInt(request.params.id)
	const { name, notes } = request.body

	pool.query(
		'UPDATE item SET name = $1, notes = $2 WHERE id = $3',
		[name, notes, id],
		(error, results) => {
			if (error) {
				throw error
			}
			response.status(200).send(`Item modified with ID: ${id}`)
		}
	)
}

const deleteItem = (request, response) => {
const id = parseInt(request.params.id)

	pool.query('DELETE FROM item WHERE id = $1', [id], (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).send(`Item deleted with ID: ${id}`)
	})
}

// make functions available
module.exports = {
	getItems,
	getItemById,
	createItem,
	updateItem,
	deleteItem,
}
