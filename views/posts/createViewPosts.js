import createViewPost from './createViewPost.js'

const createViewPosts = (posts, order) => /*html*/ `
  <div class="posts text-flow-1-5">
    <div class="flex flex-wrap space-between align-items-center gap-1">
      <h2>Posts – ${posts.length} results</h2>
      
      <select
        id="order"
        class="p-0-5"
        name="order"
        hx-post="/posts"
        hx-target=".posts"
        hx-swap="outerHTML"
      >
        <option value="id" ${order === 'id' ? 'selected' : ''}>Sort by Id</option>
        <option value="asc" ${
					order === 'asc' ? 'selected' : ''
				}>Sort by Title (Ascending)</option>
        <option value="desc" ${
					order === 'desc' ? 'selected' : ''
				}>Sort by Title (Decending)</option>
      </select>
    </div>
    
    <div class="auto-fit gap-1-5">
      ${posts.map(createViewPost).join('')}
    </div>
  </div>
`

export default createViewPosts
