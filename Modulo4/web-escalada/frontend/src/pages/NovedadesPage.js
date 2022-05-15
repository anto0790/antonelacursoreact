import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../styles/NovedadesPage.css';
import NovedadItem from '../components/consApi/NovedadItem';


const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
            setNovedades(response.data);
            setLoading(false);
        }
        cargarNovedades();
    }, []);

    return (
        <div  className="nov">
            <h1 className="novColor">Novedades</h1>
            <div className="holder">
                {loading ? (
                    <p>cargando..</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.id}
                        title={item.titulo} subtitle={item.subtitulo}
                        imagen={item.imagen} body={item.cuerpo} />)
                )}
            </div>
        </div>
    );
}

export default NovedadesPage;