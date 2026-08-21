import { useState, useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

const CreateTask = () => {
    const [userData, setuserData] = useContext(AuthContext) || []

    const [taskTitle, settaskTitle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [category, setcategory] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const newTaskObj = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            completed: false,
            failed: false
        }

        const data = JSON.parse(localStorage.getItem('employees')) || []

        let assigned = false
        data.forEach((element) => {
            if(assignTo.trim().toLowerCase() === element.firstName.toLowerCase()){
                element.tasks.push(newTaskObj)
                element.taskCounts.newTask = (element.taskCounts.newTask || 0) + 1
                assigned = true
            }
        });

        if (assigned) {
            localStorage.setItem('employees', JSON.stringify(data))
            const adminData = JSON.parse(localStorage.getItem('admin')) || []
            if (setuserData) {
              setuserData({ employees: data, admin: adminData })
            }
            alert(`Task assigned to ${assignTo} successfully!`)
            setassignTo('')
            setcategory('')
            settaskDate('')
            settaskDescription('')
            settaskTitle('')
        } else {
            alert(`Employee "${assignTo}" not found. Please enter a valid employee name (e.g. Aarav, Arjun, Aditya, Priya, Rohan).`)
        }
    }

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 mb-8 border border-white/10 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div>
                <h2 className="text-xl font-bold text-white font-['Outfit']">Assign New Task</h2>
                <p className="text-xs text-gray-400">Fill details to assign a task to an employee</p>
            </div>
        </div>

        <form onSubmit={submitHandler} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Inputs */}
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Task Title</label>
                    <input 
                        value={taskTitle}
                        onChange={(e) => settaskTitle(e.target.value)}
                        required
                        className="w-full text-sm text-white py-3 px-4 rounded-xl outline-none bg-slate-900/60 border border-white/10 focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-gray-500" 
                        type="text" 
                        placeholder="e.g. Design Landing Page UI"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Due Date</label>
                        <input 
                            value={taskDate}
                            onChange={(e) => settaskDate(e.target.value)}
                            required
                            className="w-full text-sm text-white py-3 px-4 rounded-xl outline-none bg-slate-900/60 border border-white/10 focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all text-gray-200" 
                            type="date"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Assign To (First Name)</label>
                        <input
                            value={assignTo}
                            onChange={(e) => setassignTo(e.target.value)} 
                            required
                            className="w-full text-sm text-white py-3 px-4 rounded-xl outline-none bg-slate-900/60 border border-white/10 focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-gray-500" 
                            type="text" 
                            placeholder="e.g. Arjun, Aarav" 
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Category</label>
                    <input 
                        value={category}
                        onChange={(e) => setcategory(e.target.value)}
                        required
                        className="w-full text-sm text-white py-3 px-4 rounded-xl outline-none bg-slate-900/60 border border-white/10 focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-gray-500" 
                        type="text" 
                        placeholder="e.g. Design, Frontend, Testing"
                    />
                </div>
            </div>

            {/* Right Description & Action */}
            <div className="flex flex-col justify-between space-y-4">
                <div className="flex-1 flex flex-col">
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Description</label>
                    <textarea 
                        value={taskDescription}
                        onChange={(e) => settaskDescription(e.target.value)}
                        required
                        className="w-full flex-1 min-h-[140px] text-sm py-3 px-4 rounded-xl outline-none bg-slate-900/60 border border-white/10 focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 text-white transition-all placeholder:text-gray-500 resize-none" 
                        placeholder="Write detailed task instructions here..."
                    />
                </div>
                <button 
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 active:scale-[0.99] shadow-lg shadow-emerald-500/20 transition-all duration-200"
                >
                    Publish & Assign Task
                </button>
            </div>
        </form>
    </div>
  )
}

export default CreateTask
