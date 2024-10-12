import React, { useContext } from "react";
import flagLogo from "../../public/flagtr.jpg";
import { CountryContext } from "./context";

export default function Card({ element, result }) {
  const [selectMode] = useContext(CountryContext);
  return (
    <div>
      <div className="flex flex-col w-[250px] gap-y-1 shadow-lg rounded-md">
        <div className="w-full rounded-md">
          <img
            className="rounded-t-md w-full h-[150px] "
            src={element.flag}
            alt="bayrak"
          />
        </div>
        <div
          className={`flex flex-col p-3 h-[200px] justify-evenly ${
            selectMode.mode
              ? "bg-dark-blue-elements shadow-none text-white"
              : "bg-white text-dark-blue-elements shadow-lg"
          }`}
        >
          <h5>{element.countryName}</h5>
          <div className="flex flex-col">
            <span>Population: {element.population}</span>
            <span>Region: {element.region}</span>
            <span>Capital: {element.capital}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
