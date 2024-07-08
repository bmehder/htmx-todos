const createViewForm = () => /*html*/ `
    <form
      hx-post="/todos"
      hx-target=".list"
      hx-on::after-request="document.querySelector('form').reset()"
      class="grid gap-1"
    >
      <input
        type="text"
        class="p-0-5"
        name="text"
        placeholder="Enter new todo..."
        required
      >
      <button class="gray-10 hover-gray-0 hover-outline-2">
        <ion-icon name="add" size="large"></ion-icon> Add Todo
      </button>
    </form>
  `

export default createViewForm
