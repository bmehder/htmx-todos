import express from 'express'
import todos from './models/todos.js'
import createViewApp from './views/index.js'
import createViewList from './views/list.js'
import createViewTodoText from './views/todoText.js'

// Create server
const app = express()

// Add middleware to parse form data
app.use(express.urlencoded({ extended: false }))

// Route handlers
const routeHandlers = {
	getAppView: (_, res) => res.send(createViewApp()),
	getTodos: (_, res) => res.send(createViewList(todos)),
	addTodo: (req, res) => {
		const { text } = req.body

		text && todos.push({ id: crypto.randomUUID(), text, complete: false })

		res.redirect('/todos')
	},
	toggleTodoComplete: (req, res) => {
		const { id } = req.params
		const idx = todos.findIndex(todo => todo.id === id)

		todos[idx] = { ...todos[idx], complete: !todos[idx].complete }

		res.send(createViewTodoText(todos[idx]))
	},
	deleteTodo: (req, res) => {
		const { id } = req.params
		const idx = todos.findIndex(todo => todo.id === id)

		todos.splice(idx, 1)

		res.send()
	},
}

// Routes
app.get('/', routeHandlers.getAppView)

app.get('/todos', routeHandlers.getTodos)

app.post('/todos', routeHandlers.addTodo)

app.put('/todos/:id', routeHandlers.toggleTodoComplete)

app.delete('/todos/:id', routeHandlers.deleteTodo)

//Listen on port 3000
const listener = app.listen(3000, () => {
	console.log('Listening on port ' + listener.address().port)
})
