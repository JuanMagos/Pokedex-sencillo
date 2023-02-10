import Pokemon from '../Pokemon/Pokemon';
import Detail from '../Detail/Detail';
import { useState } from 'react';
const PokeList = ({ list }) => {
  console.log(list);
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState('');
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '30px',
      }}
    >
      <div>
        {list.map((objeto, index) => (
          <div onClick={() => setPokemonSeleccionado(objeto.url)} key={index}>
            <Pokemon objeto={objeto} />
          </div>
        ))}
      </div>
      {pokemonSeleccionado !== '' && (
        <div>
          <Detail urlP={pokemonSeleccionado} />
        </div>
      )}
    </div>
  );
};

export default PokeList;
