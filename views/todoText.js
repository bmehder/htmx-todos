const createViewTodoText = todo => /*html*/ `
  <button
    hx-put="todos/${todo.id}"
    hx-trigger="keyup[Space&Enter], click"
    hx-target=".list"
    class="p-0 bg-transparent hover-bg-transparent ${
			todo.complete ? 'strikethrough' : ''
		}"
  >
    <span class="h4 fw-400">${todo.text}</span>
  </button>
`

export default createViewTodoText
