import { useEffect, useState } from "react"
import search_icon from "../assets/search-interface-symbol.png"
import snowfall_icon from "../assets/snowfall.png"
import strom_icon from "../assets/storm.png"
import humidity_icon from "../assets/humidity.png"
import wind_icon from "../assets/wind.png";
import sun from "../assets/sun.png"
import weather_icon from "../assets/weather.png"

function WeatherDetails({currentWeater,temp,cityname,country,lat,log,humidity,wind}){
  return (
  <>
  <div className="weaterDetails">
  <img src={currentWeater} alt=""  className="currentweather"/>
  <div className="temperature">{temp}°C</div>
  <div className="city">{cityname}</div>
  <div className="country">{country}</div>
  <div className="code">
    <div className="lat"><span>Latitude</span><span className="latval">{lat}</span></div>
    <div className="log"><span>Longtitude</span><span className="logval">{log}</span></div>
  </div>
  <div className="Wind-Humidity">
    <div className="humidity">
        <img src={humidity_icon} alt="" />
        <span>{humidity} %</span>
        <span>Humidity</span>
    </div>
    <div className="wind">
        <img src={wind_icon} alt="" />
        <span>{wind} Km/h</span>
        <span>Wind Flow</span>
    </div>
  </div>
  </div>
  </>
  )
}

export const Weather = () => {
  const [searchName,SetsearchName]=useState("Chennai")
  const [CurrentWeater,SetCurrentWeather]=useState(weather_icon);
  const [temp,Settemp]=useState(0);
  const [cityname,SetCityname]=useState("");
  const [country,Setcountery]=useState("");
  const [lat,Setlat]=useState(0);
  const [log,Setlog]=useState(0);
  const [humidity,Sethumidity]=useState(0);
  const [wind,Setwind]=useState(0);
  const [CityNotFound,SetCityNotFound]=useState(false);
  const [Loading,SetLoading]=useState(false);
  const [Error,SetError]=useState(false);

  var WeaterIconMap={
    "01d":sun,
    "01n":sun,
    "02d":sun,
    "02n":sun,
    "03d":weather_icon,
    "03n":weather_icon,
    "04d":weather_icon,
    "04n":weather_icon,
    "09d":strom_icon,
    "09n":strom_icon,
    "10d":strom_icon,
    "10n":strom_icon,
    "13d":snowfall_icon,
    "13n":snowfall_icon
  };

  function ChangeSearch(e){
    SetsearchName(e.target.value)
  }
  function GetEnterKey(e){
    if((e.key)=="Enter"){
        Search();
    }
  }
  async function Search(){
    SetError(false);
    SetCityNotFound(false);
    try{
       SetLoading(true);
       let api=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchName}&APPID=f56e17bff44718cf6f026368806362cd&units=metric`);
       const data=await api.json();
       if(data.cod==404){
        SetCityNotFound(true);
        return;
       }

       SetCityname(data.name)
       Setlat(data.coord.lat);
       Setlog(data.coord.lon);
       Settemp(Math.floor(data.main.temp));
       Setcountery(data.sys.country);
       Sethumidity(data.main.humidity);
       Setwind(data.wind.speed);
       let IconsSelect =[data.weather[0].icon];
       SetCurrentWeather((WeaterIconMap[IconsSelect])  || weather_icon);
    }
    catch(error){SetError(true)}
    finally{
        SetLoading(false);
    }
}
useEffect(function(){
    Search();
},[])
  return (
    <div className="container">
        <div className="search">
            <input type="text" name="place" value={searchName} placeholder='Search The City Name...' onChange={ChangeSearch} onKeyDown={GetEnterKey}/>
            <img src={search_icon} alt="" onClick={Search}/>
        </div>
        {Loading && <div className="Loading">Loading...</div>}
        {CityNotFound && <div className="Citynotfound">City Not Found...</div>}
        {Error && <div className="Error">Some think is Wrong...</div>}

        {!Loading && !CityNotFound && !Error && <WeatherDetails currentWeater={CurrentWeater} temp={temp} cityname={cityname} country={country}
                        lat={lat} log={log} humidity={humidity} wind={wind}/>}
                        
    </div>
  )
}