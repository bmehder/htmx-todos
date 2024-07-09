const createViewPost = post => /*html*/ `
  <article class="p-2 flow border-1">
    <h3>${post.title}</h3>
    <div>${post.body}</div>
  </article>
`
export default createViewPost
