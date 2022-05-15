import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../styles/SectoresPage.css';
import SectorItem from '../components/consApi/SectorItem';


const SectoresPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [sectores, setSectores] = useState([]);

    useEffect(() => {
        const cargarSectores = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/sectores`);
            setSectores(response.data);
            setLoading(false);
        }
        cargarSectores();
    }, []);

    return (
        <div className="sect">
            <h1 className="novColor">Sectores</h1>
            <div className="boxSectores">
                <div className="boxSector">
                    {loading ? (
                        <p className="novColor">cargando..</p>
                    ) : (
                        sectores.map(item => <SectorItem key={item.id}
                            title={item.titulo}
                            body={item.cuerpo} />
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default SectoresPage;