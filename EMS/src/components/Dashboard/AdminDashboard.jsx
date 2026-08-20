import AllTask from "../../Others/AllTask"
import CreateTask from "../../Others/CreateTask"
import Header from "../../Others/Header"

const AdminDashboard = () => {
  return (
    <div className="h-full w-full p-7 bg-black">
        <Header />
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard
