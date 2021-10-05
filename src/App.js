import './App.css';
import axios from 'axios';
import React, {useState} from 'react';

function App() {
  let [homes, setHomes] = useState(['empty']);

  const getHomes = async (e) => {
    await axios.get(`http://localhost:3000/api/search`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res)=>setHomes(res.data))
      .catch((err)=>console.log(err.message))
  }

  let homesList = Object.keys(homes).map((k)=>{
    return (
      <li>
        {homes[k]['address']}
      </li>
    )
  })

  return (
    <div className="App">
      <input className="search-bar" placeholder="Find Homes..."></input>
      <input onClick={(e)=>getHomes(e)} type="submit" value="Submit"/>
      <ul>
        {homesList}
      </ul>
    </div>
  );
}

export default App;
