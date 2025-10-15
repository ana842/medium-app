import type { Blog } from "../hooks"
import { Avatar } from "./Avatar"



export const FullBlog = ( {blog} : {blog:Blog}) =>{
    return(
        <div className="">
            <div className="grid grid-cols-12 px-10 w-full pt-20 bg-slate-100  ">
                <div className="col-span-8 ">
                    <div className="text-5xl font-bold px-10 py-5 bg-slate-100 rounded-lg">
                        {blog.title}
                    </div>
                    <div className="text-md px-10 pb-5">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="flex justify-between">
                        <div className="">{blog.author.username || "Anonymous"}</div>
                        <div className="flex flex-col justify-center">
                            <Avatar name = {blog.author.username || "Anonymous"} size="small"/>
                        </div>
                    </div>
                    <div className="bg-slate-100 rounded-lg">
                        <div className="">
                        </div>
                        <div className="text-lg font-bold text-slate-600">{blog.author.name || "Anonymous"}</div>
                        <div className="italic">--Need to update the db to add a user description--</div>
                    </div>
                </div>

            </div>
        </div>
    )
}