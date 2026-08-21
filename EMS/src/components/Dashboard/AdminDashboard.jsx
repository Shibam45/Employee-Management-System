import AllTask from "../../Others/AllTask"
import CreateTask from "../../Others/CreateTask"
import Header from "../../Others/Header"

const AdminDashboard = (props) => {
  return (
    <div className="h-full w-full p-7 bg-black">
        <Header changeUser={props.changeUser}/>
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard
