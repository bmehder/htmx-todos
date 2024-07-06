const createViewTodoText = todo => /*html*/ `
  <button
    class="button-unset pointer ${todo.complete ? 'strikethrough' : ''}"
    hx-put="todos/${todo.id}"
    hx-trigger="keyup[Space&Enter], click"
    hx-swap="outerHTML"
  >
    <span class="h4 fw-400">${todo.text}</span>
  </button>
`

export default createViewTodoText
