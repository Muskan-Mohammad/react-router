import React from 'react';
 export default function CountriesHeader(props) {
    
    const { list = [] , onCountrySelect} = props;
    const names = list.map( (listItem) => listItem.name );
    console.log("NAME:: , names")
    return (
        <header className='bg-white p-3 shadow d-flex justify-content-between gap-4 mb-4'>
            <h4>COUNTRIES</h4>
            <input type="text" placeholder='Search for a country here.' className='form-control w-25' />
            <select className='form-control w-25' onChange={(e) => onCountrySelect(e.target.value)}>
            <option value="">All Countries</option>
            { names.map( (countryName) => <option>{countryName}</option> ) }
            </select>
        </header>
    )
}