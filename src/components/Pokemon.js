import React from "react";

const Pokemon = (props) => {
    const {pokemon} = props

    
    return(
        <div className={`pokemon-card ${pokemon.types[0].type.name}`}>
            <div className="pokemon-image-container">
                <img alt={pokemon.name} src={`../assets/sprites3d/${pokemon.name}.gif`} />
            </div>
            <div className="info-container">
                <div className="pokemon-content">
                    <h5>{pokemon.id}º</h5>
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