import './App.css';
import React, { useState, useEffect } from 'react';
import Lang from './lang.json';

function App() {

  const [language, setLang] = useState('english')
  const [context, setContext] = useState([])

  useEffect(() => {
    setContext(Lang.EN)
    if (language == "AZ") {
      setContext(Lang.AZ)
    }
    else if (language == "Ru") {
      setContext(Lang.RU)
    }
  }, [language])

  return (
    <div className='app'>
      <select value={language} onChange={(e) => { setLang(e.target.value) }}>
        <option>EN</option>
        <option>AZ</option>
        <option>RU</option>
      </select>
      <p> {context.Title} </p>
    </div>
  );
}

export default App;
