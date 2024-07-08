import React, { useState } from 'react'

const Faqs=({qus,ans})=>{
    const [active,setActive]=useState(false);
    const activeset=()=>{
    setActive(!active);
    }
    return (
        <div className={`faqcontainer ${(active?" active":"")}`}>
        <div className="faqHeading" onClick={activeset}>{qus}</div>
        <div className="faqBodyConatiner">
        <div className="faqBodyContent">{ans} </div>
        </div>
        </div>
    );
  }
  function Faqcontainer({data}){
   return (
   <>
   {data.map((item)=>(
     <Faqs key={item.id} qus={item.qus} ans={item.ans}/>
   ))}
   </>
   )
  }
export const FAQ = () => {
  const data=[
    {id:1,qus:"How old are you ?",ans:"I was 20 year old boy."},
    {id:1,qus:"How old are you ?",ans:"I was 20 year old boy."},
    {id:1,qus:"How old are you ?",ans:"I was 20 year old boy."},
    {id:1,qus:"How old are you ?",ans:"I was 20 year old boy."}
  ]
  return (
  <div className="container">
  <h1>FAQ's</h1>
  <Faqcontainer data={data}/>
  </div>
  )
}
