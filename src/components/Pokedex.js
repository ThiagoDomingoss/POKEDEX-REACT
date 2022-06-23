import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
    const {pokemons, loading, page, setPage, totalPages} = props

    const onPrevClick = () => {
        if(page > 0){
            setPage(page - 1)
        }
    }
    const onNextClick = () => {
        if(page+1 !== totalPages){
            setPage(page + 1)
        }
    }
    

    return(
        <div>
            <div className="pokedex-title">
                <div className="light">
                <div className="pokelight"></div>
                <h1>Pokedex</h1>
                </div>
                <Pagination
                page={page + 1}
                totalPages={totalPages}
                onPrevClick={onPrevClick}
                onNextClick={onNextClick}
                />
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

export default Pokedex