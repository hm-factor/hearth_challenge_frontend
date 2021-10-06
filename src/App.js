import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import SearchElement from './components/SearchElement';

function App() {
  let [homes, setHomes] = useState([]);
  let [searchParams, setSearchParams] = useState('');
  let [content, setContent] = useState(false);

  useEffect(()=>{
    !!homes.length ? setContent(true) : setContent(false)
    debugger;
  }, [homes])

  const getHomes = async (e) => {
    await axios.get(`http://localhost:3000/api/search?search_params=${searchParams}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res)=>setHomes(res.data))
      .catch((err)=>console.log(err.message))
  }

  const updateSearchParams = (val) => {
    setSearchParams(val)
  }

  let homesList = Object.keys(homes).map((home_id)=>{
    return (
      <li className="search-element" key={home_id}>
        <SearchElement home={homes[home_id]}/>
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
            value="Search"
          />
        </div>
        {content ? (
          <ul className="search-results">
            {homesList}
          </ul>
        ) : (
          <div className="empty-state">
            Your dream house awaits
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
