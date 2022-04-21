import React from "react";
import { NavLink } from 'react-router-dom';
import '../../styles/Nav.css';


const Nav = (props) =>{
    return(

        

        <nav>
            
                <ul>
                    <li><NavLink activeClassName="activo" exact to="/" className="btn-grad">Home</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/novedades" className="btn-grad">Novedades</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/sectores" className="btn-grad">Sectores</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/contacto" className="btn-grad">Contacto</NavLink></li>
                </ul>
           
        </nav>
        
    );
}

export default Nav;