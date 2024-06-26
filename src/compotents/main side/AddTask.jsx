import { useState } from "react";
import { useGetProjectsQuery } from "../../features/projects/projectApi";
import {usePostTaskMutation } from "../../features/tasks/taskApi";
import { useGetTeamsQuery } from "../../features/teams/teamApi";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
    const { data: projects, isLoading, isError, error } = useGetProjectsQuery()
    const { data: teams, isLoading: loading, isError: hasError, error: err } = useGetTeamsQuery()
    const [postTask, result] = usePostTaskMutation();
    const navigate = useNavigate()

    //form data
    const [inputs, setInputs] = useState({
        taskName: '',
        teamMember: {},
        project: {},
        deadline: '',
        status: 'pending'
    })


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
            return <option value={JSON.stringify(project)}>{projectName}</option>
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
            return <option value={JSON.stringify(team)} key={id}>{name}</option>
        })
    }

    //add task handler
    const addTaskHandler = (e) => {
        e.preventDefault();
        postTask(
            { 
            taskName: inputs.taskName, 
            teamMember: JSON.parse(inputs.teamMember), 
            project: JSON.parse(inputs.project), 
            status: inputs.status, 
            deadline: inputs.deadline 
            }
        )
        navigate('/')

    }
    return (
        <div class="container relative">
            <main class="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
                <h1 class="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
                    Create Task for Your Team
                </h1>

                <div class="justify-center mb-10 space-y-2 md:flex md:space-y-0">
                    <form class="space-y-6" onSubmit={addTaskHandler}>
                        <div class="fieldContainer">
                            <label for="lws-taskName">Task Name</label>
                            <input
                                type="text"
                                name="taskName"
                                id="lws-taskName"
                                required
                                placeholder="Implement RTK Query"
                                onChange={e => setInputs({ ...inputs, taskName: e.target.value })}
                            />
                        </div>

                        <div class="fieldContainer">
                            <label>Assign To</label>
                            <select
                                onChange={e => setInputs({ ...inputs, teamMember: e.target.value })}
                                name="teamMember"
                                id="lws-teamMember"
                                required>
                                <option value="" hidden selected>Select Job</option>
                                {teamContent}
                            </select>
                        </div>
                        <div class="fieldContainer">
                            <label for="lws-projectName">Project Name</label>
                            <select id="lws-projectName" name="projectName" required onChange={e => setInputs({ ...inputs, project: e.target.value })}>
                                <option value="" hidden selected>Select Project</option>
                                {projectContent}
                            </select>
                        </div>

                        <div class="fieldContainer">
                            <label for="lws-deadline">Deadline</label>
                            <input type="date" name="deadline" id="lws-deadline" required onChange={e => setInputs({ ...inputs, deadline: e.target.value })} />
                        </div>

                        <div class="text-right">
                            <button type="submit" class="lws-submit bg-purple-700 py-2 px-8 text-white rounded-md">Save</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default AddTask;