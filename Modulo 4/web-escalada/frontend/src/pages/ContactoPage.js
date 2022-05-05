import React, {useState} from "react";
import axios from 'axios';
import '../styles/ContactoPage.css';


const ContactoPage = (props) => {

    const initialForm={
        nombre: '',
        mail: '',
        telefono: '',
        mensaje: ''
    }

    const[sending, setSending]=useState(false);
    const[msg, setMsg]=useState('');
    const[formData,setFormData]=useState(initialForm);

    const handleChange = e =>{
        const{name,value}= e.target;
        setFormData(oldData=>({
            ...oldData, [name]:value
        }));
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response= await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error===false){
            setFormData(initialForm);
        }
    }

    return (
        <main>
            <div className="container-contact">
                <div className="row">
                    <div className="col">
                        <h2 className="titulo">Complete el formulario: </h2>
                        <form action="/contacto" method="post" className="forulario" onSubmit={handleSubmit} >
                            <p>
                                <label>Nombre</label>
                                <input type="text" name="nombre" className="areaText" value={formData.nombre} onChange={handleChange} />
                            </p>
                            <p>
                                <label>Email</label>
                                <input type="text" name="email" className="areaText" value={formData.email} onChange={handleChange} />
                            </p>
                            <p>
                                <label>Teléfono</label>
                                <input type="text" name="telefono" className="areaText" value={formData.telefono} onChange={handleChange} />
                            </p>
                            <p>
                                <label>Comentario</label>
                                <textarea name="mensaje" className="areaText" value={formData.mensaje} onChange={handleChange}></textarea>
                            </p>
                            <p className="centrar">
                                <input type="submit" value="Enviar" />
                            </p>
                        </form>

                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}

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