export const AppBarSkele = () =>{
    return(
        <div>
            <div className="border-b w-full bg-gray-200 border-slate-200">
                <div className="flex justify-between px-8 py-2">
                    <div className="text-2xl font-bold cursor-pointer">
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                    </div>

                    <div className="flex justify-center">
                        <div>
                            <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
                        </div>
                        <div>
                            <div className="flex items-center justify-center mt-4">
                            <svg className="w-8 h-8 text-gray-200 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                            </svg>
                            <div className="w-20 h-2.5 bg-gray-200 rounded-full  me-3"></div>
                            <div className="w-24 h-2 bg-gray-200 rounded-full "></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}