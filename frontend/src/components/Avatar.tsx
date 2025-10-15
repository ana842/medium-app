export function Avatar({name, size} : {name:string, size:"small"|"big" }){
    return( 
        <div className={`relative inline-flex items-center justify-center overflow-hidden bg-slate-400 rounded-full dark:bg-slate-400 ${size==="small"? "w-4 h-4" : "w-8 h-8"}`}>
            <span className={`font-medium ${size==="small"? "text-sm" : "text-md"} dark:`}>
                {name[0].toLocaleUpperCase()}
            </span>
        </div>
    )
}