import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import SearchElement from './components/SearchElement';
import HomeDetail from './components/HomeDetail';

function App() {
  let [homes, setHomes] = useState([]);
  let [searchParams, setSearchParams] = useState('');
  let [content, setContent] = useState(false);

  let [moreInfo, setMoreInfo] = useState(null);

  useEffect(()=>{
    !!homes.length ? setContent(true) : setContent(false)

    setMoreInfo(null)
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

  const expandElement = (home) => {
    // if null, put home in
    // if moreinfo == home, set Moreinfo to null
    // if morerinfo != home, set moreinfo to home

    if(!moreInfo || moreInfo.id !== home.id) {
      setMoreInfo(home)
    } else if (moreInfo.id === home.id) {
      setMoreInfo(null)
    }
  }

  let homesList = homes.map((home)=>{
    let selected = ''
    if (moreInfo && home.id === moreInfo.id) {
      selected = 'selected'
    }

    return (
      <li className={`search-element ${selected}`} key={home.id} onClick={()=>expandElement(home)}>
        <SearchElement address={home.address} />
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
        {moreInfo && <HomeDetail home={moreInfo}/>}
      </div>
    </div>
  );
}

export default App;
