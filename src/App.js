import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';


function App() {
  const [all_data, setAllData] = useState(null);
  //get data
  useEffect(() => {
    async function getData() {
      var list = []
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
      for (var i = 0; i < res.data.results.length; i++) {
        var one_pokemon = await axios.get(res.data.results[i].url);
        list.push(one_pokemon.data);
      }
      setAllData(list);
      console.log(all_data);
    }
    getData();
  }, []);
  return (
    <>
      <div className="list">
        {
          all_data && all_data.map((pokemon) => {
            return  <>
              <Card pokemon={pokemon} key={pokemon.id} />
            </>
          })
        }
      </div>
    </>
  );
}

export default App;
