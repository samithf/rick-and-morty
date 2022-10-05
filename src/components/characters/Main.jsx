import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

const Main = () => {
  const [state, setState] = useState({
    page: 1,
    status: "",
    gender: "",
    name: "",
  });

  const { data, isLoading, isError, refetch, isRefetching } = useQuery(
    ["characters", state.page, state.status, state.gender],
    fetchCharacters,
    {
      refetchOnWindowFocus: false,
    }
  );

  async function fetchCharacters({ queryKey }) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}&status=${queryKey[2]}&gender=${queryKey[3]}&name=${state.name}`
    );
    return response.json();
  }

  function renderContent() {
    if (isLoading | isRefetching) {
      return <div className="p-4">Loading....</div>;
    }
    if (isError) {
      return <div className="p-4">Something went wrong!</div>;
    }
    if (!isLoading && data && data.error) {
      return <div className="p-4">No data</div>;
    }
    if (!isLoading && data && data.results) {
      return (
        <CharacterList characterData={data} setState={setState} state={state} />
      );
    }
  }

  return (
    <div className="xl:max-w-[1280px] w-full mx-auto mt-10">
      {/* Filters */}
      <Filters setState={setState} refetch={refetch} />

      {/* content */}
      {renderContent()}
    </div>
  );
};

export default Main;
