import React from 'react';

export default function CatsHeader (props){
    const { list = [], onCatSelect } = props; 
    const names = list.map( (listItem) => listItem.name );
    console.log("NAME::", names);
    return (
        <header className='bg-white p-3 shadow d-flex justify-content-between gap-4 mb-4'>
      <h3>CATS</h3>
      <input type="text" placeholder='Search for your favourite cat' className='form-control w-25' />
      <select className='form-control w-25' onChange={(e) => onCatSelect(e.target.value)}>
      <option value="">ALL CATS</option>
      { names.map( (catName) => <option>{catName}</option> ) }
        </select>
      </header>
    )
}