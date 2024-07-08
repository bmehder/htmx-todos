import createViewTodoText from './createViewTodoText.js'

const createViewTodo = todo => /*html*/ `
  <li class="flex space-between align-items-center gap-1">
      ${createViewTodoText(todo)}
    <button
      hx-delete="todos/${todo.id}"
      hx-confirm="Are you sure you want to delete this todo item?"
      hx-target=".list"
      class="p-0 bg-transparent hover-bg-transparent"
    >
      <ion-icon name="trash" size="large"></ion-icon>
    </button>
  </li>
`

export default createViewTodo
