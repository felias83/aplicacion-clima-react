import React, { useState } from 'react'


export const WheatherApp = () => {
  
  const [ciudad, setCiudad] = useState('')
  const [dataClima, setDataClima] = useState(null)
  
  const handleCambiodeCiudad= (e)=>{
  setCiudad(e.target.value)

  }

  const handleSubmit=(e)=>{
  e.preventDefault()
  if (ciudad.length>0) fetchClima()
    fetchClima()
  }

  const Apikey='bd523413c8efeb273f4e05451d2f1932'

const diffKelvin =273.15
  const urlBase = 'http://api.openweathermap.org/data/2.5/weather'
  
  const fetchClima = async()=>{
    try{
      const response = await fetch(`${urlBase}?q=${ciudad}&appid=${Apikey}`)
      const data =await response.json()
      setDataClima(data)
    }catch(error){
      console.log(error)

    }

    temp
  }
  return (
    <div className='container'>
        <h1>Aplicacion de clima</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            value={ciudad}
            onChange={handleCambiodeCiudad}
            >
            </input>
            <button type='submit'>Buscar</button>
        </form>
        {
          dataClima && (
            <div>
              <h2>{dataClima.name}</h2>
              <p>Temperatura:{parseInt(dataClima?.main?.temp - diffKelvin)} grados</p>
              <p>Condicion Meteorologica: {dataClima.weather[0].description}</p> 
              <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}.png`}></img>
            </div>
          )
        }
    </div>
  )
}
