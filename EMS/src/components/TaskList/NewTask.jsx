
const NewTask = ({data}) => {
  return (
    
        <div className="bg-[#edb05a] p-5 shrink-0 w-78 h-full  rounded-xl">

            <div className="flex justify-between items-center">
                <h3 className="bg-red-500 text-sm px-3 py-1 rounded">{data.category}</h3>
                <h4 className="text-0.5xl text-amber-50">{data.taskDate}</h4>
            </div>
            <h2 className="mt-6 text-2xl font-semibold">{data.taskTitle}</h2>
            <p className="mt-3 text-shadow-mist-300">{data.taskDescription}</p>
            <div className="mt-6">
                <button className="bg-blue-500 rounded font-medium text-xs py-1 px-2">Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask
