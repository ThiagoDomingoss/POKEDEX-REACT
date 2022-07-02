import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import { searchPokemon } from "../Api";
import PokedexFavorite from "../components/PokedexFavorite";
import { FavoritesContext} from "../context/ContextFavorites";
import { BsArrowLeftSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

function Favorites() {

  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [favorites, setFavorites] = useContext(FavoritesContext)

  const fetchPokemons = async () => {
    try {
      setLoading(true);

      const promises = favorites.map(async(pokemon) => {
        return await searchPokemon(pokemon)
      })
      const result = await Promise.all(promises)
      setPokemons(result)
      setLoading(false)
      
    } catch (error) {
      console.log('fetchPokemons', error)
    }
  }

  useEffect(() => {
      const poke = JSON.parse(localStorage.getItem('poke'))?? []
      setFavorites(poke);
    }, [])

  useEffect(() => {  
    fetchPokemons()
  }, [favorites])


  return (
    
    <>
      <Navbar />
      {favorites.length === 0 ? 
        (<div className="not-found">
          <Link to="/home"><div className="arrowback"><BsArrowLeftSquare/></div></Link>
            <div>
            <img alt={"mimikyu"} src={"/assets/sprites3d/mimikyu.gif"}/>
            </div>
            <div>Your Pokeheart is empty...</div>
            </div>) : 
        (<PokedexFavorite 
            pokemons={pokemons} 
            loading={loading} 
            />)}
    </>
   
  );
}

export default Favorites;