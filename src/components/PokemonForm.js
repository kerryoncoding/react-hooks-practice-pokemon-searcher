import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleNewPokemon}) {

  const [newName, setNewName] = useState("")
  const [newHp, setNewHp] = useState(0)
  const [newFront, setNewFront] = useState("")
  const [newBack, setNewBack] = useState("")
  
  let addPokemon = {}

  function addToList(e){
    e.preventDefault()
    addPokemon = {
      key: "",
      name: newName,
      hp: newHp,
      sprites: {front: newFront, back: newBack}
    }
    handleNewPokemon(addPokemon)
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={addToList}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e)=>setNewName(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e)=>setNewHp(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e)=>setNewFront(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e)=>setNewBack(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
