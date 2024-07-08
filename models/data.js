import fetch from 'node-fetch'
import createViewApp from '../views/createViewApp.js'
import createViewTodoForm from '../views/todos/createViewTodoForm.js'
import createViewTodos from '../views/todos/createViewTodos.js'
import createViewPosts from '../views/posts/createViewPosts.js'

// Data Models
let todos = []

// Helper function
const getTodoIndexById = id => todos.findIndex(todo => todo.id === id)

// Route handlers
const routeHandlers = {
	getApp: (_, res) => res.send(createViewApp()),

	getTodos: (_, res) => res.send(createViewTodos(todos)),

	getForm: (_, res) => res.send(createViewTodoForm()),

	addTodo: (req, res) => {
		const { text } = req.body

		todos = [...todos, { id: crypto.randomUUID(), text, complete: false }]

		res.send(createViewTodos(todos))
	},

	getPosts: (req, res) => {
		const { order } = req.body

		const sortByTitleAsc = (a, b) =>
			a.title.toLowerCase().localeCompare(b.title.toLowerCase())

		const sortByTitleDesc = (a, b) =>
			b.title.toLowerCase().localeCompare(a.title.toLowerCase())

		const sortData = (order, data) =>
			order === 'asc'
				? data.toSorted(sortByTitleAsc)
				: order === 'desc'
				? data.toSorted(sortByTitleDesc)
				: data

		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => {
				const sortedData = sortData(order, data)
				res.send(createViewPosts(sortedData, order))
			})
	},

	toggleTodoComplete: (req, res) => {
		const idx = getTodoIndexById(req.params.id)

		todos = todos.toSpliced(idx, 1, {
			...todos[idx],
			complete: !todos[idx].complete,
		})

		res.send(createViewTodos(todos))
	},

	deleteTodo: (req, res) => {
		const idx = getTodoIndexById(req.params.id)

		todos = todos.toSpliced(idx, 1)

		res.send(createViewTodos(todos))
	},
}

export default routeHandlers
