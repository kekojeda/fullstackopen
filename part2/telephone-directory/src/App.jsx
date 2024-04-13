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
    if (persons.some((el) => el.name === newName)) {
      if (confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const findPerson = persons.find(person => person.name === newName)
        const changedNumber = { ...findPerson, number: newNumber }
        console.log('find person', findPerson);
        console.log('changedNumber person', changedNumber);
        console.log('find person id', findPerson.id);

        personsService
          .update(findPerson.id, changedNumber)
          .then((res) => console.log(res.data))
          .then(() => {
            setPersons(persons.map(person => person.id !== findPerson.id ? person : changedNumber))
          })
        setNewName('')
        setNewNumber('')
      }
    } else {
      personsService
        .create(personObject)
        .then(response => {
          console.log(response.data);
          setPersons(persons.concat(response.data))
        })
      setNewName('')
      setNewNumber('')
    
    }
  }

  const delName = (id, name) => {
    if (confirm(`Delete ${name}?`)) {
      personsService
        .supr(id)
        .then(() => {
          console.log('succes!')
          console.log(`${id} succes`);
        })
        .catch(err => {
          console.log(err);
          console.log(`${id} fail`);

        })
      setPersons(persons.filter((person) => person.id !== id))
    }
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