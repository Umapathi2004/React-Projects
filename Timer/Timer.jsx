import React, { useEffect, useState } from 'react';

export const Timer = () => {
  const [currenttime,setCurrenttime]=useState(new Date);
  useEffect(()=>{
    let time=setInterval(()=>{
      setCurrenttime(new Date);
    },1000)
    return ()=>clearInterval(time);
  },[])
  function currectTime(ctime){
     return (ctime==0?12:ctime>12?ctime-12:ctime);
  }
  function double(data){
    return (data>=10?data:`0${data}`)
  }
  function formetdate(date){
    const option={weekday:"long",year:"numeric",month:"long",day:"numeric"}
    return date.toLocaleDateString(undefined,option);
  }
  return (
    <>
    <div className="container">
      <h1>Digital Clock</h1>
      <div className="time">
        {double(currectTime(currenttime.getHours()))} : {double(currenttime.getMinutes())} : {double(currenttime.getSeconds())} 
        {(currenttime.getHours())>=12?" PM":" AM"}
        </div>
      <div className="date">{formetdate(currenttime)}</div>
    </div>
    </>
  )
}
