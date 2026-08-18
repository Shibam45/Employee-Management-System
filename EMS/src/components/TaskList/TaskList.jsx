

const TaskList = () => {
  return (
    <div className="mt-10 flex items-center justify-start gap-5 flex-nowrap h-[55%] overflow-x-auto w-full py-5">

        <div className="bg-orange-400 p-5 shrink-0 w-75 h-full  rounded-xl">

            <div className="flex justify-between items-center">
                <h3 className="bg-red-500 text-sm px-3 py-1 rounded">High</h3>
                <h4 className="text-0.5xl text-amber-50">20 Feb 2026</h4>
            </div>
            <h2 className="mt-6 text-2xl font-semibold">Make a Youtube Video</h2>
            <p className="mt-3 text-shadow-mist-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur omnis, nemo vel nobis hic ducimus!</p>
        </div>

        <div className="bg-amber-400 shrink-0 w-75 h-full  rounded-xl">

        </div>
        <div className="bg-amber-400 shrink-0 w-75 h-full  rounded-xl">

        </div>
        <div className="bg-amber-400 shrink-0 w-75 h-full  rounded-xl">

        </div>
        <div className="bg-amber-400 shrink-0 w-75 h-full  rounded-xl">

        </div>
        <div className="bg-amber-400 shrink-0 w-75 h-full  rounded-xl">

        </div>
    </div>
  )
}

export default TaskList
