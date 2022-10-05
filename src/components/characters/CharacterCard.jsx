import React from "react";
import Status from "./Status";

const CharacterCard = ({ character }) => {
  return (
    <div className="w-full md:min-w-[500px] md:h-[200px] flex md:flex-1 bg-white shadow-sm rounded-md overflow-hidden">
      <img
        src={character.image}
        alt={character.name}
        className="object-cover w-[100px] md:w-auto h-full"
      />
      <div className="p-4 flex flex-col flex-1">
        <div>
          <h1 className="lg:text-xl font-semibold text-gray-800">
            {character.name}
          </h1>
          <span>
            <Status status={character.status} />
            <span className="mr-1 text-gray-700 text-sm">
              {character.status}
            </span>
          </span>
          -<span className="text-gray-700 text-sm">{character.species}</span>
        </div>
        <div className="hidden md:flex flex-col space-y-1 mt-2">
          <div className="">
            <label className="text-gray-600 text-sm">
              Last known location:
            </label>
            <p className="font-semibold text-gray-600">
              {character.location.name}
            </p>
          </div>
          <div className="">
            <label className="text-gray-600 text-sm">First seen in:</label>
            <p className="font-semibold text-gray-600">
              {character.origin.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
