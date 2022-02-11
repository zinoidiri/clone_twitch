import React from 'react';
import logo from "./IconeTwitch.svg";
import search from "./Search.svg";
import menuIco from "./MenuIco.svg";
import {Link} from 'react-router-dom'




const Header = ()=>{
    return(

<div>
<nav className="headerTop">

    <ul className="listeMenu">
        <li className="liensNav">
            <Link className='lien' to="/">
            <img src={logo} alt="logo twitch" className="logo"></img>
            </Link>
        </li>
        <li className="liensNav">
            <Link className='lien' to="/">
            Top Games
            </Link>
        </li>
        <li className="liensNav">
            <Link className='lien' to="/top-streams">
            Top Stream
            </Link>
        </li>
        <li className="liensNav">
            <form className="formSubmit">

                <input type="text" className="inputRecherche"/>
                <button type="submit">
                    <img src={search} alt="logo loupe" className="logoLoupe"></img>
                </button>
            </form>
        </li>
    </ul>
</nav>

<img src={menuIco} alt="icone menu rsp" className="menuIco"></img>

</div>
    )
}

export default Header;