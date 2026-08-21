import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

const AllTask = () => {
  const [userData] = useContext(AuthContext) || []
  const employees = userData?.employees || []

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </div>
            <div>
                <h2 className="text-xl font-bold text-white font-['Outfit']">Team Task Overview</h2>
                <p className="text-xs text-gray-400">Real-time task distribution across employees</p>
            </div>
        </div>

        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-5 gap-4 py-3 px-5 mb-3 rounded-xl bg-white/5 border border-white/5 text-xs font-bold text-gray-300 uppercase tracking-wider">
              <div>Employee Name</div>
              <div className="text-center">New Task</div>
              <div className="text-center">Active</div>
              <div className="text-center">Completed</div>
              <div className="text-center">Failed</div>
        </div>

        {/* Rows */}
        <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
            {employees.map(function(elem, idx){
            const initial = elem.firstName ? elem.firstName.charAt(0).toUpperCase() : 'E'
            return (
              <div key={idx} className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 items-center py-3.5 px-5 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-white/15 transition-all duration-200">
                <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-xs flex items-center justify-center border border-indigo-500/30">
                    {initial}
                  </div>
                  <span className="font-semibold text-white text-sm">{elem.firstName}</span>
                </div>
                
                <div className="flex justify-between sm:justify-center items-center">
                  <span className="sm:hidden text-xs text-gray-400">New Task: </span>
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {elem.taskCounts.newTask}
                  </span>
                </div>

                <div className="flex justify-between sm:justify-center items-center">
                  <span className="sm:hidden text-xs text-gray-400">Active: </span>
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {elem.taskCounts.active}
                  </span>
                </div>

                <div className="flex justify-between sm:justify-center items-center">
                  <span className="sm:hidden text-xs text-gray-400">Completed: </span>
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {elem.taskCounts.completed}
                  </span>
                </div>

                <div className="flex justify-between sm:justify-center items-center">
                  <span className="sm:hidden text-xs text-gray-400">Failed: </span>
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    {elem.taskCounts.failed}
                  </span>
                </div>
              </div>
            )
            })}
        </div>
    </div>
  )
}

export default AllTask
