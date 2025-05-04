import { useState } from 'react'

const Header = ({ text }) => <h2>{text}</h2>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const StatisticsLine = ({ text, value }) => {
  return <tr><td>{text}</td> <td>{value}</td></tr>
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positivePercentage = good / total * 100;

  if (total == 0) {
    return <div>No feedback given</div>
  }
  return (
    <table>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="all" value={total} />
      <StatisticsLine text="average" value={average} />
      <StatisticsLine text="positive" value={positivePercentage + " %"} />
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback" />
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App