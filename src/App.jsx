import { useEffect, useState } from "react";
import Title from "./components/Title";
import { CountryContext } from "./components/context";
import SearchBox from "./components/SearchBox";
import axios from "axios";
import Card from "./components/Card";

const data = {
  mode: false,
};

const value = {
  countryName: "",
  population: "",
  region: "",
  capital: "",
  flag: "",
};

function App() {
  const [selectMode, setSelectMode] = useState(data);
  const [selectCountry, setSelectCountry] = useState(value);
  const [countries, setCountries] = useState([]);
  const [result, setResult] = useState([]);
  const [listResult, setListResult] = useState([]);
  const [screenResult, setScreenResult] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const formattedResults = countries.map((item) => ({
      countryName: item.name.common,
      population: item.population,
      region: item.region,
      capital: item.capital ? item.capital[0] : "N/A",
      flag: item.flags.png,
    }));

    setResult(formattedResults);
  }, [countries]);

  useEffect(() => {
    setScreenResult(result.map((item) => item.countryName.toLowerCase()));
  }, [result]);

  return (
    <CountryContext.Provider
      value={[
        selectMode,
        setSelectMode,
        selectCountry,
        setSelectCountry,
        result,
      ]}
    >
      <div>
        <Title />
        <div
          className={`${
            selectMode.mode
              ? "bg-very-dark-blue-dark-mode"
              : "bg-very-light-gray-light-mode"
          } p-10  `}
        >
          <div className="flex flex-row justify-center  py-3">
            <SearchBox result={result} setListResult={setListResult} />
          </div>
          {/* Result listesini render etmek */}
          <div className="flex flex-wrap gap-2 justify-center">
            {listResult.map(
              (item, index) =>
                screenResult.includes(item.toLowerCase()) && (
                  <Card
                    key={index}
                    element={result.find(
                      (res) =>
                        res.countryName.toLowerCase() === item.toLowerCase()
                    )}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </CountryContext.Provider>
  );
}

export default App;
