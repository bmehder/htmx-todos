import fetch from 'node-fetch'
import createViewApp from '../views/createViewApp.js'
import createViewForm from '../views/createViewForm.js'
import createViewList from '../views/createViewList.js'
import createViewPosts from '../views/createViewPosts.js'

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

	getPostsByTitleAsc: (req, res) => {
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

		res.send(createViewList(todos))
	},

	deleteTodo: (req, res) => {
		const idx = getTodoIndexById(req.params.id)

		todos = todos.toSpliced(idx, 1)

		res.send(createViewList(todos))
	},
}

export default routeHandlers
