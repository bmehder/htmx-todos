import createViewGetPostsButton from '../views/posts/createViewGetPostsButton.js'

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
          <div class="boxed py-2 text-flow-2" style="--lg: 69rem;">
            <h1 class="text-center">HTMX / Express Demo</h1>
            <div class="grid auto-fit gap-2">
              <section>
                <div class="mx-auto p-2 flow border-1">
                  <h2>Todo List</h2>
                  <div hx-trigger="load" hx-get="/todos/form" hx-swap="outerHTML"></div>
                  <div hx-trigger="load" hx-get="/todos/list" id="list" class="flow"></div>
                </div>
              </section>
              <section>
                <div
                  class="mx-auto p-2 flow border-1"
                  hx-trigger="load"
                  hx-get="/calculator"
                  hx-swap="beforeend"
                >
                  <h2>Calculator</h2>
                </div>
              </section>
            </div>
            <section>
              ${createViewGetPostsButton()}
            </section>
            <section>
              <div class="flow">
                <h2>Polling Data every 3 seconds</h2>
                <div hx-trigger="load, every 3s" hx-get="/currencies"></div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </body
  </html>
`

export default createViewApp
