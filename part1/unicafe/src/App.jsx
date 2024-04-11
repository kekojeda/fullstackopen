import { useState } from "react"

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const StaticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}
const Statics = ({ good, neutral, bad, all, avg, avgPos }) => {
  if (all !== 0) {
    return (
      <>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StaticsLine text="good" value={good} />
            <StaticsLine text="neutral" value={neutral} />
            <StaticsLine text="bad" value={bad} />
            <StaticsLine text="averge" value={avg} />
            <StaticsLine text="positive" value={avgPos} />
          </tbody>
        </table>
      </>
    )
  }
  return (<p>No feedback given</p>)
}

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = good + neutral + bad
  let avg = (good * 1 + neutral * 0 + bad * -1) / all
  let avgPos = (good * 100) / all


  return (
    <>
      <h1>give Feedback</h1>

      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <Statics good={good} neutral={neutral} bad={bad} all={all} avg={avg} avgPos={avgPos} />


    </>
  )
}

export default App
