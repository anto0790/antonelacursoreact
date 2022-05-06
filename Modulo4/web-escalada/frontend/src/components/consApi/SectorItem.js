import React from 'react';
import '../../styles/NovedadItem.css';


const SectorItem = (props) =>{
    const {title, body}=props;

    return(
        <div className='boxNovedades'>
            <h2> {title} </h2>
            <div dangerouslySetInnerHTML={{ __html: body }} className="textColor" />
            <hr/>
        </div>
    )
}

export default SectorItem;