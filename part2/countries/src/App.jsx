import { useEffect, useState } from "react"

import countriesService from './services/countries'
import Filter from "./components/Filter";
import Countries from "./components/Countries";

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [countryNames, setCountryNames] = useState([]);

  useEffect(() => {
    countriesService.getAll().then(response => {
      const allCountryNames = response.data.map(country => country.name.common);
      setCountryNames(allCountryNames);
    })
  }, []);

  const handleSearchChange = event => {
    event.preventDefault();
    setSearchField(event.target.value);
  }

  const displayCountryNames = searchField ? countryNames.filter(name => {
    return name.toLowerCase().includes(searchField.toLowerCase());
  }) : [];
  return (
    <div>
      <Filter text="find countries: " value={searchField} onChange={handleSearchChange} />
      <Countries countryNames={displayCountryNames} />
    </div>
  )
}

export default App;
