import React, { useEffect, useState } from 'react'
import CardHeroes from './CardHeroes';
import MarvelLogo from '../../assets/images/MarvelLogo.png'

export const MainHeroes = () => {
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

  return (
    <div id="Marvel">
      <div style={{display:"flex",alignItems:"center",alignContent:"center", width:"100%",justifyContent: "center", marginBottom:"2rem", marginTop:"5rem"}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png" width="30%"/>
      </div>

      <CardHeroes
      data={copy}
      />
    </div>
    
  )
}
