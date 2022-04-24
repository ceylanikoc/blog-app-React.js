import React from 'react'
import { connect } from 'react-redux'
import BlogListItem from './BlogListItem'

const BlogList = (props) => {
  console.log(props);
  return (
        <ul>
            {props.blogs.map(blog => {
                return <BlogListItem key={blog.id} {...blog}/>
            })}
        </ul>
  )
}


// Bu fonksiyon BlogList'e gelen props parametresi içiresin, react-redux dan gelen bilgileri aktarmak import etmek.
const mapStateToProps = (state) => {
    return {
        // redux içinde tanımladığımız blogs alanı var onu alıyoruz.  blogs:state.blogs  bloklar:state.blogs da olabilir ismi
        blogs:state.blogs
    }
}

// Higher Order Component(HOC)
export default connect(mapStateToProps)(BlogList);