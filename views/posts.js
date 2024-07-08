import createPost from './post.js'

const createViewPosts = posts => /*html*/ `
  <h2>${posts.length} Posts</h2>
  ${posts.map(createPost).join('')}
`

export default createViewPosts
