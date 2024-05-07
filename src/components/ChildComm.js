import React from 'react'

function ChildComm(props) {
  return (
    <div>
        <button onClick={() => props.greetHandeler('childcom')}>Greet Parant</button></div>
  )
}

export default ChildComm