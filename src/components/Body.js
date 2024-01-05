import React, { useEffect, useState } from 'react'
import { Data } from '../Data'
import Movies from './Movies'

const Body = ({film,search,rate}) => {
  const [movies, setMovies] = useState(Data)
useEffect(() => {
  setMovies([...movies, film])

}, [film])
console.log(rate)

  return (
    <div>
      <Movies aflam={movies} search={search} NewRate={rate}/>
    </div>
  )
}

export default Body