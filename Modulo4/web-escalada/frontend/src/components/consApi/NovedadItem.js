import React from 'react';
import '../../styles/NovedadItem.css';


const NovedadItem = (props) =>{
    const {title, subtitle, imagen, body}=props;

    return(
        <div className='boxNovedades'>
            <h2> {title} </h2>
            <h4> {subtitle} </h4>
            <img src={imagen} alt="imagen" />
            <div dangerouslySetInnerHTML={{ __html: body }} className="textColor" />
            <hr/>
        </div>
    )
}

export default NovedadItem;