import React from 'react'
import { Link } from 'react-router-dom'
import BlogList from './BlogList'

function BlogListPage() {
  return (
    <div>
        <p>Blog List Page</p>
        <BlogList />
        <Link to="/blogs/1">Blog 1</Link>
        <Link to="/blogs/2">Blog 2</Link>
    </div>
  )
}

export default BlogListPage