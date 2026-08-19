
const FailedTask = () => {
  return (
    <div className="bg-[#BA6A4C] p-5 shrink-0 w-78 h-full  rounded-xl">

            <div className="flex justify-between items-center">
                <h3 className="bg-red-500 text-sm px-3 py-1 rounded">High</h3>
                <h4 className="text-0.5xl text-amber-50"></h4>
            </div>
            <h2 className="mt-6 text-2xl font-semibold">Make a Youtube Video</h2>
            <p className="mt-3 text-shadow-mist-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur omnis, nemo vel nobis hic ducimus!</p>
            <div className="mt-2">
                <button className="w-full">Failed</button>
            </div>
    </div>
  )
}

export default FailedTask
