import React, { useState } from 'react'
import bmi from "../assets/bmi.jpg"

export const BMI = () => {
  const [Weight,SetWeigth]=useState("");
  const [Height,SetHeight]=useState("");
  const [Error,SetError]=useState(false);
  const [BMI,SetBMI]=useState();
  const [BMIStatus,SetBMIStatus]=useState("");
  function ChangeWeight(e){
    SetWeigth(e.target.value.trim());
  }
  function ChangeHeight(e){
    SetHeight(e.target.value.trim());
  }
  function FindRsult(){
    SetError(false)
    if((/^\d+$/.test(Weight)) && (/^\d+$/.test(Height))){
    const BMIvalue= ((Weight / ((Height/100)+(Height/100))).toFixed(1));
    SetBMI(BMIvalue);
    if(BMIvalue<18.5){
      SetBMIStatus("Underweight");
    }
    else if(BMIvalue>=18.5 && BMIvalue <24.9){
      SetBMIStatus("NormalWeight");
    }
    else{
      SetBMIStatus("OverWeight");
    }
    }
    else{
      SetError(true);
    }
  }
  function CrearALL(){
    SetError(false);
    SetHeight("");
    SetWeigth("");
    SetBMI("");
    SetBMIStatus("");
  }
  return (
    <div className="card">
        <div className="box"><img src={bmi} alt="" /></div>
        <div className="content">
        <div className="heading">IBM INFORMATION :</div>
         <div className="errorMessage">{Error && "Please Enter Numeric Value."}</div>
        <label htmlFor="weight">Weight :</label>
        <input type="text" name="" id="weight" value={Weight} placeholder='Enter the Weight...' onChange={ChangeWeight}/>
        <label htmlFor="height">Height :</label>
        <input type="text" name="" id="height" value={Height} placeholder='Enter the Height...' onChange={ChangeHeight}/>
        <div className="buttons">    
        <button onClick={FindRsult}>Generate</button>
        <button onClick={CrearALL}>Cleare</button>
        </div>
        <div className="result">
          <div className="bmivalue">BMI Value : {BMI}</div>
          <div className="bmistatus">BMI Status : {BMIStatus}</div>
        </div>
        </div>
    </div>
  )
}
