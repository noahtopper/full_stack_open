const PersonForm = (props) => {
   const { name, number, onSubmit, handleNameChange, handleNumberChange } = props;
   return (
      <form onSubmit={onSubmit} >
         <div>name: <input value={name} onChange={handleNameChange} /></div>
         <div>number: <input value={number} onChange={handleNumberChange} /></div>
         <div><button type="submit">add</button></div>
      </form>
   )
}
export default PersonForm;