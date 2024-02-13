import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import Detail from './components/Detail/Detail';



function App() {
  const [pokemons, setPokemons] = useState([]);
 
  async function onSearch(name) {
    try {      
    const response = await axios.get(`http://localhost:3001/pokemons/name?name=${encodeURIComponent(name)}`);
      
     const pokemon =response.data;
      setPokemons([pokemon]);     
    } catch (error) {
      window.alert(error.response)
      
    }
  }
  useEffect(() => {
    const fetchData = async () =>{
      try {
        const response = await axios.get("http://localhost:3001/pokemons");
        console.log(response);
        setPokemons(response.data);      
      } catch (error) {
        window.alert(error.response.data)       
      }
    }; 

    fetchData();
  }, []);

 

  return (
    <div className="App">     
      <Router>      
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home">
            <Navbar onSearch={onSearch} />
            <div>
              <Cards pokemons={pokemons} />
            </div>
          </Route>
          <Route path="/detail/:id" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
