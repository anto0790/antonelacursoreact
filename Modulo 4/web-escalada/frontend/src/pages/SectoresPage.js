import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../styles/NovedadesPage.css';
import SectorItem from '../components/consApi/SectorItem';


const SectoresPage = (props) =>{

    const [loading, setLoading]=useState(false);
    const [sectores, setSectores]=useState([]);

    useEffect(()=>{
        const cargarSectores= async() =>{
            setLoading(true);
            const response= await axios.get('http://localhost:3000/apiSectores/sectores');
            setSectores(response.data);
            setLoading(false);
        }
        cargarSectores();
    }, []); 

    return(
        <div className="holder">
            <h1 className="novColor">Sectores</h1>
            {loading ?(
                <p className="novColor">cargando..</p>
            ):(
                sectores.map(item => <SectorItem key={item.id}
                    title={item.titulo}
                    body={item.cuerpo}/>)
            )}
        </div>
    );
}

export default SectoresPage;