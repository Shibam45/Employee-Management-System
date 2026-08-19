import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  return (
    <div className="mt-6 flex items-center justify-start gap-5 flex-nowrap h-[55%] overflow-x-auto overflow-y-hidden w-full py-5 hide-scrollbar ">
        {data.tasks.map((elem,idx) => {
            if(elem.active){
                return <AcceptTask key={idx} />
            }
            if(elem.newTask){
                return <NewTask key={idx}/>
            }
            if(elem.completed){
                return <CompleteTask key={idx}/>
            }
            if(elem.failed){
                return <FailedTask key={idx}/>
            }
        })}
    </div>
  )
}

export default TaskList
