
import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const AcceptTask = ({data}) => {
  const [userData, setuserData] = useContext(AuthContext) || []

  const updateTaskStatus = (statusType) => {
    const employees = JSON.parse(localStorage.getItem('employees')) || []
    const loggedInUserStr = localStorage.getItem('loggedInUser')
    if (!loggedInUserStr) return

    const loggedInUser = JSON.parse(loggedInUserStr)

    employees.forEach(emp => {
      if (emp.id === loggedInUser.data?.id || emp.email === loggedInUser.data?.email) {
        emp.tasks.forEach(t => {
          if (t.taskTitle === data.taskTitle && t.taskDate === data.taskDate) {
            t.active = false
            if (statusType === 'completed') t.completed = true
            if (statusType === 'failed') t.failed = true
          }
        })
        if (emp.taskCounts.active > 0) emp.taskCounts.active -= 1
        if (statusType === 'completed') emp.taskCounts.completed = (emp.taskCounts.completed || 0) + 1
        if (statusType === 'failed') emp.taskCounts.failed = (emp.taskCounts.failed || 0) + 1
      }
    })

    localStorage.setItem('employees', JSON.stringify(employees))
    const admin = JSON.parse(localStorage.getItem('admin')) || []
    if (setuserData) {
      setuserData({ employees, admin })
    }
  }

  return (
    <div className="shrink-0 w-80 sm:w-84 glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border border-amber-500/20 bg-gradient-to-b from-amber-500/10 via-slate-900/50 to-slate-900/80 shadow-xl">
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full border border-amber-500/30">
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

      <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/10">
        <button 
          onClick={() => updateTaskStatus('completed')}
          className="flex-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 font-semibold py-2 px-3 rounded-xl text-xs transition-all active:scale-95"
        >
          ✓ Complete
        </button>
        <button 
          onClick={() => updateTaskStatus('failed')}
          className="flex-1 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 font-semibold py-2 px-3 rounded-xl text-xs transition-all active:scale-95"
        >
          ✕ Fail
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
