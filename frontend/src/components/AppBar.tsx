import { useNavigate } from "react-router-dom";
import { Avatar } from "./Avatar"

export const AppBar = ()=>{
    const navigate = useNavigate();
    return (
        <div>
            <div className="border-b w-full bg-gray-200 border-slate-200">
                <div className="flex justify-between px-8 py-2">
                    <div className="text-2xl font-bold cursor-pointer" onClick={()=>{
                        navigate("/blogs")
                    }}>
                        Medium
                    </div>

                    <div className="flex justify-center">
                        <div>
                            <button type="button" className="text-white bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 font-medium rounded-lg text-sm px-8 py-1.5 text-center me-2 " onClick={()=>{
                                navigate("/addBlog")
                            }}>Add Blog</button>
                        </div>
                        <div>
                            <Avatar name="Anamaya" size="big"/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}