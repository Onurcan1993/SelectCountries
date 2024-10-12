import React, { useContext, useState } from "react";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import { CountryContext } from "./context";

export default function Title() {
  const [selectMode, setSelectMode] = useContext(CountryContext);
  return (
    <div
      className={`flex flex-row justify-between px-10 py-4 items-center ${
        selectMode.mode ? "bg-dark-blue-elements" : "bg-white"
      }`}
    >
      <span
        className={`${
          selectMode.mode ? "text-white" : "text-very-dark-blue-light-mode"
        } text-2xl font-bold`}
      >
        Where in the world?
      </span>
      <button
        onClick={() => setSelectMode({ ...selectMode, mode: !selectMode.mode })}
        className={`flex flex-row items-center gap-x-2 ${
          selectMode.mode ? "text-white" : "text-very-dark-blue-light-mode"
        }} `}
      >
        <NightlightRoundOutlinedIcon
          sx={{
            color: selectMode.mode ? "white" : "text-very-dark-blue-light-mode",
          }}
        />
        <span
          className={`${
            selectMode.mode ? "text-white" : "text-very-dark-blue-light-mode"
          } text-md font-medium`}
        >
          Dark Mode
        </span>
      </button>
    </div>
  );
}
