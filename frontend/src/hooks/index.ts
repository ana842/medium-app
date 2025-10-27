import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEN_URL } from "../config";

export interface Blog{
    "title" : string,
    "content" : string,
    "id" : string,
    "author":{
        "name" : string,
        "username" : string
    }
    
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEN_URL}/blog/bulk`, {
            headers : {
                Authorization : localStorage.getItem("token")
            }
        })
        .then(response => {
            setBlogs(response.data.blogs);
            setLoading(false)
        })
    }, [])
    return{
        loading,
        blogs
    }
}

export const useBlog = ({id} : {id:string})=>{

    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog | null>(null);

    useEffect(()=>{
        const fetchBlog = async()=>{
            try {
                setLoading(true);
                const response = await axios.get(`${BACKEN_URL}/blog/id/${id}`, {
                    headers:{
                        Authorization : localStorage.getItem("token")
                    }
                });
                
                // console.log(response.data)
                setBlog(response.data.Blog)
                console.log(blog)
            } catch (error) {
                console.error("Failed to fetch blog:", error);
                setBlog(null);
            }finally{
                setLoading(false)
            }
        }
        fetchBlog();

        // const response = axios.get(`${BACKEN_URL}/blog/id/${id}`, {
        //     headers : {
        //         Authorization : localStorage.getItem("token")
        //     }
        // })
        // .then(response => {
        //     setBlog(response.data.Blog);
        //     setLoading(false)
        // })
    }, [id])

    return{
        loading,
        blog
    }

}