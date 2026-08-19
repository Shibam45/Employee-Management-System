
const AcceptTask = () => {
  return (
    <div className="bg-[#607456] p-5 shrink-0 w-79 h-full rounded-xl">

            <div className="flex justify-between items-center">
                <h3 className="bg-red-500 text-sm px-3 py-1 rounded">High</h3>
                <h4 className="text-0.5xl text-amber-50">20 Feb 2026</h4>
            </div>
            <h2 className="mt-6 text-2xl font-semibold">Make a Youtube Video</h2>
            <p className="mt-3 text-shadow-mist-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur omnis, nemo vel nobis hic ducimus!</p>
            <div className="flex justify-between mt-4">
                <button className="bg-green-500 py-1 px-2 text-sm">Mark as Completed</button>
                <button className="bg-red-500 py-1 px-2 text-sm">Mark as Failed</button>
            </div>
    </div>
  )
}

export default AcceptTask
