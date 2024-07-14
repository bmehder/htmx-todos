const createViewCurrency = currency => /*html*/ `
  <article class="p-2 flow border-1">
    <h3>${currency.name}</h3>
    <p>${currency.priceUsd}</p>
  </article>
`
export default createViewCurrency
