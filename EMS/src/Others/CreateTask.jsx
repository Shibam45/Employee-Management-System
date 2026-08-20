
const CreateTask = () => {

    const submitHandler = (e) => {
        e.preventDefault
    }
  return (
    <div className="p-5 bg-[#1C1C1C] mt-6 rounded">
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}className="flex flex-wrap items-start justify-between w-full">

                <div className="w-1/2">
                    <div>
                        <h3 className="text-sm text-orange-200 mb-0.5">Task Title</h3>
                        <input className="text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-500 mb-4" type="text" placeholder="Make a UI design"/>
                    </div>
                    <div>
                        <h3 className="text-sm text-orange-200 mb-0.5">Date</h3>
                        <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border text-white border-gray-500 mb-4" type="date" placeholder="dd/mm/yyyy"/>
                    </div>
                    <div>
                        <h3 className="text-sm text-orange-200 mb-0.5">Assign To</h3>
                        <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border text-white border-gray-500 mb-4" type="text" placeholder="Employee Name" />
                    </div>
                    <div>
                        <h3 className="text-sm text-orange-200 mb-0.5">Category</h3>
                        <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border text-white border-gray-500 mb-4" type="text" placeholder="Design, Development etc..."/>
                    </div>
                </div>

                <div className="w-2/5 flex flex-col items-start">
                    <h3 className="text-sm text-orange-200 mb-0.5">Description</h3>
                    <textarea className="text-sm py-2 px-4 w-full h-40 rounded outline-none bg-transparent border text-white border-gray-500 mb-4" name="" id=""/>
                    <button className="px-5 text-sm mt-4 w-full rounded hover:bg-[#607d33] py-3 active:scale-95 bg-[#8DB355]">Create Task</button>
                </div>

            </form>

        </div>
  )
}

export default CreateTask
