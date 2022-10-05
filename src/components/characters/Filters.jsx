import React from "react";
import { useState } from "react";
import Button from "./Button";

const Filters = ({ setState, refetch }) => {
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");

  console.log(name);

  function onChangeStatus(e) {
    setStatus(e.target.value);
    setState((prevState) => ({ ...prevState, status: e.target.value }));
  }

  function onChangeGender(e) {
    setGender(e.target.value);
    setState((prevState) => ({ ...prevState, gender: e.target.value }));
  }

  function onChangeName(e) {
    setName(e.target.value.trim());
    setState((prevState) => ({ ...prevState, name: e.target.value.trim() }));
  }

  function onClickSearch() {
    refetch();
  }

  return (
    <div className="p-4 flex flex-wrap gap-3">
      <select
        className="px-4 py-2 bg-white shadow-sm rounded-md flex-1 sm:flex-none"
        onChange={onChangeStatus}
        value={status}
      >
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        className="px-4 py-2 bg-white shadow-sm rounded-md flex-1 sm:flex-none"
        onChange={onChangeGender}
        value={gender}
      >
        <option value="">Any</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <div className="shadow-sm flex flex-1">
        <input
          className="px-4 py-2 bg-white outline-none flex-1 rounded-l-md"
          value={name}
          onChange={onChangeName}
        />
        <button
          className=" bg-cyan-600 p-2 text-gray-200 rounded-r-md font-dancing"
          onClick={onClickSearch}
        >
          Search
        </button>
      </div>
      {/* <button
        className="bg-cyan-600 px-10 py-2 text-gray-200 rounded-md flex-1"
        onClick={onClickSearch}
      >
        Reset
      </button> */}
    </div>
  );
};

export default Filters;
