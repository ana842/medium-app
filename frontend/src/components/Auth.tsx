import type { SignupInput } from "@ana23kxx/medium-common"
import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { InputBox } from "./InputBox"
import { PasswordBox } from "./PasswordBox"
import axios from "axios"
import { BACKEN_URL } from "../config"

export const Auth = ({type}:{type: "signup"|"signin"}) =>{
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        username : "",
        name: "",
        password:""
    })
    // SigninInput is basically a subset of SignupInput
    // Zod validation will ignore the extra name when sending the acios req for signin
    async function sendRequest(){
        try {
            const response = await axios.post(`${BACKEN_URL}/user/${type==="signup" ? "signup":"signin"}`,postInputs);
            const resData = response.data;
            console.log(resData.token)
            localStorage.setItem("token",resData.token)
            navigate("/blogs")
        } catch (error) {
            alert("Error observed while sending backend request")
            console.log(error)
        }
    }

    return(
        <div className="flex justify-center flex-col  h-screen">
            <div className="flex justify-center ">
                <div className="shadow-md rounded-md max-w-md px-10 py-6">
                    <div className="text-3xl font-bold text-center">
                        {type === "signin"?"Log into Account":"Create an Account"}
                    </div>
                    <div className="text-slate-400 text-center">
                        {type === "signup" ? "Already have an Account?" : "Don't have an Account?"}
                        <Link to={type === "signin"?"/signup":"/signin"} className="underline pl-2">{type === "signin"?"Sign Up Now!":"Log In!"}</Link>
                    </div>
                    <div className="">
                        <InputBox label="Email" placeholder="Enter Email" onChange={(e)=>{
                            setPostInputs({...postInputs, username:e.target.value})
                        }}/>
                        {type==="signup"? <InputBox label="Name" placeholder="Enter Name" onChange={(e)=>{
                            setPostInputs({...postInputs, name:e.target.value})
                        }}/>:null}
                        <PasswordBox label="Password" onChange={(e)=>{
                            setPostInputs({...postInputs, password:e.target.value})
                        }}/>
                    </div>
                    <div className="pt-8 flex justify-center">
                        <button  type="button" onClick={sendRequest} className="w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 hover:bg-black ">{}{type === "signin"?"Sign In":"Sign Up"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}