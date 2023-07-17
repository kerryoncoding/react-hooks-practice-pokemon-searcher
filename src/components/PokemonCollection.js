import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({listArr}) {

  console.log(listArr)

  let allPokemon = listArr.map((item)=> {
  return <PokemonCard 
  id={item.id}
  name={item.name}
  hp={item.hp}
  sprites={item.sprites}
  /> 
  }) 



  return (
    <Card.Group itemsPerRow={6}>
      {allPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
