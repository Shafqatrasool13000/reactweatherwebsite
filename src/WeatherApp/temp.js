// https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=71f417e6c80f8b57b0b5338c2017390b
import React, { useState, useEffect } from 'react'
import './style.css'
import WeatherUI from './WeatherUI'

const Temp = () => {

    const [userData, setuserData] = useState("Okara")
    const [tempInfo, setTempInfo] = useState("")
    const changeWeatherInfo = async () => {
       

           try {
               
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userData}&units=metric&appid=71f417e6c80f8b57b0b5338c2017390b`;
                const response = await fetch(apiUrl);
                const gotData = await response.json();
                const { temp } = gotData.main;
                // const {main:weathermood}=gotData.weather;
                const { pressure } = gotData.main;
                const { humidity } = gotData.main;
                const { speed } = gotData.wind;
                const { main: weathermood } = gotData.weather[0]
                const { name: city } = gotData;
                const { country } = gotData.sys;
                const { sunset } = gotData.sys;
                
                const myAllWeatherData = {
                    temp,
                    pressure,
                    humidity,
                    speed,
                    weathermood,
                    city,
                    country,
                    sunset,
                }
                
                setTempInfo(myAllWeatherData);
            } catch (error) {
                if(!userData){
                    alert(`fill Search Field `)
                }
                console.log(error);
            }
            setuserData('');
            
            
            
        
    }
        useEffect(() => {
            

                changeWeatherInfo()
            
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    const handKeyPress=(event)=>{
       if(event.key==='Enter'){
          
        return changeWeatherInfo();
       }
    }
    return (
        <>
            <div className="wrap">
                {/* SearchInput fill data */}
                <div className='search'>
                    <input type="search"
                        placeholder="Search..."
                        autoFocus
                        id='search'
                        className="searchTerm"
                        value={userData}
                        onChange={(e) => setuserData(e.target.value)}
                        onKeyPress={(event)=>handKeyPress(event)}
                    />
                    {/* Search Button */}
                    <button className="searchButton" type='button ' onClick={() => { changeWeatherInfo() }}>Search </button>
                </div>
            </div>
            <WeatherUI {...tempInfo} />
        </>
    )
}

export default Temp
