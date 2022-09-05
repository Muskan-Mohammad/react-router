import React from 'react';

export default function CatOrigins ( {list = {} , onOriginSelect}){
    const allOrigins = list.map((cat) => cat.origin);
    const uniqueOrigins = [...new Set (allOrigins)];
    
    return (
        <div>
            <ul className="list-group">
            <h3>ORIGIN</h3>
            {uniqueOrigins.map((origin) => <li
            onClick={() => onOriginSelect(origin)}
            className="list-group-item list-group-item-action"
            >{origin}</li>)}
            </ul>
        </div>
    );
    
}