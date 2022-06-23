import React, { useState } from "react";

const Searchbar = (props) => {
  const [search, setSearch] = useState("");
  const {onSearch} = props;

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if(e.target.value.length === 0){
      onSearch(undefined)
    }
  };

  const iChooseYou = () => {
    onSearch(search);
  }

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input type="search" placeholder=" Search..." onChange={onChangeHandler} />
      </div>
      <div className="searchbar-btn">
        <button onClick={iChooseYou}>I choose you !</button>
      </div>
    </div>
  );
};

export default Searchbar;
