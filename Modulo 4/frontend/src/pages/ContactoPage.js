import React from "react";


const ContactoPage = (props) =>{
    return(
        <main className="holder">
            <div className="columna Contacto">
                <h2>Complete e formulario: </h2>
                <form action="" method="" className="forulario">
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre" />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="email" />
                    </p>
                    <p>
                        <label>Cel</label>
                        <input type="text" name="cel" />
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name="mensaje"></textarea>
                    </p>
                    <p className="centrar">
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div className="columna datos">
                <h2>Otras formas de contacto: </h2>

                <ul>
                    <li>Cel: 12345678567</li>
                    <li>Email</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Skype</li>
                </ul>

            </div>
        </main>

    );
}

export default ContactoPage;