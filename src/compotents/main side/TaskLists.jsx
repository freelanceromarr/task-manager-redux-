
import { useGetTasksQuery } from "../../features/tasks/taskApi";
import Task from "./Task"
import TaskLoader from "../utils/TaskLoader"
import { useSelector } from "react-redux";


const TaskLists = () => {
const {projects} = useSelector(state=>state.projectFilter)
const {data: tasks, isLoading, isError, error} = useGetTasksQuery()

    //decide what to render
let content;
if (!isError && isLoading) {
    content= <TaskLoader/>
}
if (isError && !isLoading) {
    content = <div><p className="text-center">{error.message}</p></div>
}
if (!isError && !isLoading && tasks?.length===0 ) {
    content = <div><p className="text-center">No project found</p></div>
}
if (!isError && !isLoading && tasks?.length>0 ) {
    const allTasks = tasks.filter((task)=>{
        if (projects.length>0) {
            return projects.includes(task.project.projectName)
        }
        return task
       
    }).map((task)=>{
        
        return <Task task={task} />
    })
    if (allTasks.length>0){
        content= allTasks
    }else{
        content = <div><p className="text-center">No project found</p></div>
    }
}
    return (
        <div class="lws-task-list">
            {content}
        </div>
    );
}

export default TaskLists;