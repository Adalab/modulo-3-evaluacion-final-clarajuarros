import "../Styles/CharacterList.scss";

import React from "react";
import CharacterCard from "./CharacterCard";


const CharacterList = (props) => {
  const emptyList = props.characters.length === 0; //Si la longitud es cero está vacio

  const renderCharacterList = props.characters.map((character, id) => (
    <li key={id}>
      <CharacterCard character={character} />
    </li>
  ));

  const result = emptyList ? (
    <p className="alert">
      No hay ningún pesonaje que coincida con " {props.input} ".
    </p>
  ) : (
    <ul className="CharacterList">{renderCharacterList}</ul>
  );

  return result;
};
export default CharacterList;
