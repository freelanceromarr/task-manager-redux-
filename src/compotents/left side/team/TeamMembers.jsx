import SingleMember from "./SingleMember";

const TeamMembers = () => {
    return ( 
        <div class="mt-8">
                <h3 class="text-xl font-bold">Team Members</h3>
                <div class="mt-3 space-y-4">
                    <SingleMember/>

                    <div class="checkbox-container">
                        <img src="./images/avatars/sadh.png" class="team-avater" alt="team" />
                        <p class="label">Sadh Hasan</p>
                    </div>

                    <div class="checkbox-container">
                        <img src="./images/avatars/akash.png" class="team-avater" alt="team" />
                        <p class="label">Akash Ahmed</p>
                    </div>

                    <div class="checkbox-container">
                        <img src="./images/avatars/salahuddin.png" class="team-avater" alt="team" />
                        <p class="label">Md Salahuddin</p>
                    </div>

                    <div class="checkbox-container">
                        <img src="./images/avatars/riyadh.png" class="team-avater" alt="team" />
                        <p class="label">Riyadh Hassan</p>
                    </div>

                    <div class="checkbox-container">
                        <img src="./images/avatars/ferdous.png" class="team-avater" alt="team" />
                        <p class="label">Ferdous Hassan</p>
                    </div>

                    <div class="checkbox-container">
                        <img src="./images/avatars/almas.png" class="team-avater" alt="team" />
                        <p class="label">Arif Almas</p>
                    </div>
                </div>
            </div>
     );
}
 
export default TeamMembers;