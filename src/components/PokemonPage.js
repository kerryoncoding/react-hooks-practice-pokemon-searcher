import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const URL = "http://localhost:3001/pokemon"

  const [listArr, setListArr] = useState([])

  useEffect(()=>{
    fetch(URL)
    .then(res=> res.json())
    .then(data=> setListArr(data) )
  },[])

  function searchList(input){
    console.log(input)
    let refinedArr = listArr.filter((item)=> item.name.includes(input))
    setListArr(refinedArr)
  }

  function handleNewPokemon(item){
    console.log(item)
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    })
    .then(res => res.json())
    .then(data=> {setListArr([...listArr, item]) 
    })
  }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleNewPokemon={handleNewPokemon}/>
      <br />
      <Search searchList={searchList} />
      <br />
      <PokemonCollection listArr={listArr} />
    </Container>
  );
}

export default PokemonPage;
