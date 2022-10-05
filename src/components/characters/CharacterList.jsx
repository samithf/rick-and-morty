import React from "react";
import Button from "./Button";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characterData, setState, state }) => {
  function onClickPrevoius() {
    setState((prevState) => ({ ...prevState, page: prevState.page - 1 }));
  }

  function onClickNext() {
    setState((prevState) => ({ ...prevState, page: prevState.page + 1 }));
  }

  return (
    <>
      <div className="flex flex-wrap gap-4 p-4">
        {characterData.results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <div className="p-4 text-right space-x-2">
        <Button disabled={state.page === 1} onClick={onClickPrevoius}>
          Previous
        </Button>
        <Button disabled={!characterData.info.next} onClick={onClickNext}>
          Next
        </Button>
      </div>
    </>
  );
};

export default CharacterList;
