import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav class="container relative py-3">
    <div class="flex items-center justify-between">
      <Link to="/">
        <img src="/images/logo.svg" alt="logo" />
      </Link>
      <div class="flex-1 max-w-xs search-field group">
        <i class="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
        <input type="text" placeholder="Search Task" class="search-input" id="lws-searchTask" />
      </div>
    </div>
  </nav>
     );
}
 
export default Nav;