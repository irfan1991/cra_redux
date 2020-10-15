import React from 'react';
import './style.css';
import {string, number, func} from 'prop-types'

const Tile = ({color, id, onDoubleClick}) => {
    return (
        <div className="tile" style={{backgroundColor:color}} onDoubleClick={onDoubleClick}>
            
        </div>
    );
}


export default Tile;

Tile.defaultProps = {
    color : 'gray'
}

Tile.propTypes = {
    color : string,
    id : number.isRequired,
    onDoubleClick : func.isRequired
}
