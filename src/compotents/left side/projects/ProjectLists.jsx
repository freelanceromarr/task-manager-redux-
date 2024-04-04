import { useState } from "react";
import { useGetProjectsQuery } from "../../../features/projects/projectApi";
import ProjectLoader from "../../utils/ProjectLoader";
import { projectFilter } from "../../../features/projects/projectsFilter";
import { useDispatch } from "react-redux";


const ProjectLists = () => {
     
    const {data:projects, isLoading, isError, error}= useGetProjectsQuery()
    const dispatch = useDispatch()
    //let decide what to render
    let content;
    if (!isError && isLoading) {
        content= <ProjectLoader/>
    }
    if (isError && !isLoading) {
        content = <div><p className="text-center">{error.message}</p></div>
    }
    if (!isError && !isLoading && projects?.length===0 ) {
        content = <div><p className="text-center">No project found</p></div>
    }
    if (!isError && !isLoading && projects?.length>0 ) {
        content = projects.map((project)=>{
            const{id, projectName, colorClass} = project || {}
            return <div class="checkbox-container">
            <input type="checkbox" class={colorClass} value={projectName} onChange={e=>projectFilterHandler(e.target.value)} />
            <p class="label">{projectName}</p>
        </div> 
        })
    }

    //functions
    const projectFilterHandler = (value) => {
        dispatch(projectFilter(value))
    }
    return (
        <div>
            <h3 class="text-xl font-bold">Projects</h3>
            <div class="mt-3 space-y-4">
                {content}
            </div>
        </div>
    );
}

export default ProjectLists;