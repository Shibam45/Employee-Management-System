import { useState } from "react"

const Login = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault() 
        console.log("email is",email)
        console.log("password is",password)
        setemail('')
        setpassword('') //Default behaviour will change
    }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 rounded-2xl border-emerald-600 p-20">
            
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}className="flex flex-col items-center justify-center">

                 <input value={email} onChange={(e)=>{
                    setemail(e.target.value)
                 }}required className="text-black bg-transparent outline-none border-2 border-emerald-600 py-3 px-5 rounded-full" type="email" placeholder="Email"></input>

                 <input value={password} onChange={(e)=>{
                    setpassword(e.target.value)
                 }}required className="text-black bg-transparent outline-none border-2 border-emerald-600 mt-3 py-3 px-5 rounded-full" type="password" placeholder="Enter Password"></input>

                 <button className="mt-6 active:scale-95 text-white outline-none border-none bg-emerald-600 hover:bg-emerald-700 py-3 px-5 rounded-full text-lg">Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login
