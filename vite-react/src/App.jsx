import Main from "./components/body"
import NavBar from "./components/navbar"
import './App.css'
import { useState } from "react"

function App() {
  const [darkMode,setDarkMode] = useState(false)

  function toggleDarkMode(){
    setDarkMode(prevMode=>!prevMode)
  }

return(
  <div className="container">
    <NavBar
    darkMode={darkMode}
    toggleDarkMode={toggleDarkMode}
    />
    <Main
    darkMode={darkMode}
    />
  </div>
)

}

export default App
