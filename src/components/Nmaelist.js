import React from 'react'

function Nmaelist() {
const names = ['sna' , 'jabeen' , 'saniya']
const newList = names.map(name => <h2>{name}</h2>)
  return (
    <div>
      {
       newList 
      }

        {/* <h1>{names[0]}</h1>
        <h1>{names[1]}</h1>
        <h1>{names[2]}</h1> */}
    </div>
  )
}

export default Nmaelist