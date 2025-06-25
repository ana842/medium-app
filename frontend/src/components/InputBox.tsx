export const InputBox = ({label, placeholder, onChange}:{
    label : string,
    placeholder : string,
    onChange : (e:React.ChangeEvent<HTMLInputElement>)=>void
}) => {
    return( 
    <div>
        <div>
            <div className="text-slate-400 text-md pt-4 pl-2 font-semibold">{label}</div>
            {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label> */}
            <input type="text" onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>
    </div>
)}