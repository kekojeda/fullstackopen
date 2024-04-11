import { useState } from "react"


function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const fillArray0 = (length) => new Array(length).fill(0)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(fillArray0(anecdotes.length))

  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }
  const max = Math.max(...votes)

  const vote = (n) => {
    const newVotes = [...votes]
    newVotes[n] += 1
    setVotes(newVotes)
  }



  return (
    <>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {votes[selected]} votes
      </div>
      <div>
        <button onClick={() => vote(selected)}>vote</button>
        <button onClick={getRandomNumber}>next anectdote</button>
      </div>
      <h1>Anectdote with most votes</h1>

      <p>{anecdotes[votes.indexOf(max)]}</p>
    </>
  )
}

export default App
