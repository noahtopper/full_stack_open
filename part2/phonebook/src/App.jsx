import { useState } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchField, setSearchField] = useState('')

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