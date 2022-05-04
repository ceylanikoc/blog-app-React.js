// import { v4 as uuid } from 'uuid';
import { push, ref, set, onValue,get, remove, update } from "firebase/database";
import database from "../firebase/firebaseConfig";

// ACTION CREATOR

export const addBlog = (blog) => ({
  type: "ADD_BLOG",
  blog,
});

export const addBlogToDatabase = (blogData = {}) => {
  return (dispatch,getState) => {
    const uid = getState().auth.uid;
    const { title = "", description = "", dateAdded = 0 } = blogData;
    const blog = { title, description, dateAdded,uid };
    push(ref(database, "blogs"), blog)
      .then((res) => {
        console.log(res);
        dispatch(
          addBlog({
            id: res.key,
            ...blog,
          })
        );
      })
      .catch((e) => {
        console.log("add blog dispatch hata : ", e);
      });
  };
};

export const removeBlog = ({ id }) => ({
  type: "REMOVE_BLOG",
  id: id,
});

export const removeBlogFromDatabase = ({id}) => {
    return (dispatch) => {
        return remove(ref(database,`blogs/${id}`)).then(() => {
            dispatch(removeBlog({id}))
        })
    }
}

export const editBlog = (id, updates) => ({
  type: "EDIT_BLOG",
  id,
  updates,
});

export const editBlogFromDatabase = (id,uptades) => {
    return(dispatch) => {
        return update(ref(database,`blogs/${id}`),uptades).then(() => {
            dispatch(editBlog(id,uptades))
        })
    }
}

export const setBlogs = (blogs) => ({
  type: "SET_BLOGS",
  blogs,
});

export const getBlogsFromDatabase = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return get(ref(database, "blogs")).then((snapshot) => {
      const blogs = [];
      snapshot.forEach((blog) => {
        const result = blog.val();
        if(result.uid === uid) {
            blogs.push({
                id: blog.key,
                ...result
                });
        }
      });
      dispatch(setBlogs(blogs))
    });
  };
};

export const clearBlogs = () => ({
    type: "CLEAR_BLOGS",
});


const db = {
    blogs: {

    }
}
  
