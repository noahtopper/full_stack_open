import CountryInfo from './CountryInfo';
import Button from './Button'
import { useEffect, useState } from 'react';

const Countries = ({ countryNames }) => {
   const [name, setName] = useState('');
   const [displayCountry, setDisplayCountry] = useState(false);

   useEffect(() => {
      setName('');
      setDisplayCountry(false);
      if (countryNames.length === 1) {
         setName(countryNames[0]);
      }
   }, [countryNames]);

   const showCountry = (newName) => {
      setName(newName);
      setDisplayCountry(true);
   }

   if (countryNames.length > 10) {
      return <div>Too many matches, specify another filter</div>
   } else if (countryNames.length === 1 || displayCountry) {
      return <CountryInfo name={name} />
   }
   return (
      <div>
         {countryNames.map(name => {
            return (
               <div key={name}>
                  {name}
                  <Button text="Show" onClick={() => showCountry(name)} />
               </div>
            )
         })}
      </div>
   )
}

export default Countries;