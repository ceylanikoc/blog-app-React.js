import React from 'react'
import BlogForm from './BlogForm'
import {connect} from 'react-redux'
import { editBlog, removeBlog, removeBlogFromDatabase, editBlogFromDatabase} from '../actions/blogs'

const EditBlogPage = (props) => {
  console.log(props);
  return (
    <div>
        <h1>Edit Blog Page</h1>
        <BlogForm 
            blog={props.blog}
            onSubmit = {(blog) => {
                props.dispatch(editBlogFromDatabase(props.blog.id,blog))
                props.history.push('/blogs')
            }}
        />
        <button onClick={() =>{
            props.dispatch(removeBlogFromDatabase({id:props.blog.id}));
            props.history.push('/blogs')
        }} >Remove Blog</button>
    </div>
  )
}

const mapStateToProps= (state,props) => {
    return {
        blog:state.blogs.find((b) => {
            return b.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditBlogPage)