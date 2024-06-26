import { Link } from "react-router-dom";
import TaskLists from "./TaskLists";

const Main = () => {


    return (
        <div class="lg:pl-[16rem] 2xl:pl-[23rem]">
            <main class="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
                <div class="justify-between mb-10 space-y-2 md:flex md:space-y-0">
                    <Link to="/add-task" class="lws-addnew group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 group-hover:text-indigo-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                        <span class="group-hover:text-indigo-500 ">Add New</span>
                    </Link>
                </div>

                <TaskLists />
            </main>
        </div>
    );
}

export default Main;