import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import Header from "./Others/Header"
import { AuthContext } from "./context/AuthProvider"


const App = () => {
  const [user, setuser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData, setuserData] = useContext(AuthContext) || []

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){
      try {
        const parsedUser = JSON.parse(loggedInUser)
        setuser(parsedUser.role)
        if (parsedUser.role === 'employee' && userData?.employees) {
          const currentEmployee = userData.employees.find(e => e.id === parsedUser.data?.id || e.email === parsedUser.data?.email)
          if (currentEmployee) {
            setloggedInUserData(currentEmployee)
          } else {
            setloggedInUserData(parsedUser.data)
          }
        } else {
          setloggedInUserData(parsedUser.data)
        }
      } catch(err) {
        console.error(err)
      }
    }
  }, [userData])

  const handleLogin = (email,password) => {
      if(email == 'admin@me.com' && password == '123'){
        setuser('admin')
        setloggedInUserData({ firstName: 'Shibam' })
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin', data: { firstName: 'Shibam' }}))
      }else if(userData && userData.employees){
        const employee = userData.employees.find((e) => email == e.email && e.password == password)
        if(employee){
          setuser('employee')
          setloggedInUserData(employee)
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee }))
        }else{
          alert("Invalid Credentials")
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
