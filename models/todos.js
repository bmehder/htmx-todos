import createViewApp from '../views/index.js'
import createViewForm from '../views/form.js'
import createViewList from '../views/list.js'

// Data Model
const todos = [
	{
		id: '1',
		text: 'Buy Milk',
		complete: false,
	},
	{
		id: '2',
		text: 'Buy Eggs',
		complete: true,
	},
]

// Route handlers
const routeHandlers = {
	getAppView: (_, res) => res.send(createViewApp()),

	getTodos: (_, res) => res.send(createViewList(todos)),

	getForm: (_, res) => res.send(createViewForm()),

	addTodo: (req, res) => {
		const { text } = req.body

		text && todos.push({ id: crypto.randomUUID(), text, complete: false })

		res.send(createViewList(todos))
	},

	toggleTodoComplete: (req, res) => {
		const { id } = req.params
		const idx = todos.findIndex(todo => todo.id === id)

		todos[idx] = { ...todos[idx], complete: !todos[idx].complete }

		res.send(createViewList(todos))
	},

	deleteTodo: (req, res) => {
		const { id } = req.params
		const idx = todos.findIndex(todo => todo.id === id)

		todos.splice(idx, 1)

		res.send(createViewList(todos))
	},
}

export default routeHandlers
