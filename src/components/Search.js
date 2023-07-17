import React, {useState} from "react";



function Search({searchList}) {

  const [searchInput, setSearchInput] = useState("")

  function handleSearchInput(e){
    setSearchInput(e.target.value)
    searchList(searchInput)
  }


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearchInput}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
