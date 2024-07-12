const createViewCalculator = () => /*html*/ `
  <form
    hx-post="calculator"
    hx-target="#result"
    hx-on::before-request="document
      .querySelector('#result')
      .innerText = ''"
  >
    <style>
      .container-inline-size > * {
        @container (width >= 20rem) {
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
          class="full-width p-0-5 text-align-inherit"
          type="number"
          name="first"
          value="42"
        >
        <select class="full-width px-1 py-0-5 text-align-inherit" name="operation">
          <option>+</option>
          <option>-</option>
          <option>*</option>
          <option>/</option>
        </select>
        <input
          class="full-width p-0-5 text-align-inherit"
          type="number"
          name="second"
          value="32"
        >
        <button class="full-width hover-outline-2 gray-10 hover-gray-0">
          Calculate
        </button>
      </div>
    </div>
  </form>
  <div id="result" class="text-center h2"></div>
`

export default createViewCalculator
