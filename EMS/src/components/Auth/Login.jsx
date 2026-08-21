import { useState } from "react"

const Login = ({handleLogin}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault() 
        handleLogin(email,password)
        setemail('')
        setpassword('')
    }

  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-[#090d16] overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-md p-8 sm:p-10 mx-4 rounded-3xl glass-card border border-white/10 shadow-2xl backdrop-blur-xl">
            {/* Header Badge & Title */}
            <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Employee Portal
                </div>
                <h1 className="text-3xl font-bold text-white tracking-tight font-['Outfit']">Welcome Back</h1>
                <p className="text-sm text-gray-400 mt-2">Sign in to access your dashboard & tasks</p>
            </div>
            
            <form onSubmit={submitHandler} className="flex flex-col gap-5">
                <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2 uppercase tracking-wide">Work Email</label>
                    <input 
                        value={email} 
                        onChange={(e) => setemail(e.target.value)}
                        required 
                        type="email" 
                        placeholder="e.g. employee1@example.com"
                        className="w-full text-white bg-slate-900/60 outline-none border border-white/10 focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 py-3.5 px-4 rounded-xl text-sm transition-all placeholder:text-gray-500" 
                    />
                </div>

                <div>
                    <label className="block text-xs font-medium text-gray-300 mb-2 uppercase tracking-wide">Password</label>
                    <input 
                        value={password} 
                        onChange={(e) => setpassword(e.target.value)}
                        required 
                        type="password" 
                        placeholder="••••••••"
                        className="w-full text-white bg-slate-900/60 outline-none border border-white/10 focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 py-3.5 px-4 rounded-xl text-sm transition-all placeholder:text-gray-500" 
                    />
                </div>

                <button 
                    type="submit"
                    className="mt-2 w-full active:scale-[0.98] text-white font-medium bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 py-3.5 px-4 rounded-xl text-base shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200"
                >
                    Sign In
                </button>
            </form>

            {/* Quick Demo Info */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-gray-400">
                <p className="font-semibold text-gray-300 mb-1">Demo Credentials:</p>
                <div className="flex justify-center gap-4 text-gray-400 mt-2">
                    <span className="bg-white/5 px-2.5 py-1 rounded border border-white/5"><strong className="text-emerald-400">Admin:</strong> admin@me.com | 123</span>
                    <span className="bg-white/5 px-2.5 py-1 rounded border border-white/5"><strong className="text-emerald-400">Emp:</strong> employee1@example.com | 123</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
