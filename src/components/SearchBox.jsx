import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { CountryContext } from "./context";

export default function SearchBox({ result, setListResult }) {
  const [selectMode] = useContext(CountryContext); // selectMode'dan sadece mode'u alıyoruz
  const [search, setSearch] = useState("");

  // selectMode.mode true ise siyah tema, false ise beyaz tema olacak
  const isDarkMode = selectMode.mode;

  const selectFunction = (value, series) => {
    const result = [];
    let i = 0;
    let values = [];
    while (i <= value.length) {
      values = series.filter((item) => item.slice(0, i) === value.slice(0, i));
      i++;
    }
    return values;
  };

  const searchHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const filteredResult = result.map((item) => item.countryName.toLowerCase());
    setListResult(selectFunction(search, filteredResult));
  }, [search]);

  return (
    <TextField
      onChange={searchHandler}
      label="Search for a country"
      id="outlined-start-adornment"
      sx={{
        m: 1,
        width: "25ch",
        "& .MuiOutlinedInput-root": {
          color: isDarkMode ? "white" : "black", // input text color, dark mode'da beyaz, light mode'da siyah
          backgroundColor: isDarkMode ? "#2b3945" : "white", // arka plan rengi
          "& fieldset": {
            borderColor: isDarkMode ? "white" : "black", // border color
          },
          "&:hover fieldset": {
            borderColor: isDarkMode ? "white" : "black", // border color on hover
          },
          "&.Mui-focused fieldset": {
            borderColor: isDarkMode ? "white" : "black", // border color when focused
          },
        },
        "& .MuiInputLabel-root": {
          color: isDarkMode ? "white" : "black", // label color
        },
        "& .MuiInputAdornment-root": {
          color: isDarkMode ? "white" : "black", // adornment (search icon) color
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
