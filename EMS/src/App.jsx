import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import Header from "./Others/Header"
import { AuthContext } from "./context/AuthProvider"


const App = () => {

  
  const [user, setuser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
       const loggedInUser = localStorage.getItem("loggedInUser")
       if(loggedInUser){
         const userData = JSON.parse(loggedInUser)
         setuser(userData.role)
         setloggedInUserData(userData.data)
       }
  }, [authData])
  

  const handleLogin = (email,password) => {
      if(email == 'admin@me.com' && password == '123'){
        setuser('admin')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      }else if(authData){
        const employee = authData.employees.find((e) => email == e.email && e.password == password)
        if(employee){
          setuser('employee')
          setloggedInUserData(employee)
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee }))
        }
      }else{
        alert("Invalid Credentials")
      }
  }

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user == 'admin' ? <AdminDashboard changeUser = {setuser}  /> : (user == 'employee' ? <EmployeeDashboard changeUser = {setuser} data={loggedInUserData}/> : null)}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App
