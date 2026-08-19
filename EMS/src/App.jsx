import { useEffect } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import Header from "./Others/Header"
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage"


const App = () => {

  useEffect(() => {
    setLocalStorage()
    getLocalStorage() 
  }, [])
  
  return (
    <>
    
    <Login />
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App
