import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  function setRandomQuote() {
    const index = Math.floor(Math.random() * anecdotes.length);
    setSelected(index);
  }

  function makeVote() {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  function argmax(array) {
    let max = array[0];
    let maxIndex = 0;

    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
        maxIndex = i;
      }
    }

    return maxIndex;
  }

  const topQuoteIndex = argmax(votes);
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} vote(s)</div>
      <Button onClick={makeVote} text="vote"/>
      <Button onClick={setRandomQuote} text="next anecdote" />
      
      <h2>Anecdote with most votes</h2>
      <div>{anecdotes[topQuoteIndex]}</div>
      <div>has {votes[topQuoteIndex]} vote(s)</div>
    </div>
  )
}

export default App