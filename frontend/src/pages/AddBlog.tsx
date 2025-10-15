import type { CreateBlogInput } from "@ana23kxx/medium-common"
import { useState } from "react"
import { AppBar } from "../components/AppBar"
import axios from "axios"
import { BACKEN_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const AddBlog = () =>{
    const [postInputs, setPostInputs] = useState<CreateBlogInput>({
            title: "",
            content:""
        })
    const navigate = useNavigate();
    // function to handle the backend call & response
    const handlePostBlog = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.error("Authentication token not found.");
                navigate('/signin');
                return;
            }
            const response = await axios.post(
                `${BACKEN_URL}/blog`, 
                {
                    title:postInputs.title,
                    content : postInputs.content
                }, 
                {
                    headers: {
                        Authorization: `${token}`
                    }
                }
            );
            navigate(`/blog/id/${response.data.blogID}`);

        } catch (error) {
            console.error("Error posting blog:", error);
        }
    };

    return(
        <div>
            <AppBar/>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-slate-200 w-3/5 rounded-3xl p-5">
                    <div title="Title" className="m-6 px-10 max-w-screen-lg">
                        <input type="text" id="large-input" className="block w-full p-2 bg-white rounded-lg text-3xl focus:outline-none focus:ring-blue-500 focus:border-slate-400 italic" placeholder="Blog Title" onChange={(e)=>{
                            setPostInputs({...postInputs,title:e.target.value})
                        }}/>
                    </div>

                    <div title="Paragraph input field" className="m-6 px-15 max-w-screen-lg">
                            <textarea
                            id="paragraph-input"
                            className="block w-full p-4 bg-white rounded-lg text-base focus:outline-none focus:ring-red-500 focus:border-slate-200 italic"
                            placeholder="Content"
                            rows={10}
                            onChange={(e)=>{
                                setPostInputs({...postInputs,content:e.target.value})
                            }}
                        >
                        </textarea>
                    </div>
                    <div title="button to submit" className="flex justify-center px-10">
                        <button type="button" className="text-white bg-slate-400 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" onClick={handlePostBlog}>
                            Post the Blog
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}