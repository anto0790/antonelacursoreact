import React from "react";
import '../../styles/Header.css';


const Header = (props) =>{
    return(
        <div>
            <div className="container">
                
                    <img src="images/climb.jpg" width="100" alt="sitio-escalada" className="imgClas" />
                    <h1>Web escalada</h1>
                
            </div>
        </div>

    );
}

export default Header;