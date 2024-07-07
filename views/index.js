const createViewApp = () => /*html*/ `
  <!DOCTYPE html>
  <html>
    <head>
      <link rel="shortcut icon" href="#">
      <title>HTMX / Express Todo List</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://bmehder.github.io/cheeky-css/cheeky.css" />
      <script src="https://unpkg.com/htmx.org@2.0.0"></script>
      <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
    </head>
  
    <body>
      <main class="dvh-100 bg-gray-10 gray-0">
        <div class="max-width-sm mx-auto p-2 flow">
          <h1 class="text-center">HTMX Todo List</h1>
          <div hx-get="/form" hx-trigger="load" hx-swap="outerHTML"></div>
          <div hx-get="/todos" hx-trigger="load" class="list flow"></div>
        </div>
      </main>
    </body
  </html>
`

export default createViewApp
