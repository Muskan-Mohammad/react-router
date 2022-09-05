import React from 'react'

 export default function CountryCard({ country = {} }) {
  return (
    <div className='card h-80 '>
      <img src={country.flag} alt="" className="card-img-top" />
      <div className="card-body">
        <h5 className='card-title'>{country.name} </h5>
        <table className='table table-bordered'>
          <tbody>
            <tr >
              <th>Region</th>
              <td>{country.region}</td>
            </tr>
            <tr >
              <th>Capital</th>
              <td>{country.capital}</td>
            </tr>
            <tr >
              <th>Area</th>
              <td>{country.area}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}