import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
//import POKEMONS from '../models/mock-pokemon';
import PokemonCard from '../components/pokemon-card';
import PokemonService from '../services/pokemon-service';
import {  RouteComponentProps, Link } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';
import AuthenticationService from '../services/authentication-service';
import { useHistory } from 'react-router-dom';
  
const PokemonList: FunctionComponent = () => {
  const history = useHistory();
  
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
  useEffect(() => {
    PokemonService.getPokemons().then(pokemons => setPokemons(pokemons));
  }, []);

  const logout = () => {
    AuthenticationService.logout().then(() => history.push('/pokemons'));
  }
  
  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <span  className="btn btn-floating halfway-fab waves-effect waves-light red">
                  <i onClick={logout} className="material-icons">exit_to_app</i>
              </span>
      <div className="container"> 
        <div className="row"> 
        <PokemonSearch></PokemonSearch>
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} borderColor="red"/>
        ))}
        </div>
      </div>
      <Link to={`/pokemons/add`} className="btn btn-floating halfway-fab waves-effect waves-light red z-depth-3"
      style={{position: 'fixed', bottom: '25px', right: '25px'}}>
                  <i className="material-icons">add</i>
      </Link>
    </div> 
  );
}
  
export default PokemonList;