import { useParams } from "react-router-dom"
import { AppBar } from "../components/AppBar"
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog"

// we will be using the atom families / selector families
// else we can create a custom hook
// but custom hook does not make sense as we already have all the blogs with us so why make another call
// initially the blog may be undefined while loading
//I was facing the error trying to set the blog state with the entire response object, not just the blog details. The blog variable would then be an object with a Blog property (e.g., blog.Blog), thus breaking my frontend
export const Blog = () => {
    const {id} = useParams();
    const {loading, blog} = useBlog({id : id || ""});
    console.log(blog);
    if(loading){
        return(
            <div className="content-center">
                LMAO the page do be loading
            </div>
        )
    }else if(!blog){
        return(<div>No blog found with the id ${id}</div>)
    }
    return(
        <div>
            <div>
                <AppBar/>
            </div>
            <div>
                <FullBlog blog={blog}/>
            </div>
        </div>
    )
}