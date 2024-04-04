import { useState } from "react";
import { useUpdateStatusMutation } from "../../features/tasks/taskApi";

const StatusList = ({task}) => {
    const {id,taskName, teamMember, project, status, deadline} = task || {};
    const [updateStatus, result] = useUpdateStatusMutation()

        console.log(task);
    //change status handler @function
    const statusHandler = (e)=>{
        console.log(id, status);
        updateStatus({id, data:{...task, status:e.target.value}})
        // alert(e.target.value)
    }

    return (
        <select value={status} class="lws-status" onChange={e=>statusHandler(e)}>
            <option value='pending' selected={status==='pending' && true}>Pending</option>
            <option value='In Progress' selected={status==='inProgress' && true}>In Progress</option>
            <option value="completed" selected={status==='completed' && true}>Completed</option>
        </select>
    );
}

export default StatusList;