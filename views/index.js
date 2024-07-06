const createViewApp = () => /*html*/ `
  <!DOCTYPE html>
  <html>
    <head>
      <link rel="shortcut icon" href="#">
      <title>HTMX Todo List</title>
      <link rel="stylesheet" href="https://bmehder.github.io/cheeky-css/cheeky.css" />
      <script src="https://unpkg.com/htmx.org@2.0.0"></script>
    </head>
  
    <body>
      <main>
        <div class="max-width-sm mx-auto p-2 flow">
          <h1 class="text-center">HTMX Todo List</h1>
          
          <form
            class="grid gap-1"
            hx-post="/todos"
            hx-on::after-request="document.querySelector('form').reset()"
            hx-target=".list"
          >
            <input type="text" class="p-0-5" name="text" placeholder="Add todo...">
            <button class="gray-10 hover-gray-0 hover-outline-2">
              Add Todo
            </button>
          </form>
            
          <div class="list" hx-get="/todos" hx-trigger="load"></div>
        </div>
      </main>
    </body
  </html>
`

export default createViewApp
