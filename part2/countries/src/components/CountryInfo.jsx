import { useEffect, useState } from 'react';
import countriesService from '../services/countries'

const CountryInfo = ({ name }) => {
   const [countryObj, setCountryObj] = useState(null);
   const [languages, setLanguages] = useState(null);
   const [flagUrl, setFlagUrl] = useState(null);

   useEffect(() => {
      setCountryObj(null);
      setLanguages(null);
      setFlagUrl(null);
      countriesService.getByName(name).then(response => {
         setCountryObj(response.data);
         setLanguages(Object.values(response.data.languages));
         setFlagUrl(response.data.flags.png);
      });
   }, [name]);

   if (countryObj) {
      return (
         <div>
            <h1>{name}</h1>
            <div>{countryObj.capital}</div>
            <div>Area {countryObj.area}</div>
            <h2>Languages</h2>
            <ul>
               {languages.map(lang => <li key={lang}>{lang}</li>)}
            </ul>
            <img src={flagUrl} />
         </div>
      )
   }
   return null;
}

export default CountryInfo;