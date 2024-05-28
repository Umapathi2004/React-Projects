import React, { useState } from 'react'

export const CreateAdvice = () => {
    const [Advice,SetAdvice]=useState("Please Click The Button !")
    const [Count,SetCount]=useState(0);
    async function ChangeAdvice(){
        try{
            var res=await fetch("http://api.adviceslip.com/advice");
            const data=await res.json();
            SetAdvice(data.slip.advice)
           }
        catch(error)
           {console.warn(error)}
        finally{ 
            res?SetCount(Count+1):SetCount(Count);
            }
    }
  return (
      <div className="container">
        <div className="advice">{Advice}</div>
        <button onClick={ChangeAdvice}>Change Advice {Count}</button>
      </div>
  )
}
