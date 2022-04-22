import React from 'react'

function BlogDetailsPage({match}) {
  return (
    <div>
        BlogDetailsPage :{match.params.id}
    </div>
  )
}

export default BlogDetailsPage