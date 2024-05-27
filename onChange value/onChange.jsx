import { useState } from "react"

export const LearnComponentes = () => {
  const [user,Setuser]=useState({name:"umapathi",age:21,city:"Chennai"});
  function Change(e){
    Setuser({...user,[e.target.name]:[e.target.value]})
  }
  return (
     <>
     <div><h2>Name : {user.name}</h2><h3>Age : {user.age}</h3><h3>City : {user.city}</h3></div>
     <label htmlFor="">Enter Name :</label>
     <input type="text" value={user.name} onChange={Change} name="name" placeholder="Enter User Name..."/>
     <label htmlFor="">Enter Age :</label>
     <input type="number" value={user.age} onChange={Change} name="age" placeholder="Enter User Age..."/>
     <label htmlFor="">Enter City :</label>
     <input type="text" value={user.city} onChange={Change} name="city" placeholder="Enter User city..."/>
     </>
  )
}

