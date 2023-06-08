import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

const Search = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearch(query);
    handleSearch(query);
  };

  return (
    <div className="input">
      <input
        type="search"
        id="search"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
      />
      <FaSearch className="icon" />
    </div>
  );
};

export default Search;
