
import Header from '../../Others/Header'
import TaskListNumber from '../../Others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen w-full p-6 sm:p-10 bg-[#090d16] text-white selection:bg-emerald-500 selection:text-white">
      <div className="max-w-7xl mx-auto">
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumber data={props.data}/>
        <TaskList data={props.data}/>
      </div>
    </div>
  )
}

export default EmployeeDashboard
