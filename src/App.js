import './App.css';
import axios from 'axios';
import React, {useState} from 'react';

function App() {
  let [homes, setHomes] = useState(['empty']);
  let [searchParams, setSearchParams] = useState('');

  const getHomes = async (e) => {
    await axios.get(`http://localhost:3000/api/search?search_params=${searchParams}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res)=>setHomes(res.data))
      .catch((err)=>console.log(err.message))
  }

  const updateSearchParams = (lt) => {
    console.log(lt)
    setSearchParams(lt)
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
      <input 
        className="search-bar" 
        placeholder="Find Homes..." 
        value={searchParams}
        onChange={(e)=>updateSearchParams(e.target.value)}
      />
      <input onClick={(e)=>getHomes(e)} type="submit" value="Submit"/>
      <ul>
        {homesList}
      </ul>
    </div>
  );
}

export default App;
