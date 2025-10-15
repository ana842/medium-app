import { Avatar } from "./Avatar"
import { Link } from "react-router-dom"

interface BlogCardProps {
    authorName : string,
    title : string,
    content : string
    datePublished : string,
    id: string
}

export const BlogCard=({
    authorName, title, content, datePublished, id} : BlogCardProps
)=>{
    return( 
            <Link to={`/blog/id/${id}`}>
                <div className="flex justify-center flex-col px-2 py-1 cursor-pointer">
                    <div className="flex">
                        <div className="flex justify-center flex-col">
                            <Avatar name={authorName} size="small"/>
                        </div>
                        <div className="flex justify-center flex-col text-sm font-light px-1">
                            {authorName}
                        </div>
                        <div className="flex justify-center flex-col px-1">
                            <Circle/>
                        </div>
                        <div className="flex justify-center flex-col text-sm text-slate-400">
                            {datePublished}
                        </div>
                    </div>
                    <div className="text-2xl font-bold">
                        {title}
                    </div>
                    <div className="text-lg font-light">
                        {`${content.slice(0,100)} ${content.length>100 ? "..." : ""}`}
                    </div>
                    <div className="w-fit bg-slate-200 rounded-md text-sm mt-2 px-1 m-1 font-thin">
                        {`${Math.ceil(content.length/100)} ${Math.ceil(content.length/100) > 1 ? "mins" : "min"} read`}
                    </div>
                </div> 
            </Link>
    )
}

function Circle(){
    return(
        <div className="bg-slate-400 h-1 w-1 rounded-full">
        </div>
    )
}