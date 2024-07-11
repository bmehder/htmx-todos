const createViewCalculator = () => /*html*/ `
  <form
    hx-post="calculator"
    hx-target="#calculation-result"
    hx-on::before-request="document
      .querySelector('#calculation-result')
      .innerText = ''"
  >
    <style>
      .container-inline-size > * {
        @container (width >= 20rem) {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto;
          gap: 1rem;
          & > * {
            margin-block-start: 0;
          }
        }
      }
    </style>
    <div class="container-inline-size">
      <div class="flow text-center">
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
        <div
          id="calculation-result"
          class="text-center h2"
          style="grid-column: span 4"
        ></div>
      </div>
    </div>
  </form>
`

export default createViewCalculator
