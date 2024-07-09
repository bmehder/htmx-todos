import express from 'express'
import routeHandlers from './models/data.js'

// Create server
const app = express()

// Add middleware to parse form data
app.use(express.urlencoded({ extended: false }))

// Routes
app.get('/', routeHandlers.getApp)

app.get('/todos', routeHandlers.getTodos)

app.get('/todos/form', routeHandlers.getForm)

app.post('/todos', routeHandlers.addTodo)

app.put('/todos/:id', routeHandlers.toggleTodoComplete)

app.delete('/todos/:id', routeHandlers.deleteTodo)

app.post('/posts', routeHandlers.getPosts)

app.post('/calculator', routeHandlers.getResult)

// Listen on port 3000
app.listen(3000, () => console.log('Listening on port 3000'))
