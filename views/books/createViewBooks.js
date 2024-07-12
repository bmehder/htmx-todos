import createViewBook from './createViewBook.js'

const createViewBooks = books => /*html*/ `
  <div class="text-flow-1-5">
    <div class="h3">${books.length} ${
	books.length === 1 ? 'result' : 'results'
}</div>
    
    <div class="auto-fill gap-1-5">
      ${books?.map(createViewBook).join('')}
    </div>
  </div>
`

export default createViewBooks
