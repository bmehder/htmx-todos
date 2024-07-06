import createViewTodo from './todo.js'

const createViewList = todos => /*html*/ `
  <ul class="flow">
    ${todos.map(createViewTodo).join('')}
  </ul>
`

export default createViewList
