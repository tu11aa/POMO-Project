import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div id="Search">
      <input id="InputSearch" type="text" placeholder="Search" />
      <div className="td" id="s-cover">
        <button type="submit">
          <div id="s-circle"></div>
          <span></span>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
