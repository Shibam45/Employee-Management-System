

const TaskListNumber = ({data}) => {
  const counts = data?.taskCounts || { newTask: 0, completed: 0, active: 0, failed: 0 }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      
      <div className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden group border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-slate-900/40 to-slate-900/60">
        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-all"></div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">New Tasks</span>
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>
        <h2 className="text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">{counts.newTask}</h2>
        <p className="text-xs text-gray-400 mt-1">Assigned recently</p>
      </div>

      
      <div className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden group border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-slate-900/40 to-slate-900/60">
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all"></div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">Completed</span>
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h2 className="text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">{counts.completed}</h2>
        <p className="text-xs text-gray-400 mt-1">Finished successfully</p>
      </div>

      
      <div className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden group border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-slate-900/40 to-slate-900/60">
        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-all"></div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">In Progress</span>
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <h2 className="text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">{counts.active}</h2>
        <p className="text-xs text-gray-400 mt-1">Currently active</p>
      </div>

      
      <div className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden group border border-rose-500/20 bg-gradient-to-br from-rose-500/10 via-slate-900/40 to-slate-900/60">
        <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/10 rounded-full blur-xl group-hover:bg-rose-500/20 transition-all"></div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-md border border-rose-500/20">Failed</span>
          <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center text-rose-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        <h2 className="text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">{counts.failed}</h2>
        <p className="text-xs text-gray-400 mt-1">Overdue or unfulfilled</p>
      </div>
    </div>
  )
}

export default TaskListNumber
