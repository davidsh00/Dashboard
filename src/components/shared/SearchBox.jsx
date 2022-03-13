import "../../styles/searchbox.css";
import { FaSearch } from "react-icons/fa";

function SearchBox() {
  function handleSearch(e){
    e.preventDefault()
    alert('search')
  }
  return (
    <form className="search-box" onSubmit={handleSearch}>
      <input type="text" placeholder=" " id="searchBox" />
      <label htmlFor="searchBox">
        type here...
      </label>
      <button className="search-btn" type="submit">
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchBox;
