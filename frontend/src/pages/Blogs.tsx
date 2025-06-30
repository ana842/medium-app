import { BlogCard } from "../components/BlogCard"

export const Blogs = ()=>{
    return(
        <div className="flex justify-center">
            <div className="mt-5">
                <div className=" shadow-md rounded-md max-w-xl py-4 my-5">
                    <BlogCard authorName="Ana" title="Power of a Morning Routine" content="Start your day with intention—wake up early, hydrate, move your body, and plan your goals. A mindful morning sets the tone for success. Small habits, big impact. 🌞📈" datePublished="29-Jun-2025"/>
                </div>
                <div className=" shadow-md rounded-md max-w-xl py-4 my-5">
                    <BlogCard authorName="Ana" title="Power of a Morning Routine" content="Start your day with intention—wake up early, hydrate, move your body, and plan your goals. A mindful morning sets the tone for success. Small habits, big impact. 🌞📈" datePublished="29-Jun-2025"/>
                </div>
            </div>
        </div>
    )
}