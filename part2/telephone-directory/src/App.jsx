import { useEffect, useState } from 'react'
import { Filter } from "./components/Filter"
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSeatchValue] = useState('')

  

  useEffect(() => {
    personsService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchValue = (event) => {
    console.log(searchValue);
    setSeatchValue(event.target.value)
  }


  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (persons.some((el) => el.name === newName || el.number === newNumber)) {
      alert(`${newName} ${newNumber} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    } else {
      personsService
        .create(personObject)
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const delName = (id) => {
 
      personsService.supr(id);
      setPersons(persons.filter((person) => person.id !== id));
    }
 






  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handleSearchValue={handleSearchValue} />

      <h2>add a new</h2>

      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <Persons
        persons={persons}
        searchValue={searchValue}
        delName={delName}
      />

    </div>
  )
}

export default App