import React from 'react'
import { connect } from 'react-redux'

const BlogList = (props) => {
  console.log(props);
  return (
    <div>
        {
            props.blogs.length
        }
    </div>
  )
}


// Bu fonksiyon BlogList'e gelen props parametresi içiresin, react-redux dan gelen bilgileri aktarmak import etmek.
const mapStateToProps = (state) => {
    return {
        // redux içinde tanımladığımız blogs alanı var onu alıyoruz.  blogs:state.blogs  bloklar:state.blogs da olabilir ismi
        blogs:state.blogs
    }
}

export default connect(mapStateToProps)(BlogList);