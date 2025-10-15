import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signin = ()=>{
    return(
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <div>
                        <div className="flex justify-end ">
                            <div>
                                <div className="rounded-l-md py-1 pl-3 bg-gray-200 font-serif font-bold text-2xl text-right">
                                    MED
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <Auth type="signin"/>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <div className="flex bg-gray-200">
                        <div>
                            <div className="rounded-r-md py-1 pr-4 bg-white font-serif font-bold text-2xl">
                                IUM
                            </div>
                        </div>
                    </div>
                    <Quote/>
                </div>
            </div>
        </div>
    )
}