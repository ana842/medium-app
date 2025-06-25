
export const PasswordBox = ({label, onChange}:{
    label:string,
    onChange : (e:React.ChangeEvent<HTMLInputElement>)=>void
})=>{
return (
    <div className="max-w-sm">
        <div className="text-slate-400 text-md pt-4 pl-2">{label}</div>
        <div className="relative">
            <input type="password" onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Password..."  />
        </div>
</div>
)}