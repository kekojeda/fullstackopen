import { useEffect } from "react"
import { useState } from "react"
import countriesServices from "./services/countries"
import weatherServices from "./services/weather"
import { Filter } from "./components/Filter"
import { List } from "./components/List"


function App() {

  const [countries, setCountries] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [findCountries, setFindCountries] = useState([])

  const api_key = import.meta.env.VITE_SOME_KEY

  console.log(api_key);
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
      <List findCountries={findCountries} setFindCountries={setFindCountries}/>

    </>
  )
}

export default App
