const createViewBook = book => /*html*/ `
  <article class="p-2 flow border-1">
    <h3>${book.name}</h3>
    <p>${new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(
			new Date(book.released)
		)}</p>
  </article>
`
export default createViewBook
