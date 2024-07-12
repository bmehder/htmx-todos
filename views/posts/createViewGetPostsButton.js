const createViewGetPostsButton = () => /*html*/ `
   <button
      class="hover-outline-2 gray-10 hover-gray-0"
      hx-post="/posts"
      hx-swap="outerHTML"
    >
      Get Posts
    </button>
`

export default createViewGetPostsButton
