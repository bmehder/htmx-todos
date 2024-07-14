import createViewCurrency from './createViewCurrency.js'

const createViewCurrencies = currencies => /*html*/ `
  <div class="text-flow-1-5">
    <div class="h3">
      ${currencies.length} ${currencies.length === 1 ? 'result' : 'results'}
    </div>
    
    <div class="auto-fill gap-1-5">
      ${currencies?.map(createViewCurrency).join('')}
    </div>
  </div>
`

export default createViewCurrencies
