import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import { useEffect, useState,  } from 'react';
import axios from "axios";
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Pagination from "./components/Pagination/Pagination";

import { useDispatch, useSelector } from 'react-redux';
import { setPokemons } from "./redux/action";



function App() {  
  const dispatch = useDispatch();
  const pokemons = useSelector(state =>state.filterPokemons)
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] =useState (12);

  async function onSearch(name) {
    try {      
      const response = await axios.get(`http://localhost:3001/pokemons/name?name=${encodeURIComponent(name)}`);      
      const pokemon = response.data;
      dispatch(setPokemons([pokemon]));
    } catch (error) {
      window.alert(error.response);      
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/pokemons");
        dispatch(setPokemons(response.data));
        console.log(response.data);
      } catch (error) {
        window.alert(error.response.data);
      }
    };

    fetchData();
  }, [dispatch]);

 
  // Get current games
  const indexOfLastpokemos = currentPage * pokemonsPerPage;
  const indexOfFirstPokemos = indexOfLastpokemos  - pokemonsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstPokemos, indexOfLastpokemos);

   // Change page
   const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">     
      <Router>      
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home">
            <Navbar onSearch ={onSearch}/>                                
                <div className='cardsDiv'>
                  <Pagination paginate ={paginate} pokemonsPerPage={pokemonsPerPage} totalPokemos={pokemons.length} currentPage={currentPage}></Pagination>                
                  <Cards pokemons={currentPokemons}></Cards>                  
                {/* <Pagination pokemonsPerPage={pokemonsPerPage} totalPokemons={pokemons.length} currentPage={currentPage1} paginate={paginate} /> */}
                </div>  
          </Route>       
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path='/create' component={Form} />                  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
