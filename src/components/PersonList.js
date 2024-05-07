import React from 'react'
 //import Person from './person'
 //import Personn from './Personn'



function PersonList() {
const persons =[
    {
        id : 1 ,
        name : 'js' ,
        age : '20' ,
        skill : 'developer'
    },
    {
        id : 2 ,
        name : 'js' ,
        age : '20' , 
        skill : 'Android'
    },
    {
        id : 3 ,
        name : 'js' ,
        age : '20' ,
        skill : 'javaScript'
    }
]

 const newperson = persons.map(person =>
 ( <h2>
    I am {person.name} My age {person.age} and skill is {person.skill}
</h2>)
 ) 
  return 
    <div>{newperson}</div>
  
  }
export default PersonList