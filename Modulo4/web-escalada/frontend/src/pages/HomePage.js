import React from "react";
import '../styles/HomePage.css';


const HomePage = (props) => {
    return (
        <main>
            <div className="homeimg">
                <img src="images/roca.jpg" alt="roca" width="1000" className="valImg" />
            </div>

            <div className="container">
                <div className="bienvenidos left">
                    <h2 className="novColor">Bienvenidos</h2>
                    <p>La escalada es una práctica deportiva que, en su modalidad clásica, consiste en subir o recorrer paredes de roca, laderas escarpadas u otros relieves naturales caracterizados por su verticalidad, empleando medios de aseguramiento recuperables en casi su totalidad y la posibilidad en su progresión de utilizar medios artificiales.
                        Consta también de una modalidad deportiva que consiste en subir o recorrer paredes provistas de vías equipadas con seguros colocados fijos en la pared para garantizar la seguridad del escalador. Su principal particularidad es que la escalada se realiza únicamente utilizando el relieve natural de la roca para progresar (rot ponkt), sin que el deportista se detenga o caiga, en términos de escalada al Rot Punkt.
                    </p>
                </div>
            </div>

        </main>
    );
}

export default HomePage;