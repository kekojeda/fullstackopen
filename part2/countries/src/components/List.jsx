import { useEffect } from "react";
import weatherServices from "../services/weather";

const List = ({ findCountries, setFindCountries, weather, setWeather }) => {
  const tooManyMatches = findCountries.length > 10;
  const tenOrLessMatches =
    findCountries.length <= 10 && findCountries.length > 1;
  const oneMatch = findCountries.length === 1;

  let country;
  let languages;

  const api_key = import.meta.env.VITE_SOME_KEY;

  if (oneMatch) {
    country = findCountries[0];
    languages = Object.values(findCountries[0].languages);
    weatherServices
      .getWeatherCapital(findCountries[0].capital, api_key)
      .then((res) => setWeather(res.data))
  }

  const handleShowClick = (countryName) => {
    console.log("cliked");
    console.log(countryName);
    const showCountry = findCountries.filter(
      (el) => el.name.common === countryName
    );
    console.log(showCountry);
    setFindCountries(showCountry);
  };

  return (
    <>
      {tooManyMatches && <p>Too many matches, specify another filter</p>}
      {tenOrLessMatches && (
        <ul>
          {findCountries.map((country) => (
            <li key={country.name.common}>
              {country.name.common}{" "}
              <button onClick={() => handleShowClick(country.name.common)}>
                show
              </button>
            </li>
          ))}
        </ul>
      )}
      {oneMatch && (
        <div>
          <h1>{country.name.official}</h1>

          <p>{`Capital: ${country.capital}`} </p>
          <p>{`Area: ${country.area}`} </p>

          <h2>languages</h2>
          {languages.map((lan) => (
            <li key={lan}>{lan}</li>
          ))}

          <h3>Flag</h3>

          <img src={country.flags.png} alt={country.flags.alt} />

          <h3>{`Weather in ${country.capital}`} </h3>

          {weather && weather.list && weather.list.length > 0 ? (
            <div>
              <p>{`temperature ${weather.list[0].main.temp} Celsius`}</p>
              <img
                src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
              />
              <p>{`Wind ${weather.list[0].wind.speed} m/s`}</p>
            </div>
          ) : (
            <p>No weather data available</p>
          )}
        </div>
      )}
    </>
  );
};

export { List };
