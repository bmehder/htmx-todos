import createViewTodoText from './todoText.js'

const createViewTodo = todo => /*html*/ `
  <li class="flex space-between align-items-center gap-1">
      ${createViewTodoText(todo)}
    <button
      class="gray-10 hover-gray-0 hover-outline-2"
      hx-delete="todos/${todo.id}"
      hx-confirm="Are you sure you want to delete this todo item?"
      hx-target=".list"
    >
      X
    </button>
  </li>
`

export default createViewTodo
