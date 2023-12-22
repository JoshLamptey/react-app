import Die from './dice'
import './App.css'
import {nanoid} from "nanoid"
import { useState } from 'react'

function App() { 
  const [dice,setDice] = useState(allNewDice())

  function generateNewDie(){
    return {
      value: Math.ceil(Math.random()*6),
      isHeld: false,
      id : nanoid()
    }
  }
   function allNewDice(){
    const newDie = []
    for (let i = 0; i < 10; i++) {
     newDie.push(generateNewDie())
    }
    return newDie
   }

    // function to hold a number
    function holdDice(id){
      setDice(oldDice=> oldDice.map(die=>{
        return die.id === id? 
        {...die,isHeld: !die.isHeld} :die
      }))
     }

   // Function to roll dice
  function handleclick(){
    setDice(oldDice=>oldDice.map((die)=>{
      return die.isHeld?
      die :
      generateNewDie()
    }))

  }


    let diceElements = dice.map((num)=>{
      return <Die
       value ={num.value} 
       key ={num.id}
       holdDice ={(()=>{ holdDice(num.id)})} 
       held = {num.isHeld}
       />
    })
  return(
    <main>
      <h1 className="title">Tenzies</h1>
            <p className="instructions">
              Roll until all dice are the same.
             Click each die to freeze it at its current value between rolls.
             </p>
        <div className="tenzies">{diceElements}</div>
        <div className="roll" onClick={handleclick}>Roll</div>
    </main>
  )
}
                                                                                                                                                                                                                                                                                                                                                                       
export default App
