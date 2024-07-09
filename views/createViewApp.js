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
      <main class="dvh-100 bg-gray-10 gray-0">
        <div class="max-width-sm mx-auto p-2 text-flow-2">
          <h1 class="text-center">HTMX Todo List</h1>
          <section class="flow p-1 border-1">
            <div hx-trigger="load" hx-get="/form" hx-swap="outerHTML"></div>
            <div hx-trigger="load" hx-get="/todos" class="list flow"></div>
          </section>
          <section>
            <button
              class="hover-outline-2 gray-10 hover-gray-0"
              hx-post="/posts/${order}"
              hx-swap="outerHTML"
            >
              Get Posts
            </button>
          </section>
        </div>
      </main>
    </body
  </html>
`

export default createViewApp
