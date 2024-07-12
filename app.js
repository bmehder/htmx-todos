import express from 'express'
import routeHandlers from './models/data.js'

// Create server
const app = express()

// Add middleware to parse form data
app.use(express.urlencoded({ extended: false }))

// Routes
app.get('/', routeHandlers.getApp)

app.post('/todos', routeHandlers.addTodo)

app.get('/todos/list', routeHandlers.getTodos)

app.get('/todos/form', routeHandlers.getTodosForm)

app.put('/todos/:id', routeHandlers.toggleTodoComplete)

app.delete('/todos/:id', routeHandlers.deleteTodo)

app.post('/posts', routeHandlers.getPosts)

app.delete('/posts', routeHandlers.deletePosts)

app.get('/calculator', routeHandlers.getCalculator)

app.post('/calculator', routeHandlers.getCalculation)

app.get('/books', routeHandlers.getBooks)

// Listen on port 3000
app.listen(3000, () => console.log('Listening on port 3000'))
