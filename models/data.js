import fetch from 'node-fetch'
import createViewApp from '../views/index.js'
import createViewForm from '../views/form.js'
import createViewList from '../views/list.js'
import createViewPosts from '../views/posts.js'

// Data Model
let todos = [
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

// Helper function
const getTodoIndexById = id => todos.findIndex(todo => todo.id === id)

// Route handlers
const routeHandlers = {
	getAppView: (_, res) => res.send(createViewApp()),

	getTodos: (_, res) => res.send(createViewList(todos)),

	getForm: (_, res) => res.send(createViewForm()),

	addTodo: (req, res) => {
		const { text } = req.body

		todos = [...todos, { id: crypto.randomUUID(), text, complete: false }]

		res.send(createViewList(todos))
	},

	getPosts: (_, res) => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => res.send(createViewPosts(data)))
	},

	toggleTodoComplete: (req, res) => {
		const idx = getTodoIndexById(req.params.id)

		todos = todos.toSpliced(idx, 1, {
			...todos[idx],
			complete: !todos[idx].complete,
		})

		res.send(createViewList(todos))
	},

	deleteTodo: (req, res) => {
		const idx = getTodoIndexById(req.params.id)

		todos = todos.toSpliced(idx, 1)

		res.send(createViewList(todos))
	},
}

export default routeHandlers
