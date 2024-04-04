import TaskLoader from "../compotents/utils/TaskLoader";
import TeamLoader from "../compotents/utils/TeamLoader";
import ProjectLoader from "../compotents/utils/ProjectLoader";

const Test = () => {
  return (
    <div class="container relative">
      <div class="sidebar">
        {/* <!-- Projects List --> */}
        <div>
          <h3 class="text-xl font-bold">Projects</h3>

         <ProjectLoader/>
        </div>

        {/* <!-- Team Members --> */}
        <div class="mt-8">
          <h3 class="text-xl font-bold">Team Members</h3>
          <div class="mt-3 space-y-4">
            <div>
             <TeamLoader/>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- main  --> */}
      <div class="lg:pl-[16rem] 2xl:pl-[23rem]">
        <main class="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
          <div class="justify-between mb-10 space-y-2 md:flex md:space-y-0">
            <a href="./AddNew.html" class="lws-addnew group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 group-hover:text-indigo-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>

              <span class="group-hover:text-indigo-500">Add New</span>
            </a>
          </div>

          <div class="lws-task-list">
            <TaskLoader/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Test;
