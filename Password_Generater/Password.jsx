import React, { useState } from 'react'

export const Password = () => {
    const [length,setLength]=useState("8");
    const [includeUpper,setIncludeUpper]=useState(true);
    const [includeLower,setIncludeLower]=useState(true);
    const [includeNumber,setIncludeNumber]=useState(true);
    const [includeSymbol,setIncludeSymbol]=useState(true);
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("Copy Text");
    
    
    function generate(){
      let data="";
      setMessage("Copy Text");
      if(includeUpper) {data+="QWERTYUIOPASDFGHJKLZXCVBNM"};
      if(includeLower) data+="qwertyuiopasdfghjklzxcvbnm";
      if(includeNumber) data+="0123456789";
      if(includeSymbol) data+="`~!@#$%^*(){}[]<>/?";
      let gen="";
      for(let i=0;i<length;i++){
        let temp = Math.floor(Math.random()*data.length);
        gen+=data[temp];
      }
      setPassword(gen);
    }
    function copy(){
      navigator.clipboard.writeText(password)
      setMessage("Coped!");
      alert("Password Copy !")
    }
  return (
    <>
    <div className="conatiner">
        <div className="heading">Strong Password Generater</div>
        <label htmlFor="passlen" className="passlabel">Password Length :</label>
        <input type="number" name="" id="passlen" placeholder="Enter the Length..." value={length} onChange={(e)=>{setLength(e.target.value)}}/>
        <div className="includes">
            <div><input type="checkbox"  id="upper"  checked={includeUpper} onChange={(e)=>{setIncludeUpper(e.target.checked)}}/><label htmlFor="upper">Include Uppercase</label></div>
            <div><input type="checkbox"  id="lower"  checked={includeLower}  onChange={(e)=>{setIncludeLower(e.target.checked)}}/><label htmlFor="lower">Include Lowercase</label></div>
            <div><input type="checkbox"  id="number" checked={includeNumber} onChange={(e)=>{setIncludeNumber(e.target.checked)}}/><label htmlFor="number">Include Number</label></div>
            <div><input type="checkbox"  id="symbol" checked={includeSymbol} onChange={(e)=>{setIncludeSymbol(e.target.checked)}}/><label htmlFor="symbol">Include Symbol</label></div>
        </div>
        <button id="generate" onClick={generate}>Generate Password</button>
        <div className="copy-view">
            <input type="text" name="" id="view" readOnly value={password}/>
            <button id="copy" onClick={copy} title={message}>Copy</button>
        </div>
    </div>
    </>
  )
}
