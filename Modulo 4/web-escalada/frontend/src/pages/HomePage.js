import React from "react";
import '../styles/HomePage.css';


const HomePage = (props) =>{
    return(
        <main>
            <div className="homeimg">
                <img src="images/roca.jpg" alt="roca" width="1000" className="valImg" />
            </div>
            
            <div className="container">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores iure quasi cum est expedita laboriosam atque, reiciendis eligendi tempore debitis quia provident incidunt aliquam reprehenderit saepe quis. Atque, provident fugit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores iure quasi cum est expedita laboriosam atque, reiciendis eligendi tempore debitis quia provident incidunt aliquam reprehenderit saepe quis. Atque, provident fugit.
                    </p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">excelente</span>
                        <span className="autor">sssss</span>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default HomePage;