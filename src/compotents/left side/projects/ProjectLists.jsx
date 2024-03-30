import { useGetProjectsQuery } from "../../../features/projects/projectApi";

const ProjectLists = () => {
    // const {data:projects, isLoadding, isError, error}= useGetProjectsQuery()

    // //let decide what to render
    // let content;
    // if (!isError && isLoadding) {
        
    // }
    return (
        <div>
            <h3 class="text-xl font-bold">Projects</h3>
            <div class="mt-3 space-y-4">
                <div class="checkbox-container">
                    <input type="checkbox" class="color-scoreboard" checked />
                    <p class="label">Scoreboard</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectLists;