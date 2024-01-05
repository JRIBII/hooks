import { useState } from 'react';
import './App.css';
import Body from './components/Body';
import Navbar from './components/MyNavbar';



function App() {
  const [film, setFilm] = useState({})
  const getMovie =(scenario)=>{
    setFilm(scenario)
  }
  const [search, setSearch] = useState("")
  const getSearch=(search)=>{
    setSearch(search)
  }
  const [rate, setRate] = useState("")
  const getRate=(rate)=>{
    setRate(rate)
    console.log(rate)
  }



console.log(search)
  return (
    <div className="App">
      <Navbar getMovie={getMovie} getSearch={getSearch} getRate={getRate}/>
      <Body film={film} search={search} rate={rate}/>
    </div>
  );
}

export default App;
