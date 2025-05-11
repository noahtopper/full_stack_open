const Entry = ({ person }) => <div>{person.name} {person.number}</div>
const Persons = ({ persons }) => {
   return (
      <div>
         {persons.map(person => <Entry key={person.name} person={person} />)}
      </div>
   )
}
export default Persons;