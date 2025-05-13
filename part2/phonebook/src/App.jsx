import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data);
    })
  }, []);

  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearchField(event.target.value);
  }
  const handleNameChange = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  }
  const handleNumberChange = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  }
  const addEntry = (event) => {
    event.preventDefault();
    const newEntry = { name: newName, number: newNumber};
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat(newEntry));
    setNewName('');
    setNewNumber('');
  }

  const filteredPersons = persons.filter((person) => {
      return person.name.toLowerCase().includes(searchField.toLowerCase())
    }
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchField} onChange={handleSearchChange} />
      <h3> Add a new</h3>
      <PersonForm
        name={newName}
        number={newNumber}
        onSubmit={addEntry}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={filteredPersons}/>
    </div>
  )
}

export default App;