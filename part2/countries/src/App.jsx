import { useEffect } from "react"
import { useState } from "react"
import countriesServices from "./services/countries"
import { Filter } from "./components/Filter"
import { List } from "./components/List"


function App() {

  const [countries, setCountries] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [findCountries, setFindCountries] = useState([])
  const [weather, setWeather] = useState([])



  

  const handleSearchValue = (event) => {
    console.log(searchValue);
    setSearchValue(event.target.value)
    searchedCountries()
  }

  useEffect(()=> {
    countriesServices
      .getAll()
      .then(res => setCountries(res.data))
    
  }, [])

  const searchedCountries = () => {
    const countriesSearched = countries.filter(country=> (country.name.common).toLowerCase().includes(searchValue.toLowerCase()));
    setFindCountries(countriesSearched)
    
  }
  
  return (
    <>
      <Filter handleSearchValue={handleSearchValue} />
      <List 
          findCountries={findCountries}
          setFindCountries={setFindCountries}
          weather={weather}
          setWeather={setWeather}
           />

    </>
  )
}

export default App
