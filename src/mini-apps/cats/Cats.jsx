import React ,{ useEffect , useState }from 'react';
import CatCard from './components/CatCard';
import CatsHeader from './components/CatsHeader';
import CatOrigins from './components/CatOrigins';
import {getCatList} from './services/catsApi';



 export default function Cats (){

    const [cats , setCats] = useState([]);
    const [selectedCat , setSelectedCat] = useState([]);
    const [selectedOrigin , setSelectedOrigin] = useState([]);

    useEffect (() => {
        getCatList().then((response) => {
            setCats(response.data);  
        })
    } , []);

    let filterCats = cats;
    if(selectedOrigin) {
        filterCats = cats.filter(cat => cat.origin === selectedOrigin);
    }

    if ( selectedCat) {
        filterCats = filterCats.filter(cat => cat.name === selectedCat);
    }
    return (
        <div>
           
            <CatsHeader list={cats} onCatSelect={(param) => setSelectedCat(param)} />
            <div className="row">
        <div className="col-md-4">
        <p>Selected Origin : {selectedOrigin}</p>
            <CatOrigins list={cats} onOriginSelect = {(value) => setSelectedOrigin(value)}  />
            </div>
            <div className="col-md-8">
          <div className="row">
            {filterCats.map((cat) => (
              <div className="col-md-4 mb-3">
            <CatCard cat = {cat}  />
        </div>

    ))
}
</div>
</div>
</div>
</div>
    );}