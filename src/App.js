import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Home from './components/Home';
import Navbar from './components/MyNavbar';
import Trailer from './components/Trailer';
import { Data } from './Data';


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
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/body" element={<Body film={film} search={search} rate={rate} />}/>
        <Route path="/Trailer/:id" element={<Trailer movies={Data} />}/>
      </Routes>

    </div>
  );
}

export default App;
