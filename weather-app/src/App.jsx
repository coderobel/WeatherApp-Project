import { useState } from 'react'
import axios from 'axios';
function App() {

  const [data,setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=80a235485ded319d443e90dc7c86869e`

 const searchLocation = async (event) => {
  if (event.key === 'Enter') {
    try {
      const response = await axios.get(url);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Failed to fetch weather data. Please try again and make sure your city name is correct.");
    }
  }
};

 
  return (
    <>
      <div className="bg-[url('/weathers.jpg')] bg-cover bg-center w-screen h-screen flex items-center justify-center">
        <div className="weather-data bg-black bg-opacity-80 p-8 rounded-lg shadow-lg text-center">
          <img src="/weather.jpg" alt="Weather icon" className="mx-auto mb-4 w-20 h-20 rounded-lg" />
          <h1 className="city text-2xl text-white ">{data.name || "City Name"}</h1>
          <h2 className="temperature text-3xl text-white">{data?.main ? (data.main.temp - 273.15).toFixed(1) : "--"}°C   </h2>
          <h3 className="text-1xl text-white">Wind speed: {data?.wind?.speed ? `${data.wind.speed} m/s` : "--"}</h3>
          <h3 className="text-lg text-white capitalize">{data?.weather?.[0]?.description}</h3>
          <div className="flex items-center justify-center gap-2">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter City"
          className="border  bg-transparent p-2 rounded focus:outline-none text-white"
        />
        <button
          onClick={searchLocation}
          className="bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded transition"
        >
          Search
        </button>
      </div>
        </div>
      </div>
    </>
    
  );
}

export default App
