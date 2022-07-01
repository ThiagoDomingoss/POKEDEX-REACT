import React, { useContext, useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { FavoritesContext } from "../context/ContextFavorites";
import { Link } from "react-router-dom";

const Searchbar = (props) => {
  const [search, setSearch] = useState("");
  const {onSearch} = props;
  const [favorites] = useContext(FavoritesContext)

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
      <Link to="/favorites">
      <div className="favorites">
        <h2>Favorites</h2>
        <BsHeartFill/>
        <h2>{favorites.length}</h2>
      </div>
      </Link>
      <div className="searchbar-content">
      <div className="searchbar">
        <input type="search" placeholder=" Search..." onChange={onChangeHandler} />
      </div>
      <div className="searchbar-btn">
        <button onClick={iChooseYou}>I choose you !</button>
      </div>
      </div>
    </div>
  );
};

export default Searchbar;
