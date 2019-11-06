import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// snippet component stateless : rafc
const Tile = ({name, icon, desc , bgColor, action}) => {
    return (
        <div className="tile" style={{backgroundColor: bgColor }} onClick={action}>
            <div className="tile-icon">
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className="tile-text">
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default Tile;