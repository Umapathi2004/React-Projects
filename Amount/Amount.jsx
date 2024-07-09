import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Amount = () => {
   const [amount,setAmount]=useState(1);
   const [fromval,setFromval]=useState("INR");
   const [toval,setToval]=useState("USD");
   const [result,setResult]=useState(null);

     function addValue(e){
         setAmount(e.target.value);
     }
     function addfrom(e){
        setFromval(e.target.value);
     }
     function addto(e){
        setToval(e.target.value);
     }

   useEffect(()=>{
      const getData= async () =>{
         try{
            let url=`https://v6.exchangerate-api.com/v6/c9311163cc8d2731e7195fef/latest/${fromval}`;
            const responce = await axios.get(url);
            let convertresult=(parseFloat(responce.data.conversion_rates[toval]).toFixed(2));
            setResult(amount*convertresult)
         }
         catch{

         }
         finally{

         }
      }
      getData();
   })
  
  return (
     <>
     <div className="currency-container">
      <div className="box">
         <img src="" alt="" />
      </div>
      <div className="datas">
         <h2>Currency Converter</h2>
         <div className="input-conatiner">
            <label htmlFor="amt">Amount :</label>
            <input type="number" id='amt' placeholder='Enter the Value...' value={amount} onChange={addValue}/>
         </div>

         <div className="input-conatiner">
            <label htmlFor="fro">From Currenct :</label>
            <select name="" id="fro" value={fromval} onChange={addfrom}>
               <option value="USD">USD - United States Dollar</option>
               <option value="EUR">EUR - Euro</option>
               <option value="GBP">GBP - British Pound Sterling</option>
               <option value="JPY">JPY - Japanese Yen</option>
               <option value="AUD">AUD - Australian Dollar</option>
               <option value="CAD">CAD - Canadian Dollar</option>
               <option value="CNY">CNY - Chinese Yuan</option>
               <option value="INR" >INR - Indian Rupee</option>
               <option value="BRL">BRL - Brazilian Real</option>
               <option value="ZAR">ZAR - South African Rand</option>
            </select>
         </div>

         <div className="input-conatiner">
            <label htmlFor="to">To Currenct :</label>
            <select name="" id="to" value={toval} onChange={addto}>
               <option value="USD">USD - United States Dollar</option>
               <option value="EUR">EUR - Euro</option>
               <option value="GBP">GBP - British Pound Sterling</option>
               <option value="JPY">JPY - Japanese Yen</option>
               <option value="AUD">AUD - Australian Dollar</option>
               <option value="CAD">CAD - Canadian Dollar</option>
               <option value="CNY">CNY - Chinese Yuan</option>
               <option value="INR">INR - Indian Rupee</option>
               <option value="BRL">BRL - Brazilian Real</option>
               <option value="ZAR">ZAR - South African Rand</option>
            </select>
         </div>
         <div className="result">
            <p>{amount} {fromval} is equal to {result} {toval}</p>
         </div>
      </div>
     </div>
     </>
    )
}
