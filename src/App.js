import { useState } from 'react';
import './App.css';
import { mechanics, themes } from './db';

function selectRandomly(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function App() {
  const [selectedMechanics, setSelectedMechanics] = useState([selectRandomly(mechanics), selectRandomly(mechanics)])
  const [theme, setTheme] = useState(selectRandomly(themes))

  function refresh() {
    setSelectedMechanics([selectRandomly(mechanics), selectRandomly(mechanics)])
    setTheme(selectRandomly(themes))
  }

  function refreshFirstMechanic() {
    setSelectedMechanics([selectRandomly(mechanics), selectedMechanics[1]])
  }

  function refreshSecondMechanic() {
    setSelectedMechanics([selectedMechanics[0], selectRandomly(mechanics)])
  }

  function refreshTheme() {
    setTheme(selectRandomly(themes))
  }

  return (
    <div className="container">
      <p>Un jeu de <span className="mechanic" onClick={refreshFirstMechanic}>{selectedMechanics[0]}</span> et de <span className="mechanic" onClick={refreshSecondMechanic}>{selectedMechanics[1]}</span> dans une ambiance <span className="theme" onClick={refreshTheme}>{theme}</span></p>
      <button onClick={refresh}>Next</button>
    </div>
  );
}

export default App;
