import Button from './Button'

const Entry = ({ person, onClick }) => {
   return (
      <div>{person.name} {person.number} <Button text="delete" onClick={onClick}/></div>
   )
}
const Persons = ({ persons, getDeleteHandler }) => {
   return (
      <div>
         {persons.map(person => <Entry key={person.name} person={person} onClick={getDeleteHandler(person)} />)}
      </div>
   )
}
export default Persons;