import React from 'react'

const weatherData = [
    {
        tempreature: 33,
        city: "Nagpur",
        weather: "sunny"
    },
    {
        tempreature: 25,
        city: "AahilyaNagar",
        weather: "cloudy"
    },
    {
        tempreature: 17,
        city: "pune",
        weather: "rainy"
    },

    {
        tempreature: 10,
        city: "Jambu",
        weather: "snowy"
    },

    {
        tempreature: 25,
        city: "Rahuri",
        weather: "cloudy"
    },
    {
         tempreature: 28,
         city : "Mumbai",
         weather : "rainy"
    },

    {
        tempreature: 35,
        city: "Nashik",
        weather: "sunny"
    },
    {
        tempreature: 22,
        city: "Kolhapur",
        weather: "rainy"
    },

    {
        tempreature: 10,
        city: " Shambhaji Nagar",
        weather: "snowy"

    }
]

function Home() {
  return (
    <>
    <h1 className='weather-card-heading'>Weather Card</h1>
    <div className='weather-card-container'>
       

    </div>
    </>
  )
}

export default Home