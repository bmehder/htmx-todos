const createViewTodoText = todo => /*html*/ `
  <button
    class="button-unset pointer ${todo.complete ? 'strikethrough' : ''}"
    hx-put="todos/${todo.id}"
    hx-trigger="keyup[Space], click"
    hx-swap="outerHTML"
  >
    ${todo.text}
  </button>
`

export default createViewTodoText
