import { AppBar } from "../components/AppBar"
import { AppBarSkele } from "../components/AppBarSkeleton";
import { BlogCard } from "../components/BlogCard"
import { BlogSkele } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = ()=>{
    const {loading, blogs} = useBlogs();
    if(loading){
        return(
            <div>
                <div><AppBarSkele/></div>
                <div className="flex flex-col justify-evenly items-center h-screen">
                    <BlogSkele/>
                    <BlogSkele/>
                    <BlogSkele/>
                    <BlogSkele/>
                </div>
            </div>
        )
    }
    else{
        return(
            <div>
                <div>
                    <AppBar/>
                </div>
                <div className="flex justify-center">
                    <div className="mt-5">
                        {blogs.map(blog =>
                            <div className="shadow-md rounded-md max-w-xl py-4 my-10"> 
                                <BlogCard authorName={blog.author.name || "Anonymous"} 
                                title={blog.title} 
                                content={blog.content} 
                                id={blog.id} 
                                datePublished="29-Jun-2025"/>
                            </div>
                        )}    
                    </div>
                </div>
            </div>
        )
    }
}