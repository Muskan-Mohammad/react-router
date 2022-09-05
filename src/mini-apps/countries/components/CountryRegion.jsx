import React from 'react';

  
export default function CountryRegion ( {list = [] , onRegionSelect}) {
    const allRegions = list.map((country) => country.region);
    const uniqueRegions = [...new Set(allRegions)];
    console.log(":: Regions ::", uniqueRegions);
    return (
        <div>
            <h3> REGIONS </h3>
            <ul class="list-group ">
  {uniqueRegions.map((region) => <li
  onClick={() => onRegionSelect(region)}
  className="list-group-item list-group-item-action"
  >{region}</li>
  )}
  
</ul>
        </div>
    )
}