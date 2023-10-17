import "../stylesheets/SearchBar.css";
import { FaSearch } from "react-icons/fa";
export const SearchBar = ({ searchFunc }) => {
  return (
    <div className="search">
      <FaSearch onClick={searchFunc} />
      <input type="text" placeholder="Search" className="search-bar" />
    </div>
  );
};
