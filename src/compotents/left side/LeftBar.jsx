
import ProjectLists from "./projects/ProjectLists";
import TeamMembers from "./team/TeamMembers";

const LeftBar = () => {

    return (
        <div class="sidebar">
            {/* <!-- Projects List --> */}
            <ProjectLists/>

            {/* <!-- Team Members --> */}
            <TeamMembers/>
        </div>
    );
}

export default LeftBar;