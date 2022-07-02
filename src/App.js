import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Status from "./pages/Status";
import "./App.css";
import { FavoritesProvider} from "./context/ContextFavorites";

function App() {

  return (
    <FavoritesProvider>
        <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>

          <Route path="/home" element={<Home />}/>

          <Route path="/favorites" element={<Favorites />}/>
          
          <Route path="/status/:id" element={<Status />}/>
            
        </Routes>
      </Router>
        </>
    </FavoritesProvider>
  );
}

export default App;
