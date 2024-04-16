
const List = ({ findCountries, setFindCountries }) => {
  const tooManyMatches = findCountries.length > 10;
  const tenOrLessMatches =
    findCountries.length <= 10 && findCountries.length > 1;
  const oneMatch = findCountries.length === 1;

  let country;
  let languages;

  if (oneMatch) {
    country = findCountries[0];
    languages = Object.values(findCountries[0].languages)
  }

  const handleShowClick = (countryName) => {
    console.log("cliked");
    console.log(countryName);
    const showCountry = findCountries.filter(el => el.name.common === countryName)
    console.log(showCountry);
    setFindCountries(showCountry)
}
  
  return (
    <>
      {tooManyMatches && <p>Too many matches, specify another filter</p>}
      {tenOrLessMatches && (
        <ul>
          {findCountries.map((country) => (
            <li key={country.name.common}>{country.name.common} <button onClick={() => handleShowClick(country.name.common)}>show</button></li>
          ))}
        </ul>
      )}
      {oneMatch && (
        <div>
          <h1>{country.name.official}</h1>

          <p>{`Capital: ${country.capital}`} </p>
          <p>{`Area: ${country.area}`} </p>

          <h2>languages</h2>
          {languages.map(lan => (
            <li key={lan}>
                {lan}    
                
            </li>
          ))}

          <h3>Flag</h3>

          <img src={country.flags.png} alt={country.flags.alt} />

          <h3>{`Weather in ${country.capital}`} </h3>



          
          
        </div>
      )}
    </>
  );
};

export { List };
