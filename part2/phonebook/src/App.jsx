import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonebookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    phonebookService.getAll().then(response => {
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
  const getDeleteHandler = (person) => {
    const id = person.id;
    return event => {
      event.preventDefault()
      if (confirm(`Delete ${person.name}?`)) {
        phonebookService.remove(id).then(response => {
          setPersons(persons.filter(person => person.id !== id))
        })
      }
    }
  }
  const addEntry = (event) => {
    event.preventDefault();
    const newEntry = { name: newName, number: newNumber };
    const existingUser = persons.find(person => person.name === newName);

    if (existingUser) {
      if (!confirm(`${newName} is already added to phonebook, replace the old number with a new one?`))
        return;
      phonebookService.update(existingUser.id, newEntry).then(response => {
        setPersons(persons.map(person => person.name === newName ? response.data : person))
      })
    } else {
      phonebookService.create(newEntry).then(response => {
        setPersons(persons.concat(response.data));
      })
    }
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
      <Persons persons={filteredPersons} getDeleteHandler={getDeleteHandler} />
    </div>
  )
}

export default App;