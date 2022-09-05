import React , { useEffect , useState} from 'react';
import CountriesHeader from './components/CountriesHeader';
import CountryCard from './components/CountryCard';
import CountryRegion from './components/CountryRegion';
import { getCountryList } from "./services/countryApi";


export default function  Countries () {
    const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect (() => {
    getCountryList().then((response) => {
        setCountries(response.data);  
    })
} , []);
let filterCountries = countries;
  if(selectedRegion) {
    filterCountries = countries.filter( country => country.region === selectedRegion );
  }

  if(selectedCountry) {
    filterCountries = filterCountries.filter(country => country.name === selectedCountry); 
  }

  console.log(":: Countries ::", countries);
    return (
        <div>
            

            <CountriesHeader list={filterCountries} onCountrySelect={(param) => setSelectedCountry(param)}  />
            <div className="row">
        <div className="col-md-4">
    
            <CountryRegion list={countries} onRegionSelect={(value) => setSelectedRegion(value)}/>
            </div>
            <div className="col-md-8">
          <div className="row">
            {filterCountries.map((country) => (
              <div className="col-md-4 mb-3">
            <CountryCard country={country} />


        </div>

    ) ) 
}
</div>
</div>
</div>
</div>
    );
}