const createViewCalculator = () => /*html*/ `
  <form hx-post="calculator" hx-target="#calculation-result">
    <div
      class="grid gap-1 text-center"
      style="grid-template-columns: 1fr auto 1fr auto"
    >
      <input
        class="p-0-5 text-align-inherit"
        type="number"
        name="first"
        value="42"
      >
      <select class="px-1 py-0-5" name="operation">
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>
      <input
        class="p-0-5 text-align-inherit"
        type="number"
        name="second"
        value="32"
      >
      <button class="hover-outline-2 gray-10 hover-gray-0">
        Calculate
      </button>
      <div
        id="calculation-result"
        class="text-center h2"
        style="grid-column: span 4"
      ></div>
    </div>
  </form>
`

export default createViewCalculator
