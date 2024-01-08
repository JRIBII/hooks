import React from 'react'
import Iframe from 'react-iframe'
import { useParams } from 'react-router-dom'

const Trailer = ({movies}) => {
  const {id}=useParams()
  console.log(movies)
  console.log(id)
  const aflam=movies.find((element)=>element.id==id)

  console.log(aflam)
  console.log(aflam.trailer)
  return (
    <div>
       <Iframe width='1280' height='720' src={aflam.trailer} >  </Iframe>
        </div>
  )
}

export default Trailer