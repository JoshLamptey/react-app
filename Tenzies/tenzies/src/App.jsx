import Die from './dice'
import './App.css'
import {nanoid} from "nanoid"
import { useState } from 'react'

function App() { 
  const [dice,setDice] = useState(allNewDice())

   function allNewDice(){
    const newDie = []
    for (let i = 0; i < 10; i++) {
     newDie.push({
     value: Math.ceil(Math.random()*6),
     isHeld: false,
     id : nanoid()
    })
    }
    return newDie
   }

   
  function handleclick(){
    setDice(allNewDice())
  }
    let diceElements = dice.map((num)=>{
      return <Die value ={num.value} key ={num.id}/>
    })
  return(
    <main>
        <div className="tenzies">{diceElements}</div>
        <div className="roll" onClick={handleclick}>Roll</div>
    </main>
  )
}
                                                                                                                                                                                                                                                                                                                                                                       
export default App
