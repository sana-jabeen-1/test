import React from "react";

// function Greets(){
//     return <h1>now From Functional </h1>,
//     <h1>welcome to Sana ...shukr Allah Paak ka</h1>
// }
//////////using props in function 
function Greets(props){
    console.log(props)
    
    return (
       <div>
        <h1>hwelcome with... {props.name} age {props.age}</h1>
        
       {props.children}
       </div>
    )

}
export default Greets