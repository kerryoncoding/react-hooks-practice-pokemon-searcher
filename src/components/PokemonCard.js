import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({id, name, hp, sprites}) {

  const [isFront, setIsFront] = useState(true)
  const imageLink = sprites.front

  function switchImage(){
    setIsFront(!isFront)
    }


  return (
    <Card>
      <div onClick={switchImage}>
        <div className="image">
          {(isFront) ? <img src={sprites.front} alt="oh no!" /> : <img src={sprites.back} alt="oh no!" />}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
