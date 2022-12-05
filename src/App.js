import './App.css';
import { useState, useEffect } from 'react';
import key from './Key.json'

function App() {
  const [data, setData] = useState([]);

  console.log(key)
  const fetchData = () => {
    fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-11-05&sortBy=publishedAt&apiKey=${key[0].key}`)
      .then(response => response.json())
      .then(json => setData(json))
  }

  useEffect(fetchData, [])

  console.log(data)
  return (
    <div className="App">
      <h1>Guten Morgen Sonnenschein {'<3'}</h1>
    </div>
  );
}

export default App;
