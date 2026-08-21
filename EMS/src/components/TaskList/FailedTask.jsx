
const FailedTask = ({data}) => {
  return (
    <div className="shrink-0 w-80 sm:w-84 glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border border-rose-500/20 bg-gradient-to-b from-rose-500/10 via-slate-900/50 to-slate-900/80 shadow-xl">
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="bg-rose-500/20 text-rose-300 text-xs font-semibold px-3 py-1 rounded-full border border-rose-500/30">
            {data.category}
          </span>
          <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {data.taskDate}
          </span>
        </div>

        <h2 className="text-xl font-bold text-white font-['Outfit'] line-clamp-2">{data.taskTitle}</h2>
        <p className="mt-3 text-sm text-gray-300 line-clamp-3 leading-relaxed">{data.taskDescription}</p>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10">
        <button disabled className="w-full bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 cursor-default">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Failed
        </button>
      </div>
    </div>
  )
}

export default FailedTask
