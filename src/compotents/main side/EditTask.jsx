import { useEffect, useState } from "react";
import { useGetProjectsQuery } from "../../features/projects/projectApi";
import {taskApi, useGetTaskQuery, usePostTaskMutation, useUpdateTaskMutation } from "../../features/tasks/taskApi";
import { useGetTeamsQuery } from "../../features/teams/teamApi";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const EditTask = () => {
    const { data: projects, isLoading, isError, error } = useGetProjectsQuery()
    const { data: teams, isLoading: loading, isError: hasError, error: err } = useGetTeamsQuery()
    const [updateTask, result ] = useUpdateTaskMutation()
    const [getTask, setGetTask] = useState(
        {
            taskName: '',
            teamMember: {},
            project: {},
            deadline: ''
        }
    )
    const {id:taskId}= useParams();

    const dispatch = useDispatch()
    const navigate = useNavigate();
        console.log(getTask);

    //form data
    // const [inputs, setInputs] = useState({
    //     taskName: '',
    //     teamMember: {},
    //     project: {},
    //     deadline: '',
    //     status: 'pending'
    // })


    // list of project 
    let projectContent;
    if (!isError && isLoading) {
        projectContent = <option>Loading</option>
    }
    if (isError && !isLoading) {
        projectContent = <option>something wrong</option>
    }
    if (!isError && !isLoading && projects?.length === 0) {
        projectContent = <option>No Project found</option>
    }
    if (!isError && !isLoading && projects?.length > 0) {
        projectContent = projects?.map((project) => {
            const { projectName } = project || {}
            return <option value={JSON.stringify(project)} selected={getTask?.project.projectName === projectName && true} >{projectName}</option>
        })
    }

    // list of project 
    let teamContent;
    if (!isError && isLoading) {
        teamContent = <option>Loading</option>
    }
    if (isError && !isLoading) {
        teamContent = <option>something wrong</option>
    }
    if (!isError && !isLoading && teams?.length === 0) {
        teamContent = <option>No Project found</option>
    }
    if (!isError && !isLoading && teams?.length > 0) {
        teamContent = teams?.map((team) => {
            const { id, name } = team || {};
            return <option value={JSON.stringify(team)} key={id} selected={getTask?.teamMember.name === name && true} >{name}</option>
        })
    }

    //add task handler
    const editTaskHandler = (e) => {
        e.preventDefault();
        updateTask({id:taskId, data: { 
            taskName: getTask?.taskName, 
            teamMember: typeof getTask?.teamMember === 'string' ? JSON.parse(getTask?.teamMember) : getTask?.teamMember, 
            project: typeof getTask?.project === 'string' ? JSON.parse(getTask?.project) : getTask?.project, 
            deadline: getTask?.deadline 
            }})
        navigate('/')

    }

    //fetch single task for updating
    useEffect(()=>{
        dispatch(taskApi.endpoints.getTask.initiate(taskId)).unwrap().then(res=>{
            setGetTask({...res}) 
            // console.log(res)
        })
        
        
    },[ dispatch, taskId])
    return (
        <div class="container relative">
            <main class="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
                <h1 class="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
                    Edit/Update Task for Your Team
                </h1>

                <div class="justify-center mb-10 space-y-2 md:flex md:space-y-0">
                    <form class="space-y-6" onSubmit={editTaskHandler}>
                        <div class="fieldContainer">
                            <label for="lws-taskName">Task Name</label>
                            <input
                                type="text"
                                name="taskName"
                                id="lws-taskName"
                                required
                                placeholder="Implement RTK Query"
                                value={getTask?.taskName}
                                onChange={e => setGetTask({ ...getTask, taskName: e.target.value })}
                            />
                        </div>

                        <div class="fieldContainer">
                            <label>Assign To</label>
                            <select
                                onChange={e => setGetTask({ ...getTask, teamMember: e.target.value })}
                                name="teamMember"
                                id="lws-teamMember"
                                required>
                                <option value="" hidden selected>Select Job</option>
                                {teamContent}
                            </select>
                        </div>
                        <div class="fieldContainer">
                            <label for="lws-projectName">Project Name</label>
                            <select id="lws-projectName" name="projectName" required onChange={e => setGetTask({ ...getTask, project: e.target.value })}>
                                <option value="" hidden selected>Select Project</option>
                                {projectContent}
                            </select>
                        </div>

                        <div class="fieldContainer">
                            <label for="lws-deadline">Deadline</label>
                            <input type="date" name="deadline" id="lws-deadline" required value={getTask?.deadline} onChange={e => setGetTask({ ...getTask, deadline: e.target.value })} />
                        </div>

                        <div class="text-right">
                            <button type="submit" class="lws-submit bg-purple-700 py-2 px-8 text-white rounded-md">Update</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default EditTask;