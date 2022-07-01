import React from "react";
import Pokemon from "./Pokemon";

const PokedexFavorite = (props) => {
    const {pokemons, loading} = props
    

    return(
        <div>
            <div className="pokedex-title">
                <div className="light">
                <div className="pokelight"></div>
                <h1>Favorites</h1>
                </div>
            </div>
            {loading ? 
            (<div className="loading">Loading...</div>) :
            (<div className="pokedex-grid">
                {pokemons.map((pokemon, index) => {
                    return(
                        <Pokemon key={index} pokemon={pokemon}/>
                    )
                })}
                    
            </div>)
            }
        </div>
    )
}

export default PokedexFavorite;