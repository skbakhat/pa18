

import './blogPost.css'

function BlogPost(props){
    return(
        <div className="postmain">
<h3><a href="#">{props.text1}</a></h3>
<p>{props.text2}</p>
</div>
    )
}

export default BlogPost;