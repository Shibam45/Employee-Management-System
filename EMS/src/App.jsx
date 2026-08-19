import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import Header from "./Others/Header"
import { AuthContext } from "./context/AuthProvider"


const App = () => {

  
  const [user, setuser] = useState(null)
  const AuthData = useContext(AuthContext)
  console.log(AuthData)

  const handleLogin = (email,password) => {
      if(email == 'admin@me.com' && password == '123'){
        setuser('admin')
      }else if(email == 'user@me.com' && password == '123'){
        setuser('employee')
      }else{
        alert("Invalid Credentials")
      }
  }

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App
