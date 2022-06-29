import React, {useState, createContext} from 'react'

export const FavoritesContext = createContext();

export function FavoritesProvider(props){
    const [favorites, setFavorites] = useState([]);

    return(
        <FavoritesContext.Provider value={[favorites, setFavorites]}>
            {props.children}
        </FavoritesContext.Provider>
    )
}