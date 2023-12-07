import Die from './dice'
import './App.css'
import { useState } from 'react'

function App() { 
  const [dice,setDice] = useState(allNewDice())

   function allNewDice(){
    const newDie = []
    for (let i = 0; i < 10; i++) {
     newDie.push(Math.ceil(Math.random()*6))
    }
    return newDie
   }
  function handleclick(){
    setDice(allNewDice())
  }
    let diceElements = dice.map((num)=>{
      return <Die value ={num}/>
    })
  return(
    <main>
        <div className="tenzies">{diceElements}</div>
        <div className="roll" onClick={handleclick}>Roll</div>
    </main>
  )
}
                                                                                                                                                                                                                                                                                                                                                                       
export default App
