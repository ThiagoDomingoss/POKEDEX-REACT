import React from 'react';
import Pokedex from './Pokédex_logo.png';

const Navbar = () => {
    return(
        <nav>
            <div>
                <img src={Pokedex} alt='Pokedex logo' className='navbar-img'/>
            </div>
        </nav>
    )
}

export default Navbar;