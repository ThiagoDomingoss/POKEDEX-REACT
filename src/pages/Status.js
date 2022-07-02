import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import "../App.css";
import { BsArrowLeftSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const Status = () => {

  const [pokemons, setPokemons] = useState({})
  const [tipos, setTipos] = useState([])
  const [stats, setStats] = useState([])
  const { id } = useParams()

  
  const searchPokemon = async (id) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const response = await fetch(url)
        const data = await response.json()

        
        setPokemons(data)
        setTipos(data.types.map((type) => type.type.name));
        setStats(data.stats.map((stat) => stat));
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(() => { 
    searchPokemon(id)
    
  }, [id]);


  return (
    
    <>
    <Navbar />
    
    <div className={`status-container ${tipos[0]}`}>
      <div className="pokecard">
                <Link to="/home"><div className="arrowback"><BsArrowLeftSquare/></div></Link>
                <div className="pokecard-name">
                    <h2>{pokemons.name}</h2>
                </div>

                <div className="pokecard-img">
                    <img alt={pokemons.name} src={`../assets/sprites3d/${pokemons.name}.gif`} />
                </div>

                <div className="pokecard-hw">
                    <div className="hw">Height: {pokemons.height / 10} m</div>
                    <div className="hw">Weight: {pokemons.weight / 10} kg</div>
                </div>

                
                <div className="pokecard-types">
                    {tipos.map((tipo, index) => {
                            return(
                                <div key={index} className={`pokecard-tipo ${tipo}`}>
                                    {tipo}
                                </div>)})}
                </div>

            </div>
                      
            <div className="stats-container">

                {stats.map((stats, index) => {
                    return(
                        <div key={index} className="stats-content">
                            <div  className="stats-name">{stats.stat.name}</div>
                            <div className="stats-base">{stats.base_stat}</div>
                        </div>
                    )
                })}
                
            </div>
      </div>
   </>
  );
}

export default Status;