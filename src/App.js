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
    setSearchParams(lt)
  }

  let homesList = Object.keys(homes).map((k)=>{
    return (
      <li className="search-element">
        {homes[k]['address']}
      </li>
    )
  })

  return (
    <div className="App">
      <div className="content">
        <div className="banner">
          ZILLOW?
        </div>
        <div className="search-bar">
          <input 
            className="search-input" 
            placeholder="Find Homes..." 
            value={searchParams}
            onChange={(e)=>updateSearchParams(e.target.value)}
          />
          <input 
            className="search-submit"
            onClick={(e)=>getHomes(e)} 
            type="submit" 
            value="Submit"
          />
        </div>
        <ul className="search-results">
          {homesList}
        </ul>
      </div>
    </div>
  );
}

export default App;
