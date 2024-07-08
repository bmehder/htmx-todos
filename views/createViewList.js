import createViewTodo from './createViewTodo.js'

const createViewList = todos => /*html*/ `
  
    <ul class="flow p-1 border-1">
      ${todos.map(createViewTodo).join('')}
    </ul>
    <p class="text-center">
      ${
				todos.length === 0
					? 'No todos'
					: todos.length === 1
					? '1 todo'
					: todos.length + ' todos'
			}
    </p>
  
`

export default createViewList
