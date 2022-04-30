import React from "react";
import '../styles/ContactoPage.css';


const ContactoPage = (props) => {
    return (
        <main>
            <div className="container-contact">
                <div className="row">
                    <div className="col">
                        <h2 className="titulo">Complete el formulario: </h2>
                        <form action="" method="" className="forulario">
                            <p>
                                <label>Nombre</label>
                                <input type="text" name="nombre" className="areaText" />
                            </p>
                            <p>
                                <label>Email</label>
                                <input type="text" name="email" className="areaText" />
                            </p>
                            <p>
                                <label>Cel</label>
                                <input type="text" name="cel" className="areaText" />
                            </p>
                            <p>
                                <label>Comentario</label>
                                <textarea name="mensaje" className="areaText"></textarea>
                            </p>
                            <p className="centrar">
                                <input type="submit" value="Enviar" />
                            </p>
                        </form>
                    </div>
                    <div className="col">
                        <h2 className="colDatos">Otras formas de contacto: </h2>

                        <ul>
                            <li>Cel: 12345678567</li>
                            <li>Email</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Skype</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default ContactoPage;