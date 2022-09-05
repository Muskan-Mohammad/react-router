
import React from 'react';
 export default function UserCard ({ user = {}}){
    return (
        <div className='card h-80 '>
          <img src={'https://cdn-icons-png.flaticon.com/512/616/616430.png'} alt="" className="card-img-top" />
          <div className= 'card-body'>  
          <h5 className='card-title'>{user.name}</h5>
          <table className="table table-bordered">
          <tbody>
            <tr>
              <th>UserName</th>
              <td>{user.username}</td>
            </tr>
            <tr>
              <th>E-mail</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{user.phone}</td>
            </tr>
          </tbody>
          </table>
          </div>
        </div>
    )
 }