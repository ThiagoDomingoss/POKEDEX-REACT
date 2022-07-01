import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import "./App.css";
import { FavoritesProvider} from "./context/ContextFavorites";
import Favorites from "./pages/Favorites";

function App() {

  return (
    <FavoritesProvider>
        <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>

          <Route path="/home" element={<Home />}/>

          <Route path="/favorites" element={<Favorites />}/>
            
        </Routes>
      </Router>
        </>
    </FavoritesProvider>
  );
}

export default App;
