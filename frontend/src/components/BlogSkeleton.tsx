import { Circle } from "./BlogCard"

export const BlogSkele = ()=>{
    return(
        <div className="">
            <div role="status" className="p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded-sm shadow-sm animate-pulse ">
                <div className="flex justify-center flex-col px-2 py-1 cursor-pointer">
                                <div className="flex">
                                    <div className="flex justify-center flex-col">
                                        <div className="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5"></div>
                                    </div>
                                    <div className="flex justify-center flex-col text-sm font-light px-1">
                                        <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
                                    </div>
                                    <div className="flex justify-center flex-col px-1">
                                        <Circle/>
                                    </div>
                                    <div className="flex justify-center flex-col text-sm text-slate-400">
                                        <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
                                    </div>
                                </div>
                                <div className="text-2xl font-bold">
                                    <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
                                </div>
                                <div className="text-lg font-light">
                                    <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
                                </div>
                                <div className="w-fit bg-slate-200 rounded-md text-sm mt-2 px-1 m-1 font-thin">
                                    <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
                                </div>
                                <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
                            </div> 
                <span className="sr-only">Loading...</span>
            </div>

        </div>
    )
}