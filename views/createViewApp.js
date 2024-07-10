const createViewApp = () => /*html*/ `
  <!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>HTMX / Express Todo List</title>
      <link rel="shortcut icon" href="#">
      <link rel="stylesheet" href="https://bmehder.github.io/cheeky-css/cheeky.css" />
      <script src="https://unpkg.com/htmx.org@2.0.0"></script>
      <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
    </head>
  
    <body>
      <main>
        <div class="dvh-100 bg-gray-10 gray-0">
          <div class="boxed py-2 text-flow-2">
            <h1 class="text-center">HTMX / Express Demo</h1>
            <section class="flow">
              <div class="max-width-sm mx-auto p-2 flow border-1">
                <h2>Todo List</h2>
                <div hx-trigger="load" hx-get="/todos/form" hx-swap="outerHTML"></div>
                <div hx-trigger="load" hx-get="/todos/list" id="list" class="flow"></div>
              </div>
            </section>
            <section>
              <div
                class="boxed max-width-sm mx-auto p-2 flow border-1"
                hx-trigger="load"
                hx-get="/calculator"
                hx-swap="beforeend"
              >
                <h2>Calculator</h2>
              </div>
            </section>
            <section>
              <button
                class="block mx-auto hover-outline-2 gray-10 hover-gray-0"
                hx-post="/posts"
                hx-swap="outerHTML"
              >
                Get Posts
              </button>
            </section>
          </div>
        </div>
      </main>
    </body
  </html>
`

export default createViewApp
