import logo from './logo.svg';
import './App.scss';
import { CardHeroes } from './Components/CardHeroes/CardHeroes';
import { useEffect, useState } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import './Components/PokeApi/style.css'
import Main from './Components/PokeApi/Main';
import NavBar from './Components/NavBar/NavBar'
//https://gateway.marvel.com:443/v1/public/characters?ts=1apikey=65ec9ee4da9b3e7422fb540e63a19c57&hash=ce2e743870c3bef4cd5105a8f4e2ec2a


function App() {
  const url = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=65ec9ee4da9b3e7422fb540e63a19c57&hash=ce2e743870c3bef4cd5105a8f4e2ec2a';

  const [copy, setCopy] = useState([]);

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    console.log(responseJSON.data.results);
    setCopy(responseJSON.data.results);

  }
  

  useEffect(() => {
    fetchApi();

  }, []);


  console.log(copy);


  return (
    <div className="App">
      <NavBar/>
      <Main/>

    </div>
  );
}

export default App;
