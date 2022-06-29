import React, { useContext, useEffect } from "react";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { FavoritesContext } from "../context/ContextFavorites";

const Pokemon = (props) => {
    const {pokemon} = props
    const [favorites, setFavorites] = useContext(FavoritesContext)

    const updateFavorites = () => {
        let name = pokemon.name
        if(favorites.includes(name)){
            const newFav = favorites.filter(item => {return( item !== name)})
            localStorage.setItem('poke', JSON.stringify(newFav))
            setFavorites(newFav)
        } else{
            const poke = [...favorites, pokemon.name]
            localStorage.setItem('poke', JSON.stringify(poke))
            setFavorites(poke)
        }
    }
    
    useEffect(() => {
        const poke = JSON.parse(localStorage.getItem('poke'))?? []
        setFavorites(poke);
    }, [])

    const favorite = favorites.includes(pokemon.name) ? (<BsHeartFill/>) : (<BsHeart/>);

    
    return(
        <div className={`pokemon-card ${pokemon.types[0].type.name}`}>
            <div className="pokemon-image-container">
                <img alt={pokemon.name} src={`../assets/sprites3d/${pokemon.name}.gif`} />
            </div>
            <div className="info-container">
                <div className="pokemon-content">
                    <h5>{pokemon.id}º</h5>
                    <div className="heart" onClick={updateFavorites}>{favorite}</div>
                    <h4>{pokemon.name}</h4>
                </div>
                <div className="pokemon-type-container">
                    {pokemon.types.map( (type, index) => {
                        return(
                            <div key={index} className={`pokemon-type ${type.type.name}`}>
                                {type.type.name}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )

}

export default Pokemon