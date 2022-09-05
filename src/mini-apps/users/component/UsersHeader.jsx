import React from 'react';

 export default function UsersHeader(props){
    const { list = [], onUserSelect } = props; 
  const names = list.map( (listItem) => listItem.name );
   return (
    <header className='bg-white p-3 shadow d-flex justify-content-between gap-4 mb-4'>
      <h3>USERS</h3>
      <input type="text" placeholder='Search for user' className='form-control w-25' />
      < select className='form-control w-25' onChange={(e) => onUserSelect(e.target.value)} >
      <option value="">ALL USERS</option>
      { names.map( (userName) => <option>{userName}</option> ) } 
      </select>
    </header>
   )
}