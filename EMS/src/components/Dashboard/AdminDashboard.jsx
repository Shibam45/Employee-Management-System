import AllTask from "../../Others/AllTask"
import CreateTask from "../../Others/CreateTask"
import Header from "../../Others/Header"

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-full p-6 sm:p-10 bg-[#090d16] text-white selection:bg-emerald-500 selection:text-white">
        <div className="max-w-7xl mx-auto">
          <Header changeUser={props.changeUser} data={props.data}/>
          <CreateTask />
          <AllTask />
        </div>
    </div>
  )
}

export default AdminDashboard
