const createViewCalculator = () => /*html*/ `
  <form
    hx-post="/calculator"
    hx-target="#result"
    hx-swap="outerHTML"
  >
    <style>
      .container-inline-size > * {
        @container (width >= 22rem) {
          grid-template-columns: 1fr auto 1fr auto;
          & > * {
            margin-block-start: 0;
          }
        }
      }
    </style>
    <div class="container-inline-size">
      <div class="grid gap-1 text-center">
        <input
          type="number"
          class="full-width p-0-5 text-align-inherit"
          name="first"
          value="42"
        >
        <select
          class="full-width px-1 py-0-5 text-align-inherit"
          name="operation"
          hx-trigger="change"
          hx-post="/calculator"
          hx-target="#result"
          hx-swap="outerHTML"
        >
          <option>+</option>
          <option>-</option>
          <option>*</option>
          <option>/</option>
        </select>
        <input
          type="number"
          class="full-width p-0-5 text-align-inherit"
          name="second"
          value="32"
        >
        <button class="full-width gray-10 hover-gray-0 hover-outline-2">
          Calculate
        </button>
      </div>
    </div>
  </form>
  
  <div id="result"></div>
`

export default createViewCalculator
