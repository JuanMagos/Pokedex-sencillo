import { useEffect, useState } from 'react';
import PokeList from '../../components/PokeList/PokeList';

const PokeListContainer = () => {
  const [list, setList] = useState([]);
  const getPokemons = fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=16&offset=0',
    {
      method: 'GET',
    }
  );

  //   const createPokemon = fetch(
  //     'https://pokeapi.co/api/v2/pokemon?limit=16&offset=0',
  //     {
  //       method: 'POST',
  //       body: {
  //         name: 'Magos',
  //         age: 30,
  //         city: 'CDMX',
  //       },
  //       // headers: {  }
  //     }
  //   );

  //   const updatePokemon = fetch(
  //     'https://pokeapi.co/api/v2/pokemon?limit=16&offset=0',
  //     {
  //       method: 'PUT',
  //       body: {
  //         name: 'Magos',
  //         age: 31,
  //         city: 'CDMX',
  //       },
  //       // headers: {  }
  //     }
  //   );

  //   const deletPokemon = fetch('https://pokeapi.co/api/v2/pokemon/hs616717', {
  //     method: 'DELETE',
  //   });

  useEffect(() => {
    getPokemons
      .then((response) => response.json())
      .then((data) => {
        setList(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <PokeList list={list} />
    </div>
  );
};

export default PokeListContainer;
