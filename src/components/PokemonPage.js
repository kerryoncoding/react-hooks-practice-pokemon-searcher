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



  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection listArr={listArr} />
    </Container>
  );
}

export default PokemonPage;
