import createViewBook from './createViewBook.js'

const createViewBooks = books => /*html*/ `
  <div class="posts text-flow-1-5">
    <h2>Books – ${books.length} ${books.length === 1 ? 'result' : 'results'}</h2>
    
    <div class="auto-fill gap-1-5">
      ${books.map(createViewBook).join('')}
    </div>
  </div>
`

export default createViewBooks
