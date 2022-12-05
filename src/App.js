import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  const api_key = process.env.REACT_APP_KEY
  console.log(api_key);

  const fetchData = () => {
    fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-11-05&sortBy=publishedAt&apiKey=${api_key}`)
      .then(response => response.json())
      .then(json => setData(json))
  }

  useEffect(fetchData, [api_key])

  console.log(data)
  return (
    <div className="App">
      <h1>Guten Morgen Sonnenschein {'<3'}</h1>
    </div>
  );
}

export default App;
