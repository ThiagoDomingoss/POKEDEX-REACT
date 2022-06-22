import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { getPokemonData, getPokemons, searchPokemon } from "./Api";
import "./App.css";

function App() {

  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const itemsPerPage = 25

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itemsPerPage, itemsPerPage * page)
      const promises = data.results.map(async(pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const result = await Promise.all(promises)
      setPokemons(result)
      setLoading(false)
      setTotalPages(Math.ceil(data.count / itemsPerPage))
      
    } catch (error) {
      console.log('fetchPokemons', error)
    }
  }

  useEffect(() => {  
    fetchPokemons()
  }, [page])

  const onSearchHandler = async(pokemon) => {
  
    if(!pokemon){
      return fetchPokemons()
    }

    setLoading(true)
    setNotFound(false)

    const result = await searchPokemon(pokemon)
    if(!result){
      setNotFound(true)
    } else {
      setPokemons([result])
      setPage(0)
      setTotalPages(1)
    }
    setLoading(false)

  }

  return (
    <>
      <Navbar />
      <Searchbar onSearch={onSearchHandler}/>
      {notFound ? 
      (<div className="not-found">
        <div>
          <img alt={"mimikyu"} src={"/assets/sprites3d/mimikyu.gif"}/>
        </div>
        <div>Not found...</div>
        </div>) : 
      (
      <Pokedex 
        pokemons={pokemons} 
        loading={loading} 
        page={page} 
        setPage={setPage} 
        totalPages={totalPages}
        />
      )}
      
    </>
  );
}

export default App;
