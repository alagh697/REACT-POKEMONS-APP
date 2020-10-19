import React , { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';
  
const App: FunctionComponent = () => {
 
 return (
     <Router>
         <div>
         {/*barre de navigation*/}
            <nav>
                <div className="nav-wrapper teal">
                    <Link to="/" className="brand-logo center">Pokédex</Link>
                </div>
            </nav>
            {/*Système de gestion des routes */}
            <Switch>
                <PrivateRoute exact path="/" component={PokemonList} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/pokemons" component={PokemonList} />
                <PrivateRoute exact path="/pokemons/add" component={PokemonAdd} />
                <PrivateRoute exact path="/pokemons/:id" component={PokemonsDetail} />
                <PrivateRoute exact path="/pokemons/edit/:id" component={PokemonEdit} />
                <Route component={PageNotFound} /> {/*Toujours en dernier */}
            </Switch>
         </div>
         
     </Router>
     
 )
}
  
export default App;