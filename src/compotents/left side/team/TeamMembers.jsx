import { useGetTeamsQuery } from "../../../features/teams/teamApi";
import TeamLoader from "../../utils/TeamLoader";
import SingleMember from "./SingleMember";

const TeamMembers = () => {
    const {data:teams, isLoading, isError, error} = useGetTeamsQuery();

    //decide what to render
    let content;
    if (!isError && isLoading) {
        content= <TeamLoader/>
    }
    if (isError && !isLoading) {
        content = <div><p className="text-center">{error.message}</p></div>
    }
    if (!isError && !isLoading && teams?.length===0 ) {
        content = <div><p className="text-center">No team member found</p></div>
    }
    if (!isError && !isLoading && teams?.length>0 ) {
        content = teams.map((team)=>{
            return <SingleMember team={team}  />
        })
    }
    return ( 
        <div class="mt-8">
                <h3 class="text-xl font-bold">Team Members</h3>
                <div class="mt-3 space-y-4">
                    {content}
                </div>
            </div>
     );
}
 
export default TeamMembers;