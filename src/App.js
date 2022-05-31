
import { useEffect } from 'react';
import { useState } from 'react';
import Pokemon from './components/Pokemon';

function App() {

  const [Pokemons, setPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getPokemons = async() => {

    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(result)
    {
        result.forEach( async (pokemon) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          const data = await res.json()

          setPokemons(currentList => [...currentList, data])
          
        })
    }
    createPokemonObject(data.results)
    await console.log(Pokemons)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <div className="app-container">
      <h1>Pokemons</h1>
      <div className='pokemon-container'>
        <div className='all-container'>
            {Pokemons.map((pokemon, index) => 
              <Pokemon 
              id = {pokemon.id}
              name = {pokemon.name}
              image = {pokemon.sprites.other.dream_world.front_default}
              type = {pokemon.types[0].type.name}
              key={index}/>
              )}
        </div>
        <button className='load-more' onClick={() => getPokemons()}>Afficher plus</button>
      </div>
    </div>
  );
}
export default App;
