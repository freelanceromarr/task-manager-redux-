const TaskLoader = () => {
    return ( 
        <div role="status" class=" animate-pulse my-4">
              <div class="h-10 bg-gray-100 rounded-lg  dark:bg-gray-300 w-full mb-2"></div>
              <div class="h-10 bg-gray-100 rounded-lg  dark:bg-gray-300 w-full mb-2"></div>
              <div class="h-10 bg-gray-100 rounded-lg  dark:bg-gray-300 w-full mb-2"></div>
              <div class="h-10 bg-gray-100 rounded-lg  dark:bg-gray-300 w-full mb-2"></div>
              <div class="h-10 bg-gray-100 rounded-lg  dark:bg-gray-300 w-full mb-2"></div>
              <div class="h-10 bg-gray-100 rounded-lg  dark:bg-gray-300 w-full mb-2"></div>

              <span class="sr-only">Loading...</span>
            </div>
     );
}
 
export default TaskLoader;