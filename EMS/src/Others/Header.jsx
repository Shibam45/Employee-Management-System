
const Header = (props) => {
  const name = props.data?.firstName || 'Shibam'
  const roleLabel = props.data?.firstName ? 'Employee Dashboard' : 'Admin Control Panel'
  const initial = name.charAt(0).toUpperCase()

  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
    if (props.changeUser) {
      props.changeUser('')
    }
  }

  return (
    <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white text-xl font-bold font-['Outfit'] shadow-lg shadow-emerald-500/20 border border-white/20">
          {initial}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              {roleLabel}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-['Outfit'] mt-1 tracking-tight">
            Hello, <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">{name}</span> 👋
          </h1>
        </div>
      </div>

      <button 
        onClick={logOutUser}
        className="flex items-center gap-2 bg-rose-500/10 hover:bg-rose-500/20 active:scale-95 text-rose-300 hover:text-rose-200 border border-rose-500/20 hover:border-rose-500/40 text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-rose-500/5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Log Out
      </button>
    </div>
  )
}

export default Header
