import React from 'react';

export default function CatCard ({cat = {}}){

    return (
    <div className='card h-80'>
      <img src={cat.image?.url} alt="" className="card-img-top" />
       <div className="card-body">
       
        <h5 className='card-title'>{cat.name} </h5>
        <table className='table table-bordered'>
          <tbody>
            <tr>
              <th>Origin</th>
              <td>{cat.origin}</td>
            </tr>
             <tr>
              <th>Life-Span</th>
              <td>{cat.life_span}</td>
            </tr> 
          </tbody>
        </table>
      </div> 
    </div>
    )
}