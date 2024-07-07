const createViewForm = () => /*html*/ `
  <form
    hx-post="/todos"
    hx-on::after-request="document.querySelector('form').reset()"
    hx-target=".list"
    class="grid gap-1"
  >
    <input
      type="text"
      class="p-0-5"
      name="text"
      placeholder="Enter new todo..."
    >
    <button class="gray-10 hover-gray-0 hover-outline-2">
      <ion-icon name="add" size="large"></ion-icon> Add Todo
    </button>
  </form>
`

export default createViewForm
