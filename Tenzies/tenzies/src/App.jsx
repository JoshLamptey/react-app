import Die from './dice'
import './App.css'

function App() { 

   function allNewDice(){
    const newDie = []
    for (let i = 0; i < 10; i++) {
     newDie.push(Math.ceil(Math.random()*6))
    }
    return newDie
   }
   console.log(allNewDice())
  return(
    <main>
        <div className="tenzies">
          <Die value = "1"/>
          <Die value = "2"/>
          <Die value = "3"/>
          <Die value = "4"/>
          <Die value = "5"/>
           <Die value = "6"/>
          <Die value = "7"/> 
          <Die value = "8"/>
          <Die value = "9"/>
          <Die value = "10"/>

        </div>
    </main>
  )
}
                                                                                                                                                                                                                                                                                                                                                                       
export default App
