import createPost from './createPost.js'

const createViewPosts = (posts, option = 'id') => /*html*/ `
  <div class="posts flow"> 
    <select
      id="order"
      class="p-0-5"
      name="order"
      hx-post="/posts/order"
      hx-target=".posts"
      hx-swap="outerHTML"
    >
      <option value="id" ${option === 'id' && 'selected'}>Sort by Id</option>
      <option value="asc" ${
				option === 'asc' && 'selected'
			}>Sort by Title (Ascending)</option>
      <option value="desc" ${
				option === 'desc' && 'selected'
			}>Sort by Title (Decending)</option>
    </select>
    
    <h2>${posts.length} Posts</h2>
    ${posts.map(createPost).join('')}
  </div>
`

export default createViewPosts
